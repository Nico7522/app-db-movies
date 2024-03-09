import { Component, Inject, OnInit, inject } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor() {}

  navigation = [
    {
      url: '/popular',
      title: 'Top 10 popular movies',
    },
    {
      url: 'movies/nowplaying',
      title: 'Now playing',
    },
    {
      url: 'movies/topmovies',
      title: 'Top rated movies',
    },
  ];
}
