import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { CKEditorModule } from 'ckeditor4-angular';
@NgModule({
  declarations: [
    ProductComponent,
    OrderComponent,
    HomeComponent,
    LoginComponent,
    NewspaperComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    CKEditorModule
  ],
  exports: [OrderComponent]
})
export class AdminModule { }
