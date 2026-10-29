import { Component } from '@angular/core';
import { UserCardComponent } from './components/user-card/user-card';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  currentUser: User = {
    name: 'Walied Albassiry',
    age: 24,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Walied',
    bio: 'Full-stack Web & Mobile Application Developer working with Angular and TypeScript.',
    isOnline: true
  };
}