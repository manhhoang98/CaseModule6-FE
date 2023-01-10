import { Component } from '@angular/core';
import {LoginService} from "../service/loginservice/login.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  textsearch :any
  constructor(private  login1 : LoginService) {
  }


  token = this.login1.getToken();


  checkout(){
    localStorage.clear();
  }



}
