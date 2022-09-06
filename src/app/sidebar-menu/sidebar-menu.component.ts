import { Component, OnInit } from '@angular/core';
import { faHouse, faBox, faReceipt, faUser,faAngleDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  faHouse = faHouse;
  faBox = faBox;
  faReceipt =faReceipt;
  faUser = faUser;
  faAngleDown = faAngleDown;
  faCaretRight = faCaretRight;

  constructor() { }

  ngOnInit(): void {
  }

  showHideProductMenu(){
    let productBottom = <HTMLElement>document.querySelector(".products-bloc ul");
    productBottom.classList.toggle("show-hide-products");
  }
}
