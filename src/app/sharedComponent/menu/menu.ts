import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  items = [
    { label: 'Accueil', href: '#top' },
    { label: 'Profil', href: '#profil' },
    { label: 'Conférences', href: '#conferences' },
    { label: 'Amis', href: '#amis' },
    { label: 'Notifications', href: '#notifications' },
  ];
  active = 'Accueil';
}
