import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-bio.html',
  styleUrl: './user-bio.css'
})
export class UserBioComponent {
  @Input() bio: string = '';
  @Output() bioUpdated = new EventEmitter<string>();

  isEditing: boolean = false;
  tempBio: string = '';

  enableEdit(): void {
    this.tempBio = this.bio;
    this.isEditing = true;
  }

  saveBio(): void {
    this.isEditing = false;
    this.bioUpdated.emit(this.tempBio);
  }

  cancelEdit(): void {
    this.isEditing = false;
  }
}