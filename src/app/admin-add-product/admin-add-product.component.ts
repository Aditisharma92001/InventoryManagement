import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-types';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent {
  
  productMsg: string | undefined;
  
  constructor(private product: ProductsService, private route: Router) { }
  
  @ViewChild('addProduct') myForm: any;
  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result)
      if (result) {
        this.productMsg = "Product successfully added";
      }
      setTimeout(() => this.productMsg = undefined, 3000)
    })
    this.myForm.reset();
  }

  cancel() {
    if (this.myForm.dirty == true) {
      if (confirm('there are some unsaved changes. Do you want to discard them?')) {
        this.route.navigate(['Home']);
      }
    }
    else {
      this.route.navigate(['Home']);
    }
  }
}

