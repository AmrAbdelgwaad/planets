import { Component, HostListener } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-earth',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './earth.component.html',
  styleUrl: './earth.component.scss',
})
export class EarthComponent {
  tabs = [
    {
      id: 1,
      label: 'Overview',
      panelId: 'overview',
    },
    {
      id: 2,
      label: 'Internal',
      panelId: 'internal',
    },
    {
      id: 3,
      label: 'Surface',
      panelId: 'surface',
    },
  ];
  activeTab = 1;

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowRight':
        this.activateNextTab();
        break;
      case 'ArrowLeft':
        this.activatePreviousTab();
        break;
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
