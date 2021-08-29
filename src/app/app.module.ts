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
import { NgxPaginationModule } from 'ngx-pagination';
import { CKEditorModule } from 'ckeditor4-angular';
// import { RouterModule } from '@angular/router';
// import{appRoutes} from
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
    HttpClientModule,
    NgxPaginationModule,
    CKEditorModule,
    // RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  providers: [ProductService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
