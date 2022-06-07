import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-update-product',
  templateUrl: './page-update-product.component.html',
  styleUrls: ['./page-update-product.component.css']
})
export class PageUpdateProductComponent implements OnInit {
updateProductForm! : FormGroup;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe((param) => {

      console.log(param);
      this.productService.getProductById(param['id-product'].subscribe((product: Product) => {

        console.log(product);
        this.updateProductForm = this.fb.group({

          barcode: [product.barcode, Validators.required],
          designation: [product.designation, Validators.required],
          lactose: [product.lactose],
          gluten: [product.gluten],
          id: [product.id]

        })

      }))
        
    })

  }

  onSubmitForm() : void {
    const productToUpdate = this.updateProductForm.value;

    this.productService.updateProduct(productToUpdate).subscribe((resp) => {
      //alert(resp.message);
      // TODO Rediriger le user vers la page "/my-products"
      this.router.navigateByUrl('/my-products');
    })
  }


}


