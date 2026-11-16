import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Conference {
  title: string;
  date: string;
  adrs: string;
  available_places: number;
  picture: string;
}

@Component({
  selector: 'app-list-conf',
  imports: [CommonModule],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {

  conferences: Conference[] = [
    {
      title: 'Artificial Intelligence & Future Technologies',
      date: '25 Novembre 2026',
      adrs: 'Tunis, Tunisia',
      available_places: 45,
      picture: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900'
    },
    {
      title: 'Data Science & Big Data Summit',
      date: '02 Décembre 2026',
      adrs: 'Sousse, Tunisia',
      available_places: 28,
      picture: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900'
    },
    {
      title: 'Web Development & Innovation',
      date: '10 Décembre 2026',
      adrs: 'Sfax, Tunisia',
      available_places: 60,
      picture: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=900'
    },
    {
      title: 'Cybersecurity & Cloud Computing',
      date: '18 Décembre 2026',
      adrs: 'Monastir, Tunisia',
      available_places: 12,
      picture: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900'
    }
  ];

  
}
