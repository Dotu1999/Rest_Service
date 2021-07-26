import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError ,tap} from 'rxjs/operators';
import { Product } from './model/Product';
import { Order } from './model/Order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseURL:string = "http://localhost:8080/";
  constructor(private http: HttpClient) { }
  public getOrder(): Observable<any> {
    return this.http.get(this.baseURL + 'orders').pipe(
      tap(receivedProduct=>console.log(`receivedProduct=${JSON.stringify(receivedProduct)}`)),
      catchError(error=>([]))
    );
  }
  public getOrderDetail(id:number): Observable<any> {
    return this.http.get(this.baseURL + `orders/${id}`).pipe(
      tap(receivedOrder=>console.log(`receivedOrder=${JSON.stringify(receivedOrder)}`)),
      catchError(error=>([]))
    );
  }
  public addOrder(order:Order): Observable<any> {
    return this.http.post(this.baseURL + `orders`,order);
  }
}
