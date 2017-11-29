
import {Http} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit  {
  headers: any;
  data;
  splitted: string[];

  constructor(private router: Router, public http: Http) { }
ngOnInit() {

}
    onClick() {
      // tslint:disable-next-line:no-unused-expression
      this.router.navigate(['demo']);
    }


    getPosts(mydata: any) {
      this.http.get(`https://www.yatra.com/bus/autosuggestion?q=${mydata}&limit=10&url=%2F%2Fwww.yatra.com%2Fbus%2Fautosuggestion%3Fq%3Ds`)
          .subscribe(res => this.data = res.text()
        );
          let str =  this.data;
          this.splitted = str.split(":");
  }

  }
