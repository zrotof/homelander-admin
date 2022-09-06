import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
const routes: Routes = [
  
  {path:"dashboard", component: DashboardComponent},
  {path:"orders", component: OrdersComponent},
  {path:"customers", component:CustomersComponent },
  {path:"dresses", component: DressesComponent},
  {path:"shoes", component: ShoesComponent},
  {path:"accessories", component: AccessoriesComponent},
  {path:"decorations", component: DecorationsComponent},
  {path:"comments", component: CommentsComponent},
  {path: 'categories/créer-catégorie',component: CategoryAddEditComponent},
  {path:"categories", component: CategoriesListComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
