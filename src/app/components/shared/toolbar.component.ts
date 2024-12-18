import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="toolbar">
      <a class="app-title" routerLink='/'>TodoApp</a>
      <button class="toolbar-btn" routerLink="/register" *ngIf="isRegisterBtnShown">S'inscrire</button>
      <button class="toolbar-btn" routerLink="/login" *ngIf="isLoginBtnShown">Se connecter</button>
      <div class="avatar-logout-btn" *ngIf="isLogoutBtnShown">
        <div class="user-avatar">
          {{ firstEmailLetter![0] | uppercase }}
        </div>
        <button class="toolbar-btn" routerLink="/login" (click)="logout()">Se déconnecter</button>
      </div>
    </nav>
  `,
  styles: [`
    .toolbar {
      height: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(90deg, #1e3c72, #2a5298); /* Dégradé bleu */
      padding: 0 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: sticky; /* Pour que la barre ne défile pas */
      top: 0;
    }

    .app-title {
      text-decoration: none;
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .toolbar-btn {
      padding: 0.5rem 1rem;
      border-radius: 8px;
      background: #e74c3c; /* Rouge */
      color: white;
      font-size: 1.1em;
      border: none;
      transition: background-color 250ms, transform 250ms;
    }

    .toolbar-btn:hover {
      cursor: pointer;
      background-color: #c0392b; /* Rouge foncé */
      transform: scale(1.05);
    }

    .avatar-logout-btn {
      display: flex;
      align-items: center;
    }

    .avatar-logout-btn > * {
      margin-left: 1rem;
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f1c40f; /* Jaune */
      color: #2c3e50; /* Bleu foncé */
      font-size: 1.3em;
      font-weight: bolder;
    }
  `]
})
export class ToolbarComponent {
  @Input() isLoginBtnShown!: boolean;
  @Input() isRegisterBtnShown!: boolean;
  @Input() isLogoutBtnShown!: boolean;

  firstEmailLetter = localStorage.getItem('email');
  logout = () => localStorage.removeItem('email');
}
