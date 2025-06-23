import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserFormComponent } from './user-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserFormComponent
  ],
  exports: [UserFormComponent]
})
export class UserFormModule { }