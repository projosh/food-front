import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PageAccueilVisiteurComponent } from './pages/page-accueil-visiteur/page-accueil-visiteur.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageMyProductsComponent } from './pages/page-my-products/page-my-products.component';
import { PageNewProductComponent } from './pages/page-new-product/page-new-product.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  
  { path: '', component: PageAccueilComponent },
  { path: 'new-product', component: PageNewProductComponent },
  {path: 'my-products', component: PageMyProductsComponent},
  { path: 'Accueil-visiteur', component: PageAccueilVisiteurComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'sign-in', component: PageSignInComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
