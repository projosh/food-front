import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageMyProductsComponent } from './pages/page-my-products/page-my-products.component';
import { PageNewProductComponent } from './pages/page-new-product/page-new-product.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  
  { path: '', component: PageAccueilComponent },
  {path: 'my-products', canActivate:[AuthGuard], component: PageMyProductsComponent},
  { path: 'new-product', component: PageNewProductComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'sign-in', component: PageSignInComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
