import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from './order/order.component';
import{ShoppingComponent} from './shopping/shopping.component';
import{HomeComponent} from './admin/home/home.component';
import { LoginComponent } from './admin/login/login.component';
const routes: Routes = [
  {path:'admin',component:LoginComponent},
  {path:'order',component:OrderComponent},
  { path: 'shopping', component: ShoppingComponent },
  { path: '**', redirectTo: 'shopping', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
