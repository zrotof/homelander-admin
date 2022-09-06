import { Component, OnInit } from '@angular/core';
import { faEuroSign, faComment, faUserGroup, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faEuroSign = faEuroSign;
  faUserGroup = faUserGroup;
  faComment = faComment;
  faCartShopping = faCartShopping;
  constructor() { }

  ngOnInit(): void {
  }

}
