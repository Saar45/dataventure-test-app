import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  showForm = false;

  constructor(
    private userService: UserService,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    await this.loadUsers();
  }

  async loadUsers() {
    try {
      this.users = await this.userService.getUsers();
    } catch (err) {
      this.showToast('Erreur lors du chargement des utilisateurs', 'danger');
    }
  }

  addUser() {
    this.selectedUser = null;
    this.showForm = true;
  }

  editUser(user: User) {
    this.selectedUser = { ...user };
    this.showForm = true;
  }

  async deleteUser(user: User) {
    if (confirm('Supprimer cet utilisateur ?')) {
      try {
        await this.userService.deleteUser(user.id);
        await this.loadUsers();
        this.showToast('Utilisateur supprimé avec succès', 'success');
      } catch (err) {
        this.showToast('Erreur lors de la suppression', 'danger');
      }
    }
  }

  async onFormSubmit(user: Partial<User>) {
    try {
      if (this.selectedUser) {
        await this.userService.updateUser({ ...this.selectedUser, ...user });
        this.showToast('Utilisateur mis à jour', 'success');
      } else {
        await this.userService.addUser(user);
        this.showToast('Utilisateur ajouté', 'success');
      }
      this.showForm = false;
      await this.loadUsers();
    } catch (err) {
      this.showToast('Erreur lors de la sauvegarde', 'danger');
    }
  }

  cancelForm() {
    this.showForm = false;
  }

  async showToast(message: string, color: 'success' | 'danger' | 'warning' | 'primary' | 'medium') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'top'
    });
    toast.present();
  }
}
