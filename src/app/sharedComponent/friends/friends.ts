import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  friends = ['Sami', 'Sarra', 'Amine'];
  newFriend = '';

  add(): void {
    const name = this.newFriend.trim();
    if (name) {
      this.friends.push(name);
      this.newFriend = '';
    }
  }
}
