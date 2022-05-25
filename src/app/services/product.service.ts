import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }

  createNewProduct(newProduct: Product) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/products/create`,
      newProduct,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getAllProducts(): Observable<Product[]> {
    const token = localStorage.getItem("token");

    return this.http.get<Product[]>(`${this.urlApi}/product/personnal`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getProductById(productId: string): Observable<Product> {
    const token = localStorage.getItem("token");
    
    return this.http.get<Product>(`${this.urlApi}/product${productId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  updateProduct(product: Product): Observable<any> {
    const token = localStorage.getItem("token");

const body = {
      barcode: product.designation,
      designation: product.designation,
      lactose: product.lactose,
      gluten: product.gluten
      
}
    
        return this.http.put<any>(`${this.urlApi}/product${product.id}`,
      body, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }

      deleteProduct(productId: string) {
    const token = localStorage.getItem("token");

    return this.http.delete(`${this.urlApi}/product${productId}`, 
      { headers: { Authorization : `Bearer ${token}`}})
  }
   
  }
    
  
