import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';




import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DressesComponent } from './components/dresses/dresses.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { DecorationsComponent } from './components/decorations/decorations.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CategoryAddEditComponent } from './components/categories/category-add-edit/category-add-edit.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';


import {TableModule} from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    DashboardComponent,
    OrdersComponent,
    CustomersComponent,
    DressesComponent,
    ShoesComponent,
    AccessoriesComponent,
    DecorationsComponent,
    CommentsComponent,
    CategoriesListComponent,
    CategoryAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TableModule,
    ToastModule,
    MessageModule,
    ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
