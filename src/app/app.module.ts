import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {SearchTextPipe} from './search-text.pipe';
import { CustomPipe } from './custom.pipe';
import { OrderByPipe } from './order-by.pipe';
import { orderBy } from 'lodash';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { QuickAddProductComponent } from './quick-add-product/quick-add-product.component'
import { ResolveGuard } from './resolve.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminAddProductComponent,
    AdminUpdateProductComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    SearchTextPipe,
    CustomPipe,
    OrderByPipe,
    PageNotFoundComponent,
    QuickAddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
    Ng2SearchPipeModule
  ],
  providers: [AdminHomeComponent,ResolveGuard,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
