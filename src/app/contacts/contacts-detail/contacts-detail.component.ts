import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ContactsService } from '../contacts.service';

import { Contact } from '../../models/contact';

@Component({
  moduleId: module.id,
  selector: 'app-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css'],
  providers: [ContactsService]
})
export class ContactsDetailComponent implements OnInit {
  private contact: Observable<Contact>;

  constructor(private _route: ActivatedRoute, private _http: Http, private contactsService: ContactsService) {
  }

  ngOnInit() {
    //this.contact = this.contactsService.fetchOne(this._route.snapshot.params['id']);
  }

}