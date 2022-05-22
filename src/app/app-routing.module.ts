import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';

import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageTableAdminComponent } from './pages/page-table-admin/page-table-admin.component'

const routes: Routes = [
  
  { path: '', component: PageAccueilComponent},
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'table-admin', component: PageTableAdminComponent }
  
  
  
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
