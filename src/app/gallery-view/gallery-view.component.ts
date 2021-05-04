import {Component, NgZone, OnInit} from '@angular/core';
import { IpcRenderer } from 'electron';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {

  public ipcRenderer: IpcRenderer;
  public images = [];

  constructor(private electronServiceInstance: ElectronService, private ngZone: NgZone) {
    this.ipcRenderer = this.electronServiceInstance.ipcRenderer;

    this.ipcRenderer.on('images', (event, arg) => {
      this.ngZone.run(() => {
        arg.forEach(image => {
          this.images.push('data:image/png;base64,' + image.pictureString);
        });
      });
    });
  }

  ngOnInit(): void {
    this.ipcRenderer.send('loadImgs');
  }

}
