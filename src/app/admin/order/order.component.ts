import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../order.service';
import { Order } from '../../model/Order';
import { LineItems } from 'src/app/model/LineItems';
import { Product } from 'src/app/model/Product';
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
  // products:Product[]=[];
  items!:LineItems[];
  sum:number=0;
  getOrderDetail(id:number){
    this.OrderService.getOrderDetail(id).subscribe(
      data => {
        this.sum =0;
        this.items = data.lineItems;
        this.items.forEach(e=>{
          this.sum += e.product.price*e.quantity;
        })
      },
      err => {
        console.log(err);
      }
    );
  }
}
