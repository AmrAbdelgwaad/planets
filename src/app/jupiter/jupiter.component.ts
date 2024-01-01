import { Component, HostListener } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-jupiter',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './jupiter.component.html',
  styleUrl: './jupiter.component.scss',
})
export class JupiterComponent {
  tabs = [
    {
      id: 1,
      label: 'Overview',
      hidden: '',
      panelId: 'overview',
    },
    {
      id: 2,
      label: 'Internal',
      hidden: 'structure',
      panelId: 'internal',
    },
    {
      id: 3,
      label: 'Surface',
      hidden: 'geology',
      panelId: 'surface',
    },
  ];
  activeTab = 1;

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (window.matchMedia('(max-width: 44.25em)').matches) {
      switch (event.key) {
        case 'ArrowRight':
          this.activateNextTab();
          break;
        case 'ArrowLeft':
          this.activatePreviousTab();
          break;
      }
    } else {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          this.activatePreviousTab();
          break;
        case 'ArrowDown':
          event.preventDefault();
          this.activateNextTab();
          break;
      }
    }
  }

  activateTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }

  activateNextTab(): void {
    this.activeTab = (this.activeTab % 3) + 1;
  }

  activatePreviousTab(): void {
    this.activeTab = this.activeTab === 1 ? 3 : this.activeTab - 1;
  }
}
