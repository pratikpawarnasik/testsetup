import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

export interface Config {
  heroesUrl: string;
  textfile: string;
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  message: string;
  loginStatus = '0';
  userName = '';
  jsonData: {};
  constructor(private router: Router, private data: DataService, private cookieService: CookieService ) { }

  ngOnInit() {

    this.data.currentMessage.subscribe(message => this.message = message);
    this.loginStatus = this.cookieService.get('loginStatus');
    this.userName = this.cookieService.get('userName');
    if (this.loginStatus !== '1') {
      this.router.navigate(['login']);
    }
    this.getDataFun();
  }
  logout() {
    this.cookieService.set('loginStatus', '0');
    this.data.changeMessage('You have sucessfully logOut!');
    this.router.navigate(['login']);

  }
  getDataFun() {
    this.data.getservice()
      .subscribe(
        response => {
          this.jsonData = response;
          console.log(this.jsonData);
      },
      error => console.log('Error :: ' + error));

  }
}
