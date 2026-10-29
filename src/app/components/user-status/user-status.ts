import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-status.html',
  styleUrl: './user-status.css'
})
export class UserStatusComponent {
  @Input() isOnline: boolean = false;
  @Output() statusChanged = new EventEmitter<boolean>();

  toggleStatus(): void {
    this.statusChanged.emit(!this.isOnline);
  }
}