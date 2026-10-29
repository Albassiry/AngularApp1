import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';
import { UserStatusComponent } from '../user-status/user-status';
import { UserBioComponent } from '../user-bio/user-bio';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, UserStatusComponent, UserBioComponent],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCardComponent {
  @Input() user!: User;

  handleStatusChange(newStatus: boolean): void {
    this.user.isOnline = newStatus;
  }

  handleBioUpdate(newBio: string): void {
    this.user.bio = newBio;
  }
}