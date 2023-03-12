import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  search=new BehaviorSubject("")

  constructor(private httpClient:HttpClient) { }

  //http request view all products
  viewAllProducts(){
    return this.httpClient.get("http://localhost:3000/products")
  }

  addproduct(newproduct:any){
    return this.httpClient.post("http://localhost:3000/products",newproduct)

  }

  // api to get single product data
  viewproduct(id : any){
    return this.httpClient.get("http://localhost:3000/products/"+id)
  }

  // deleta product

  deleteProduct(id : any){
    return this.httpClient.delete("http://localhost:3000/products/"+id)
  }

  updateProduct(id : any,data:any){
    return this.httpClient.put("http://localhost:3000/products/"+id,data)
  }
  


}
