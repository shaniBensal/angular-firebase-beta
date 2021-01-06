import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FileDetails } from '../../models/file-details.model';
import { FileModel } from '../../models/file.model';
import { FileApiService } from '../../_service/file-api.service';
import { StorageApiService } from '../../_service/storage-api.service';

@Component({
  selector: 'app-upload-item',
  templateUrl: './upload-item.component.html',
  styleUrls: ['./upload-item.component.scss']
})
export class UploadItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public fileUpload: FileModel;
  @Input() public stopFileUpload: boolean = false;
  public $percentage: number;
  public url: string = '';
  private destroy$: Subject<null> = new Subject<null>();
  constructor(private apiService: FileApiService, private storageApi: StorageApiService) { }

  ngOnInit() {
    this.apiService.pushFileToStorage(this.fileUpload);
    this.apiService.downloadUrl$.subscribe(res => {
      if (this.$percentage === 100){
        let fileDetailsServer: FileDetails = {
          id: '',
          name: this.fileUpload.name,
          size: this.fileUpload.file.size,
          url: res,
          fileType: this.fileUpload.file.type
        }
        this.addFileToStorage(fileDetailsServer);
      }
    });
    this.apiService.uploadProgress$.subscribe(res => {
      this.$percentage = res;
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

  public addFileToStorage(fileDetails: FileDetails): void{
    this.storageApi.createNewItem(fileDetails);
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }


}
