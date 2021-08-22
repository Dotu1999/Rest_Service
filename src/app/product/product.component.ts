import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { Cart } from '../model/Cart';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private ProductService: ProductService) {}
  quantity: number[] = [];
  products: Product[] = [];
  ngOnInit(): void {
    this.getProduct();
    this.ProductService.ProductDataSource$.subscribe(list => {
      this.listCart = list;
    });
  }
  listCart: Cart[] = [];
  addCart(product: Product, index: number) {
    this.listCart.push(
      new Cart(
        product,
        product.id,
        this.quantity[index]
      )
    );
    this.quantity[index] = 0;
    this.ProductService.ProductDataSource$.next(this.listCart);
  }
  checkCart(i: number): number {
    return this.listCart.filter(ListCart => ListCart.product.id == i).length;
    // return 1;
  }
  removeFromCart(id: number) {
    let indexOfStevie = this.listCart.findIndex(i => i.product.id == id);
    this.listCart.splice(indexOfStevie, 1);
    this.ProductService.ProductDataSource$.next(this.listCart);
  }
  getProduct() {
    this.ProductService.getProduc().subscribe(
      data => {
        this.products = data;
        for (let i = 0; i < this.products.length; i++) {
          this.quantity.push(0);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  //phân trang
  title = '';
  page = 1;
  count=0;
  pageSize = 6;
  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
  retrieveTutorials(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.ProductService.getAll(params)
    .subscribe(
      response => {
        const { tutorials, totalItems } = response;
        this.products = tutorials;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
  searchTitle(): void {
    this.page = 1;
    this.retrieveTutorials();
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTutorials();
  }
}
