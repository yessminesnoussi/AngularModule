export class Conference {
  title: string;
  description: string;
  date: Date;
  nbrMax: number;
  nbrReservation: number;
  picture: string;

  constructor(title: string, description: string, date: Date,
              nbrMax: number, nbrReservation: number, picture: string) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.nbrMax = nbrMax;
    this.nbrReservation = nbrReservation;
    this.picture = picture;
  }
}

