import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'planets';
  anchors = [
    {
      name: 'mercury',
      routerLink: '/mercury',
      routerLinkActive: 'mercuryActive',
    },
    { name: 'venus', routerLink: '/venus', routerLinkActive: 'venusActive' },
    { name: 'earth', routerLink: '/earth', routerLinkActive: 'earthActive' },
    { name: 'mars', routerLink: '/mars', routerLinkActive: 'marsActive' },
    {
      name: 'jupiter',
      routerLink: '/jupiter',
      routerLinkActive: 'jupiterActive',
    },
    {
      name: 'saturn',
      routerLink: '/saturn',
      routerLinkActive: 'saturnActive',
    },
    {
      name: 'uranus',
      routerLink: '/uranus',
      routerLinkActive: 'uranusActive',
    },
    {
      name: 'neptune',
      routerLink: '/neptune',
      routerLinkActive: 'neptuneActive',
    },
  ];
  state = false;
  toggle() {
    this.state = !this.state;
  }
}
