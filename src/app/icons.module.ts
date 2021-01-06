import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import {X, ChevronDown, FileText, Trash2, ChevronUp, CheckCircle} from 'angular-feather/icons';

const icons = {
  X,
  ChevronDown,
  FileText,
  Trash2,
  ChevronUp,
  CheckCircle
};

@NgModule({
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
