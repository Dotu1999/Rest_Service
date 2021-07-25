import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError ,tap} from 'rxjs/operators';
import { Product } from './model/Product';
// import { of } from 'rxjs/observable/of';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public ProductDataSource$ = new BehaviorSubject<Array<any>>([]);
  // baseURL: string = 'https://60efed10f587af00179d3b82.mockapi.io/api/';
  baseURL:string = "http://localhost:8080/";
  constructor(private http: HttpClient) {}
  public getProduc(): Observable<any> {
    return this.http.get(this.baseURL + 'products').pipe(
      tap(receivedProduct=>console.log(`receivedProduct=${JSON.stringify(receivedProduct)}`)),
      catchError(error=>([]))
    );
  }
  public addProduct(product: Product): Observable<any> {
    return this.http.post<any>(this.baseURL+'products',product);
  }
  public getProductById(id:number): Observable<any> {
    return this.http.get(this.baseURL + `products/${id}`).pipe(
      tap(selectedProduct=>console.log(`selectedProduct=${JSON.stringify(selectedProduct)}`)),
      // catchError(error=>console.log("looix"))
    );
  }
  public updateProduct(product2:Product): Observable<any> {
    // const product2 :Product = new Product();
    const httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.put<any>(this.baseURL + `products/${product2.id}`,product2,httpOptions).pipe(
      tap(selectedProduct=>console.log(`selectedProduct=${JSON.stringify(selectedProduct)}`)),
      // catchError(error=>console.log("looix"))
    );
  }
  public deleteProduct(id:number): Observable<any> {
    return this.http.delete<any>(this.baseURL+`products/${id}`);
  }
}
