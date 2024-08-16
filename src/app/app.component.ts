import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
   nameOfuser! : string ;
   idOfUser! : string ;

  users=DUMMY_USERS;
  onSelectUser(id : string) {
    DUMMY_USERS.forEach(element => {
      if(element.id == id) {
        this.nameOfuser = element.name;
        this.idOfUser = element.id;
      }
    });
  }
}
