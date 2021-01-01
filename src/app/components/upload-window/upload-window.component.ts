import { Component, OnInit } from '@angular/core';
import { FileModel } from 'src/app/models/file.model';

@Component({
  selector: 'app-upload-window',
  templateUrl: './upload-window.component.html',
  styleUrls: ['./upload-window.component.scss']
})
export class UploadWindowComponent implements OnInit {
  public selectedFiles: FileModel[] = [];
  constructor() { }

  ngOnInit() {
  }

}
