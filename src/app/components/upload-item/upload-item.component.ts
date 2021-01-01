import { Component, Input, OnInit } from '@angular/core';
import { FileModel } from 'src/app/models/file.model';

@Component({
  selector: 'app-upload-item',
  templateUrl: './upload-item.component.html',
  styleUrls: ['./upload-item.component.scss']
})
export class UploadItemComponent implements OnInit {
  @Input() public fileUpload: FileModel;
  constructor() { }

  ngOnInit() {
  }

}
