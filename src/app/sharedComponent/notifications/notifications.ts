import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = [
    'Nouvelle conférence : Angular 21 Conference',
    'Il reste peu de places pour Signals Workshop',
  ];
  show = false;
}
