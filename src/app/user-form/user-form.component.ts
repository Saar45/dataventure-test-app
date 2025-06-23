import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user.model';
//import { IonCardContent, IonCardTitle, IonLabel, IonCardHeader } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule],
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Input() user: User | null = null;
  @Output() submitForm = new EventEmitter<Partial<User>>();
  @Output() cancel = new EventEmitter<void>();

  name = '';
  email = '';
  phone = '';

  ngOnChanges() {
    this.name = this.user?.name || '';
    this.email = this.user?.email || '';
    this.phone = this.user?.phone || '';
  }

  submit() {
    if (this.name && this.email && this.phone) {
      this.submitForm.emit({ name: this.name, email: this.email, phone: this.phone });
    }
  }
}
