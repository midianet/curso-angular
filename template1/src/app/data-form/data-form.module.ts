import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form.component';
import { ShareModule } from '../share/share.module';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareModule,
    HttpModule
  ],
  declarations: [DataFormComponent]
})
export class DataFormModule { }
