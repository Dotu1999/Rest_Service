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
  baseURL:string = "http://localhost:8080/api/";
  constructor(private http: HttpClient) {}
  public getProduc(): Observable<any> {
    return this.http.get(this.baseURL + 'products').pipe(
      tap(receivedProduct=>console.log(`receivedProduct=${JSON.stringify(receivedProduct)}`)),
      catchError(error=>([]))
    );
  }
  public addProduct(formData:FormData): Observable<any> {
    // return this.http.post<any>(this.baseURL+'products',);
    return this.http.post(this.baseURL+'products', formData)
      // .map(() => { return true; })
      // .catch((e) => this.handleError(e));
  }
  public getProductById(id:number): Observable<any> {
    return this.http.get(this.baseURL + `products/${id}`).pipe(
      tap(selectedProduct=>console.log(`selectedProduct=${JSON.stringify(selectedProduct)}`)),
      // catchError(error=>console.log("looix"))
    );
  }
  public updateProduct(id:String,data:FormData): Observable<any> {
    return this.http.put(this.baseURL + `products/${id}`,data,{responseType: 'text'}).pipe(
      tap(selectedProduct=>console.log(`selectedProduct=${JSON.stringify(selectedProduct)}`))
    );
  }
  public deleteProduct(id:number): Observable<any> {
    return this.http.delete<any>(this.baseURL+`products/${id}`);
  }
  //phân trang
  getAll(params: any): Observable<any> {
    return this.http.get<any>(this.baseURL+"productPage", { params });
  }
}
