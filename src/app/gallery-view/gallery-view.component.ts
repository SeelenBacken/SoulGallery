import {Component, NgZone, OnInit} from '@angular/core';
import { IpcRenderer } from 'electron';
import { ElectronService } from 'ngx-electron';

export interface StoredImage {
  _id: string;
  content: string;
  dateTime: Date;
  album: string;
  tags: string[];
}

export interface Album {
  title: string;
  image: StoredImage;
}

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.css']
})

export class GalleryViewComponent implements OnInit {

  public ipcRenderer: IpcRenderer;
  public images: StoredImage[] = [];
  public albums: Album[] = [];

  constructor(private electronServiceInstance: ElectronService, private ngZone: NgZone) {
    this.ipcRenderer = this.electronServiceInstance.ipcRenderer;

    this.ipcRenderer.on('images', (event, arg) => {
      this.ngZone.run(() => {
        arg.forEach(image => {
          this.images.push(image);
          if (!this.albums.includes(image.album)) {
            this.albums.push({
              title: image.album,
              image
            });
          }
        });
      });
    });
  }

  ngOnInit(): void {
    this.ipcRenderer.send('loadImgs');
  }

}
