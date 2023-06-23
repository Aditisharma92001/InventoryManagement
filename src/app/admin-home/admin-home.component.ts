import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  constructor() { }

  permission(permissionKey:string,permissionValue:string):void
  {
    localStorage.setItem(permissionKey,permissionValue);
  }

  Reset()
  {
    localStorage.setItem('session',"false");
    localStorage.setItem('sessionAdd',"true");
    localStorage.setItem('sessionSearch',"true");
    localStorage.setItem('sessionEdit',"true");
  }
}

