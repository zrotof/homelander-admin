import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class CategoriesListComponent implements OnInit {

  categoriesList = [];
  constructor() { }

  ngOnInit(): void {
  }

  editCategory(categoryId: number){

  }

  deleteCategory(categoryId: number){

  }

}
