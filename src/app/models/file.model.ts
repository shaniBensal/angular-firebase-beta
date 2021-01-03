import { Observable } from 'rxjs';

export interface FileModel {
  key: string;
  name: string;
  url: string;
  file: File;
  percentage?: Observable<number>;
}
