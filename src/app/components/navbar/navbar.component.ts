import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  showMenu = true;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
