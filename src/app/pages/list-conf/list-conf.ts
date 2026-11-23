import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-list-conf',
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ConferenceList {
  searchTitle = '';

  list: Conference[] = [
    { id: 1, title: 'Angular 21 Conference', description: 'Nouveautés d’Angular 21',
      date: new Date('2027-11-15'), place: 'Tunis', maxParticipants: 100, nbParticipants: 75 },
    { id: 2, title: 'Signals Workshop', description: 'Atelier pratique sur les signals',
      date: new Date('2027-11-30'), place: 'Ariana', maxParticipants: 50, nbParticipants: 44 },
    { id: 3, title: 'Web Conference', description: 'Tendances du développement web',
      date: new Date('2027-11-20'), place: 'Sousse', maxParticipants: 80, nbParticipants: 80 },
  ];

  /** Conférences dont le titre contient le texte saisi (insensible à la casse). */
  get filteredList(): Conference[] {
    const term = this.searchTitle.trim().toLowerCase();
    return this.list.filter(c => c.title.toLowerCase().includes(term));
  }

  remaining(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  /** green : >= 10 places, orange : 1 à 9 places, red : 0 place */
  statusClass(c: Conference): string {
    const r = this.remaining(c);
    return r === 0 ? 'btn-red' : r < 10 ? 'btn-orange' : 'btn-green';
  }

  register(c: Conference): void {
    if (this.remaining(c) > 0) {
      c.nbParticipants++;
    }
  }
}
