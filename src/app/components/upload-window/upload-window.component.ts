import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileModel } from 'src/app/models/file.model';

@Component({
  selector: 'app-upload-window',
  templateUrl: './upload-window.component.html',
  styleUrls: ['./upload-window.component.scss']
})
export class UploadWindowComponent implements OnInit {
  @Input() public selectedFiles: FileModel[];
  constructor() { }

  ngOnInit() {
    console.log(this.selectedFiles)
  }

}
