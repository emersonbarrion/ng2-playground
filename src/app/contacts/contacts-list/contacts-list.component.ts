import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ContactsService } from '../contacts.service';

import { Contact } from '../../models/contact';

@Component({
  moduleId: module.id,
  selector: 'app-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ContactsService]
})
export class ContactsListComponent implements OnInit {
  private contacts: Contact[];


  constructor(private contactsService: ContactsService) {
      contactsService.fetch().subscribe(res => this.contacts = res);
  }

  ngOnInit() {
  }

}