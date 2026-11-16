import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //attributes
  title: string;
  state: boolean;

  //constructeurs
  constructor(){
    this.title='HOME 4 DAS I 10';
    this.state=false;
  }


  //methodes
  ngOnInit(){

  }

  change(){
    //action
    this.title='HOME 4 DAS I 9';
    this.state=true;
  }
}
