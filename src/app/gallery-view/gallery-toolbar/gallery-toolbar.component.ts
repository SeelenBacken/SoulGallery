import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gallery-toolbar',
  templateUrl: './gallery-toolbar.component.html',
  styleUrls: ['./gallery-toolbar.component.css']
})
export class GalleryToolbarComponent implements OnInit {

  @Output() openAlbumDialog = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onAlbumClick(): void {
    this.openAlbumDialog.emit();
  }

}
