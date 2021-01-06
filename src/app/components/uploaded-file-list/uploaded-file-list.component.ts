import { Component, Input, OnInit } from '@angular/core';
import { FileDetails } from '../../models/file-details.model';

@Component({
  selector: 'app-uploaded-file-list',
  templateUrl: './uploaded-file-list.component.html',
  styleUrls: ['./uploaded-file-list.component.css']
})
export class UploadedFileListComponent implements OnInit {
  @Input() public list: FileDetails[] = [];
  public tableHeaders: string[] = ['ID', 'Name', 'Size(MB)', 'Type', 'Download'];

  constructor() { }

  ngOnInit() {
  }

}
