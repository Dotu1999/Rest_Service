import {Cart} from './Cart'
import { Product } from './Product'
export class LineItems {
    productId!:number;
    quantity!: number;
    product!:Product;
    orderId!:number;
    lineNumber!:number;
}
  