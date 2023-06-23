import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { login, SignUp } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  invalidUserAuth = new EventEmitter<boolean>(false);
  isUserLoggedIn = new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient, private route:Router) { }
  userSignUp(user:SignUp)
  {
    console.warn(user);
     this.http.post("http://localhost:3000/users",user,{observe:'response'})
     .subscribe((result)=>{
      console.warn(result);
      if(result)
      {
        this.isUserLoggedIn.next(true);
        localStorage.setItem('user',JSON.stringify(result.body));
        this.route.navigate(['Home']);
      }
     })
  }
  
  userLogin(data:login)
  {
     this.http.get<SignUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
     {observe:'response'}).subscribe((result)=>{
      if(result && result.body?.length)
      {
        this.invalidUserAuth.emit(false);
        this.isUserLoggedIn.next(true);
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.route.navigate(['Home']);
      }
      else{
        this.invalidUserAuth.emit(true)
      }
     })
  }
}
