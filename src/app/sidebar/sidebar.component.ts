import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public innerWidth: any;
  public isMobile: boolean;
  ngOnInit() {
    // Calcolo la larghezza del monitor
    this.innerWidth = window.innerWidth;
    this.isMobile = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // Al resize cambio la risoluzione
    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 600) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}