import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Conference } from '../../models/conference';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-list-conf',
  imports: [CommonModule,FormsModule,DatePipe ],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {

searchTitle: string ;  
    list: Conference[] ;
    title: string = 'Liste des conférences';
  
    ngOnInit(): void {
      this.list = [
        new Conference(
          'Conference Angular',
          'Web dev conference and workshop',
          new Date('2026-11-20'),
          20,
          5,
          'https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE='
        ),
        new Conference(
          'Conference Data Science',
          'IA et Machine Learning',
          new Date('2026-12-10'),
          30,
          30,
          'https://picsum.photos/seed/datascience/600/400'
        ),
      ];
      this.searchTitle='';
      
    }
  
    participate(conf:Conference){
      conf.nbrReservation++;
    }
  }