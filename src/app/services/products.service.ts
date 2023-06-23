import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { product } from '../data-types';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  searchResults: any;

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:3000';
  product:undefined|product[];
  addProduct(data:product)
  {
    return this.http.post('http://localhost:8080/api/v1/products',data);
  }
  productList():Observable<product[]>
  {
    return this.http.get<product[]>('http://localhost:8080/api/v1/products');
  }

  deleteProduct(id:number)
  {
    return this.http.delete(`http://localhost:8080/api/v1/products/${id}`)
  }
  getProduct(id:string)
  {
    return this.http.get<product>(`http://localhost:8080/api/v1/products/${id}`)
  }
  updateProduct(product:product)
  {
    return this.http.put<product>(`http://localhost:8080/api/v1/products/${product.id}`,product)
  }
  
  SearchProducts(query:string)
  {
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
  }

}






