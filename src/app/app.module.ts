import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageNewProductComponent } from './pages/page-new-product/page-new-product.component';
import { PageMyProductsComponent } from './pages/page-my-products/page-my-products.component';
import { PageUpdateProductComponent } from './pages/page-update-product/page-update-product.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageSignUpComponent,
    PageSignInComponent,
    PageAccueilComponent,
    PageNewProductComponent,
    PageMyProductsComponent,
    PageUpdateProductComponent,
    PageNotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
