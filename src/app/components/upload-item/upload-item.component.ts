import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FileModel } from 'src/app/models/file.model';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-upload-item',
  templateUrl: './upload-item.component.html',
  styleUrls: ['./upload-item.component.scss']
})
export class UploadItemComponent implements OnInit {
  @Input() public fileUpload: FileModel;
  public $percentage: number;
  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.pushFileToStorage(this.fileUpload);
    this.apiService.uploadProgress$.subscribe(res => {
      this.$percentage = res
    });
  };


}
