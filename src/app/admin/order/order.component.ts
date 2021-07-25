import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../order.service';
import { Order } from '../../model/Order';
import { LineItems } from 'src/app/model/LineItems';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private OrderService: OrderService) { }
  orders!: Order[];
  ngOnInit(): void {
    this.getOrder();
  }
  getOrder() {
    this.OrderService.getOrder().subscribe(
      data => {
        this.orders = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  order!:Order;
  items:LineItems[]=[];
  getOrderDetail(id:number){
    this.OrderService.getOrderDetail(id).subscribe(
      data => {
        this.items = data.lineItems;
      },
      err => {
        console.log(err);
      }
    );
  }
}
