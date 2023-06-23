import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-types';
import { ProductsService } from '../services/products.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, timeout } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route: Router, private product: ProductsService) { }
  menuType: String = 'default';
  AdminName: string = '';
  searchResult: undefined | product[];
  userName: string = "";
  BarIcon = faBars;

  add = localStorage.getItem('sessionAdd');


  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('Admin') && val.url.includes('Admin')) {
            let AdminStore = localStorage.getItem('Admin');
            let AdminData = AdminStore && JSON.parse(AdminStore)[0];
            this.AdminName = AdminData.name;   
            this.menuType = "Admin";
        }
        else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = "user";
        }
        else {
          this.menuType = "default";
        }
      }
    })
  }

  logout() {
    localStorage.removeItem('Admin');
    this.route.navigate(['/']);
  }

  userLogout() {
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
  }

  redirectToDetails(id: number) {
    this.route.navigate(['/details/' + id])
  }

}
