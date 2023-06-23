import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { login, SignUp } from '../data-types';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  isLoginError = new EventEmitter<boolean>(false);
  isAdminLoggedIn = new BehaviorSubject<boolean>(false)


  constructor(private http:HttpClient, private router:Router) { }
  
  AdminSignUp(data:SignUp)
  {
    this.http.post('http://localhost:3000/admin',
    data, 
    {observe: 'response'}).subscribe((result) => {
      if(result)
      {
        this.isAdminLoggedIn.next(true);
        localStorage.setItem('Admin',JSON.stringify(result.body));
        this.router.navigate(['Admin-home']);
      }
    })
  }


  AdminLogin(data: login)
  {
     console.warn(data);
     this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
     {observe:'response'}).subscribe((result:any)=>{
        if(result && result.body && result.body.length)
        {
          console.warn("admin logged in");
          this.isLoginError.emit(false);
          this.isAdminLoggedIn.next(true);
          localStorage.setItem('Admin',JSON.stringify(result.body))
          this.router.navigate(['Admin-home']);
        }
        else{
          console.warn("login failed");
          this.isLoginError.emit(true);
        }
     })
  }

  reloadAdmin()
  {
     if(localStorage.getItem('Admin'))
     {
        this.isAdminLoggedIn.next(true);
        this.router.navigate(['Admin-home']);
     }
  }
}
