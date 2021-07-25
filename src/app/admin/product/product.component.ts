import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from 'src/app/model/Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private ProductService: ProductService) {}
  products: Product[] = [];
  ngOnInit(): void {
    this.getProduct();
  }
  product1:Product=new Product();
  status:number=0;
  setStatus(i:number)
  {
    this.status =i;
  }
  addProduct(name:string,picture:string,price:string):void
  {
    const new_product:Product = new Product()
    new_product.name=name;
    new_product.picture=picture;
    new_product.price=Number(price);
    this.ProductService.addProduct(new_product).subscribe(
      insertProduct=>{this.products.push(insertProduct);});
  }
  getProduct() {
    this.ProductService.getProduc().subscribe(
      data => {
        this.products = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  getProductbyId(id:number){
      this.ProductService.getProductById(id).subscribe(product=>
        {this.product1=product;});
  }
  updateProduct(id:string,name:string,picture:string,price:string)
  {
    const updateProduct:Product = new Product();
    updateProduct.id=Number(id);
    updateProduct.name=name;
    updateProduct.picture=picture;
    updateProduct.price=Number(price);
    this.ProductService.updateProduct(updateProduct).subscribe(product=>
      {
        const idpro:number=product.id
        let indexOfStevie = this.products.findIndex(i => i.id == idpro);
        this.products[indexOfStevie].name=product.name;
        this.products[indexOfStevie].picture=product.picture;
        this.products[indexOfStevie].price=product.price;
      });

  }
  deleteProduct(id:number) {
    this.products=this.products.filter(e=>e.id!=id);
    this.ProductService.deleteProduct(id).subscribe(
      _ => {
        this.products=this.products.filter(e=>e.id!=id);
      },
      err => {
        console.log(err);
      }
    );
  }

}

