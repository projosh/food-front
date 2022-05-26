import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-my-products',
  templateUrl: './page-my-products.component.html',
  styleUrls: ['./page-my-products.component.css']
})
export class PageMyProductsComponent implements OnInit {

  public listProducts!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((resp) => {
      console.log(resp);
      this.listProducts = resp;
    })
  }

  onClickDeleteProduct(productId: string | undefined){
    console.log(productId);
    if(productId) {
      this.productService.deleteProduct(productId).subscribe({
        next : (resp) => {
          console.log(resp);
          // Todo 
         


          // Version compacte
          this.listProducts = this.listProducts.filter(product => product.id ! ==  productId);
          
         

          

        },
        error: (err) => { console.error(err)}
      })
    }
  }

}
