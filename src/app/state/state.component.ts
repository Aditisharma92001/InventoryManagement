import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {
  constructor(private route: Router) {

  }
 
  RedirectAdmin(){
    this.route.navigate(['Admin']);
  }
  RedirectUser(){
    this.route.navigate(['user-auth']);
  }

}
