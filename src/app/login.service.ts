import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class LoginService {

    baseUrl!: string;
    auth_token!: string;
    baseURL: string ;

    constructor(private http: HttpClient) {
        this.baseURL = 'http://localhost:8080/';
    }

    login(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseURL + "login", {
            username: user, password: pass
        })
    }

   
}
