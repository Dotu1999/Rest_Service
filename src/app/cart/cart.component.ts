import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../model/Product';
import { Cart } from '../model/Cart';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _router: Router,private ProductService: ProductService) {}
  listCart: Cart[] = [];

  ngOnInit() {
    this.ProductService.ProductDataSource$.subscribe(list => {
      this.listCart = list;
      this.getTotal();
    });
  }
  total: number = 0;
  updateQuantity(cart:Cart,quantity:String)
  {
      cart.quantity = Number(quantity);
      this.getTotal();
  }
  getTotal() {
    this.total = 0;
    this.listCart.forEach(element => {
      this.total += element.product.price * element.quantity;
    });
  }
  removeFromCart(id: number) {
    let indexOfStevie = this.listCart.findIndex(i => i.product.id == id);
    this.listCart.splice(indexOfStevie, 1);
    this.getTotal();
  }
  navigateToOrder() {
    this._router.navigate(['/order']);
  }
}
