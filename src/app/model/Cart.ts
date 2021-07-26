import { Product } from "./Product";

export class Cart {
    // id: number = 0;
    // name: string = '';
    // price: number = 0;
    productId!:number;
    product!:Product
    quantity: number = 0;
    constructor(product1:Product,proId:number,quantity:number)
    {
      this.product = product1;
      this.productId=proId;
      this.quantity = quantity;
    }
    // constructor(id: number, name: string, price: number, quantity1: number) {
    //   this.id = id;
    //   this.name = name;
    //   this.price = price;
    //   this.quantity = quantity1;
    // }
  }
  