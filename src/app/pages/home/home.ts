import { Component } from '@angular/core';
import { Profile } from '../../sharedComponent/profile/profile';
import { Friends } from '../../sharedComponent/friends/friends';
import { Notifications } from '../../sharedComponent/notifications/notifications';
import { ConferenceList } from '../list-conf/list-conf';

@Component({
  selector: 'app-home',
  imports: [Profile, Friends, Notifications, ConferenceList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
