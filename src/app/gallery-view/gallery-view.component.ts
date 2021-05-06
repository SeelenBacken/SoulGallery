import {Component, Inject, NgZone, OnInit} from '@angular/core';
import { IpcRenderer } from 'electron';
import { ElectronService } from 'ngx-electron';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder} from '@angular/forms';

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

export interface DialogData {
  albumName: string;
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
  public newAlbumTitle: string;

  constructor(public dialog: MatDialog,
              private electronServiceInstance: ElectronService,
              private ngZone: NgZone) {
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
    this.openDirectoryDialog();
  }

  openDirectoryDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.newAlbumTitle = '';
    dialogConfig.data = {
      newAlbumTitle: this.newAlbumTitle
    };

    const dialogRef = this.dialog.open(GalleryViewDirectoryDialog, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log(data)
    );
  }
}

@Component({
  selector: 'app-gallery-view-directory-dialog',
  templateUrl: 'gallery-view-directory-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class GalleryViewDirectoryDialog implements OnInit{

  newAlbumTitle: string;

  constructor(private dialogRef: MatDialogRef<GalleryViewDirectoryDialog>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.newAlbumTitle = data.newAlbumTitle;
  }

  ngOnInit(): void {}

  onSaveClick(): void {
    this.dialogRef.close(this.newAlbumTitle);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
