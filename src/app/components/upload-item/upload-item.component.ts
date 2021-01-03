import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { FileModel } from 'src/app/models/file.model';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-upload-item',
  templateUrl: './upload-item.component.html',
  styleUrls: ['./upload-item.component.scss']
})
export class UploadItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public fileUpload: FileModel;
  @Input() public stopFileUpload: boolean = false;
  public $percentage: number;
  private destroy$: Subject<null> = new Subject<null>();
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.pushFileToStorage(this.fileUpload);
    this.apiService.uploadProgress$.subscribe(res => {
      this.$percentage = res
    });
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (!!this.stopFileUpload) {
      this.cancelUpload();
    }
  }

  public cancelUpload(): void {
    this.apiService.cancelUpload();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }


}
