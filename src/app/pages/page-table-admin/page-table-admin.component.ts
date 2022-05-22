import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-table-admin',
  templateUrl: './page-table-admin.component.html',
  styleUrls: ['./page-table-admin.component.css']
})
export class PageTableAdminComponent implements OnInit {
   public listNameProducts!: any[];

  constructor(productService: ProductService) { }

  
 ngOnInit(): void {
    this.productService.getAllProducts().subscribe((resp) => {
      console.log(resp);
      this.listNameProducts = resp;
    })
   
   getAllProducts(): Observable<Product> {
    const token = localStorage.getItem("token"),
  }
  

  



   function getAllProducts() {
     throw new Error('Function not implemented.');
   }

