import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from '../model/Order';
import { Cart } from '../model/Cart';
import { LineItems } from '../model/LineItems';
import{ProductService} from '../product.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private _router: Router, private OrderService: OrderService,private ProductService: ProductService) { }
  orders!: Order[];
  carts !:Cart[];
  lineItems :LineItems[]=[];
  ngOnInit(): void {
    this.ProductService.ProductDataSource$.subscribe(list => {
      this.carts = list;
    });
  }
  XacNhan() {
    alert("Đơn hàng của bạn đã được tiếp nhận");
    this.addOrder();
    // this._router.navigate(['/shopping']);
  }
  nameUser!:string;
  phoneUser!:string;
  addUser!:string;
  order:Order = new Order();
  addOrder()
  {
    this.carts.forEach(c=>{
      let  li = new LineItems();
      li.productId = c.productId;
      li.quantity= c.quantity;
      li.product = c.product
      this.lineItems.push(li);
      // console.log("hello");
      console.log(this.lineItems);
    })
    this.order.username = this.nameUser;
    this.order.phone = this.phoneUser;
    this.order.address = this.addUser;
    this.order.lineItems = this.lineItems;
    this.OrderService.addOrder(this.order).subscribe(
          data => {
            console.log("thành công");
          },
          err => {
            console.log(err);
          }
        );

  }
  
  // getOrder() {
  //   this.OrderService.getOrder().subscribe(
  //     data => {
  //       this.orders = data;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
}
