import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule],
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnChanges {
  @Input() user: User | null = null;
  @Output() submitForm = new EventEmitter<Partial<User>>();
  @Output() cancel = new EventEmitter<void>();

  // Déclaration du groupe de formulaire réactif

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Ajout d'un petit regex pour le phone number
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{10}$/)
        ]
      ],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      this.form.patchValue({
        name: this.user?.name || '',
        email: this.user?.email || '',
        phone: this.user?.phone || '',
      });
      // Marquer le formulaire comme "pristine" pour éviter les erreurs de validation
      this.form.markAsPristine();
    }
  }

  submit() {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
