import { Observable } from 'rxjs/Observable';
import { Contact } from '../models/contact';

export class ContactsService {
  
  contacts: Contact[] = [
    { name: 'Pascal Precht', id: 'qwe213', age: 13, job: 'accountant' },
    { name: 'Christoph Burgdorf', id: 'asd456', age: 57, job: 'taxi driver' },
    { name: 'Thomas Burleson', id: 'thy478', age: 41, job: 'police' }
  ];
  
  fetch(): Contact[] {
    return this.contacts;  
  }
  
  fetchOne(id) {
      for (let i = 0; i < this.contacts.length; i++) {
          if(this.contacts[i].id == id) {
              return this.contacts[i];
          }
      }
  }
}