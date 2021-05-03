const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const log = require('loglevel')

const ipcMain = electron.ipcMain;

const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: false,
    title: "Picture Gallery",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/PictureGallery/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})

ipcMain.on('shutdown', () => {
  log.trace('Shutting Down...');
  app.quit();
})
