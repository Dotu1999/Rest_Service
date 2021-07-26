import {Cart} from './Cart'
import { LineItems } from './LineItems';
export class Order {
    id!: number;
    username: string = '';
    phone: String = '';
    address: String = '';
    orderDate: String='';
    shippeddate:String='';
    isShipped:boolean=true;
    lineItems!:LineItems[];
    
  }
  