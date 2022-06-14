import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

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
      `${this.urlApi}/products`,
      newProduct,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getAllProducts(): Observable<Product[]> {
    const token = localStorage.getItem("token");

    return this.http.get<Product[]>(`${this.urlApi}/products/admin-details`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getProductById(productId: string): Observable<Product> {
    const token = localStorage.getItem("token");
    
    return this.http.get<Product>(`${this.urlApi}/products/${productId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  updateProduct(product: Product): Observable<any> {
    const token = localStorage.getItem("token");

const body = {
      barCode: product.barCode,
      designation: product.designation,
      lactose: product.lactose,
      gluten: product.gluten,
     
      
}
    
        return this.http.put<any>(`${this.urlApi}/products/${product.id}`,
      body, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }

      deleteProduct(productId: string) {
    const token = localStorage.getItem("token");

    return this.http.delete(`${this.urlApi}/products/${productId}`, 
      { headers: { Authorization : `Bearer ${token}`}})
  }
   
  }
    
  
