import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-new-product',
  templateUrl: './page-new-product.component.html',
  styleUrls: ['./page-new-product.component.css']
})
export class PageNewProductComponent implements OnInit {


  newProductForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
   private ProductService : ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.newProductForm = this.fb.group({
      barcode: ['', Validators.required],
      designation: ['' , Validators.required],
      lactose: [ true , Validators.required],
      gluten: [false, Validators.required]
    })
  }

  onSubmitForm() {
    console.log(this.newProductForm.value);
    const newProduct = new Product(
      this.newProductForm.value.barcode,
      this.newProductForm.value.designation,
      this.newProductForm.value.lactose,
      this.newProductForm.value.gluten
    );
    console.log(newProduct);

    this.ProductService.createNewProduct(newProduct).subscribe(() => {
      console.log("Le produit a été créé !!!");
      this.router.navigateByUrl('/my-Products');
    });

    //fetch(url)
  }

}
