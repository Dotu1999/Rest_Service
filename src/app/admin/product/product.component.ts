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
  //upload file
  fileToUpload!: File|null;
  selectFile(event: any): void {
    // const target = event.target as HTMLInputElement;
    // const files = target.files as FileList;
    // console.log(files.item(0));
    this.fileToUpload = event.target.files.item(0);
    console.log(this.fileToUpload);
  }
  setStatus(i:number)
  {
    this.status =i;
  }
  addProduct(name:string,price:string):void
  {
    console.log(this.fileToUpload);
    let formData: FormData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    if(this.fileToUpload!=null)
    {formData.append('image', this.fileToUpload);}
    this.ProductService.addProduct(formData).subscribe(
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
        this.fileToUpload = null;
        console.log(this.fileToUpload);
  }
  updateProduct(id:string,name:string,price:string)
  {
    let formData: FormData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    if(this.fileToUpload!=null)
    {
      formData.append('image', this.fileToUpload);
    }
    this.ProductService.updateProduct(id,formData).subscribe(res=>
      {
        let idProduct:number = Number(id);
        let indexOfStevie = this.products.findIndex(i => i.id == idProduct);
        this.products[indexOfStevie].name=name;
        let date:String = "?timestamp=" + new Date().getTime();
        this.products[indexOfStevie].picture=res + date;
        this.products[indexOfStevie].price=Number(price);
        // document.getElementById("picture"+indexOfStevie)?.setAttribute("src",`http://localhost:8080/getimage/${res}?timestamp=`+ new Date().getTime());
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
//phân trang
   title = '';
   page = 1;
   pageSize = 5;
   count=0;
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

