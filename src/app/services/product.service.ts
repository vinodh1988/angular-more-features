import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
httpOptions:any;
  constructor(private http:HttpClient
    ) { 
      let token =sessionStorage.getItem("token")
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Authorization":  "Bearer "+token
        })
      }
    }
  public getProducts():Observable<any>{
  
    return this.http.get("http://localhost:4500/660/products",this.httpOptions);
  }

  public getProducts2(pattern:string):Observable<any>{
    return this.http.get("http://localhost:4500/660/products?type="+pattern,this.httpOptions);
  }
}
