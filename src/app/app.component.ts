import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Contact } from './models/contact';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {
  contacts: Observable<Contact[]>;
  contacts2: Observable<Contact[]>;

  constructor(private _http: Http){
    /*this.contacts = this._http.get('app/contacts.json')
                        .map(response => response.json().items)
                        .share();

    setTimeout(() => this.contacts2 = this.contacts, 500);*/
  }

  ngOnInit(){
  }
}