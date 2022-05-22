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
    this.urlApi = 'http://localhost:8080/';
  }

  createNewCountry(newProduct: Product) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/products/details`, 
      newProduct,
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }
  
  getAllProducts(): Observable<Product[]> {
    const token = localStorage.getItem("token");
    
    return this.http.get<Product[]>(`${this.urlApi}/products/details`, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }

  getProductById(productId: string): Observable<Product> {
    const token = localStorage.getItem("token");
    
    return this.http.get<Product>(`${this.urlApi}/products/details${productId}`, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }

  updateProduct(product: Product): Observable<any> {
    const token = localStorage.getItem("token");
    
    const body = {
        barCode: product.id,
        photoLink: product.picture,
        gluten : product.gluten,
        lactose : product.lactose,
        designation : product.designation
    
    }

    return this.http.put<any>(`${this.urlApi}/products/details${product.id}`,
      body, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }
    deleteProduct(productId: string) {
    const token = localStorage.getItem("token");

    return this.http.delete(`${this.urlApi}/products/details${productId}`, 
      { headers: { Authorization : `Bearer ${token}`}})
  }
}
