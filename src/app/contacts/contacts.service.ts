import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../models/contact';

@Injectable()
export class ContactsService {
  
  /*contacts: Contact[] = [
    { name: 'Pascal Precht', id: 'qwe213', age: 13, job: 'accountant' },
    { name: 'Christoph Burgdorf', id: 'asd456', age: 57, job: 'taxi driver' },
    { name: 'Thomas Burleson', id: 'thy478', age: 41, job: 'police' }
  ];*/

  constructor(private http: Http){
  }
  
  fetch(): Observable<Contact[]> {
    return this.http.get('app/contacts.json').map(res => res.json().items);
  }
  
  fetchOne(id) {
      return this.http.get('app/contacts.json').map((res) => {
          let contactList = res.json().items;

          for (let i = 0; i < contactList.length; i++) {
              if(id == contactList[i].id) {
                return {
                    id: contactList[i].id,
                    name: contactList[i].name,
                    age: contactList[i].age,
                    job: contactList[i].job
                };
              }
          }
        });
  }
}