import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { StateComponent } from './state/state.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuickAddProductComponent } from './quick-add-product/quick-add-product.component';
import { ResolveGuard } from './resolve.guard';


const routes: Routes = [
  {path:'',component:StateComponent},
  {path: 'Home', component: HomeComponent,
  resolve:{
    data:ResolveGuard
  },canActivate:[AuthGuard]},
  {path: 'Admin', component: AdminComponent},
  {path: 'Admin-home', component: AdminHomeComponent,canActivate:[AuthGuard]},
  {path:'quick-add',component:QuickAddProductComponent,canActivate:[AuthGuard]},
  {path: 'Admin-add-product', component: AdminAddProductComponent,canActivate:[AuthGuard]},
  {path: 'Admin-update-product/:id', component: AdminUpdateProductComponent,canActivate:[AuthGuard]},
  {path: 'details/:productId', component: ProductDetailsComponent,canActivate:[AuthGuard]},
  {path:'user-auth',component: UserAuthComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
