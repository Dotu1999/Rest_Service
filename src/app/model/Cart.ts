export class Cart {
    id: number = 0;
    name: string = '';
    price: number = 0;
    quantity: number = 0;
    constructor(id: number, name: string, price: number, quantity1: number) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity1;
    }
  }
  