import { Component, OnInit } from '@angular/core';
import { IpcRenderer } from 'electron';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public renderer: IpcRenderer;

  constructor(private electronServiceInstance: ElectronService  ) {
    this.renderer = this.electronServiceInstance.ipcRenderer;
    console.log('Renderer should be initialized');
    console.log(this.electronServiceInstance);
    console.log(this.renderer);
    if (!this.renderer) {
      console.error('Renderer is null');
    }
  }

  ngOnInit(): void {
  }

  onClickClose(): void {
    console.log('Sending Shutdown');
    this.renderer.send('shutdown');
  }

}
