import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FileModel } from 'src/app/models/file.model';

@Component({
  selector: 'app-upload-window',
  templateUrl: './upload-window.component.html',
  styleUrls: ['./upload-window.component.scss']
})
export class UploadWindowComponent implements OnInit {
  @Input() public selectedFiles: FileModel[];
  @Output() public onClearListEmmiter: EventEmitter<void> = new EventEmitter<void>();
  public listMaxHeight: boolean = true;
  public stopUpload: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public toggleMaxHeight(): void { this.listMaxHeight = !this.listMaxHeight}
  public clearList(): void {
    this.stopUpload =true;
    this.onClearListEmmiter.emit();

  }

}
