import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AdminModule } from './admin/admin.module';
import { authInterceptorProviders } from './auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    OrderComponent,
    ShoppingComponent,
  ],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
