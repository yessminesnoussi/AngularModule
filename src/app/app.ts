import { Component } from '@angular/core';
import { Header } from './sharedComponent/header/header';
import { Menu } from './sharedComponent/menu/menu';
import { Footer } from './sharedComponent/footer/footer';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [Header, Menu, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
