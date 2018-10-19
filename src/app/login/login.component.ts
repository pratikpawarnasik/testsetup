import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any;
  message: string;

  constructor( private router: Router, private data: DataService, private cookieService: CookieService) { }

  ngOnInit() {
   this.data.currentMessage.subscribe(message => this.message = message);
    console.log();
    this.login = {
      uname: '',
      pass: ''
    };
  }
  submitlogin(formdata) {
    if (this.login.uname === 'pratik' && this.login.pass === '123456') {
      this.data.changeMessage('You have sucessfully login!');
      this.cookieService.set('loginStatus', '1');
      this.cookieService.set('userName', this.login.uname);
      this.router.navigate(['welcome']);
    } else {
      this.data.changeMessage('Invalid username or password!');
    }

  }

}
