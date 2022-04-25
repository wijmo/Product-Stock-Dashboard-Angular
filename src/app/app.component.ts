import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wijmoProductStockApp';
  sideNavOpen = true;

  toggleSideNav() {
    let sideNav = document.getElementById('side-nav');
    let mainContent = document.getElementById('maincontent');
    sideNav.classList.toggle('hidden');
    mainContent.classList.toggle('expand');
    // if(this.sideNavOpen) {
    //   sideNav?.style.setProperty('width', '0px');
    //   mainContent?.style.setProperty('margin-left', '0px');
    //   this.sideNavOpen = false;
    // } else {
    //   sideNav?.style.setProperty('width', '150px');
    //   mainContent?.style.setProperty('margin-left', '150px');
    //   this.sideNavOpen = true;
    // }
  }
}
