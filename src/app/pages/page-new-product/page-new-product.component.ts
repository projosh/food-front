import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-new-product',
  templateUrl: './page-new-product.component.html',
  styleUrls: ['./page-new-product.component.css']
})
export class PageNewProductComponent implements OnInit {

  listCategories!: Category[];
  listBrands!: Brand[];
  newProductForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private ProductService : ProductService,
    private router: Router) { }

  ngOnInit(): void {

    this.ProductService.getAllCategories().subscribe((respCategories: Category[]) => {
      this.listCategories = respCategories;

      this.ProductService.getAllBrands().subscribe((respBrands: Brand[]) => {
        this.listBrands = respBrands;
      })
      
    })
    
    this.newProductForm = this.fb.group({
      barCode: ['', Validators.required],
      designation: ['' , Validators.required],
      lactose: [false],// mettre par defaut 
      gluten: [false],
      categoryId: [1],
      brandId: [1]
    })
  }

  onSubmitForm() {
    console.log(this.newProductForm.value);
    const newProduct = new Product(
      this.newProductForm.value.id,
      this.newProductForm.value.barCode,
      this.newProductForm.value.designation,
      this.newProductForm.value.lactose,
      this.newProductForm.value.gluten,
      this.newProductForm.value.categoryId,
      this.newProductForm.value.brandId
    );
    console.log(newProduct);

    this.ProductService.createNewProduct(newProduct).subscribe(() => {
      console.log("Le produit a été créé !!!");
      this.router.navigateByUrl('/');
    });

    
   
  }

}
