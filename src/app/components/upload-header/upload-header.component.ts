import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-header',
  templateUrl: './upload-header.component.html',
  styleUrls: ['./upload-header.component.scss']
})
export class UploadHeaderComponent implements OnInit {
  @Input() public fileCount: number = 0;
  @Input() public listMaxHeight: boolean = true;
  @Output() public onChangeListHeightEmmiter: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onCancelDownloadsEmmiter: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  public listHeightToggle(): void {
    this.onChangeListHeightEmmiter.emit();
  }

  public cancelDownloads(): void {
    this.onCancelDownloadsEmmiter.emit();
  }

}
