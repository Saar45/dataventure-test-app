import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = `${environment.baseUrl}`; // Utilise baseUrl de l'environnement

  async getUsers(): Promise<User[]> {
    const res = await fetch(`${this.baseURL}/users`);
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    return res.json();
  }

  async addUser(user: Partial<User>): Promise<User> {
    const res = await fetch(`${this.baseURL}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    return res.json();
  }

  async updateUser(user: User): Promise<User> {
    const userInfo = {
      name: user.name,
      email: user.email,
      phone: user.phone
    };
    
    const res = await fetch(`${this.baseURL}/user/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    });
    return res.json();
  }

  async deleteUser(id: number): Promise<void> {
    await fetch(`${this.baseURL}/user/${id}`, { method: 'DELETE' });
  }
}
export { User };

