import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-header',
  templateUrl: './upload-header.component.html',
  styleUrls: ['./upload-header.component.scss']
})
export class UploadHeaderComponent implements OnInit {
  @Input() public fileCount: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
