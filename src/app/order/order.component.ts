import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from '../model/Order';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private _router: Router, private OrderService: OrderService) { }
  orders!: Order[];
  ngOnInit(): void {
  }
  XacNhan() {
    alert("Đơn hàng của bạn đã được tiếp nhận");
    this._router.navigate(['/shopping']);
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
