import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userSelected: IUser = {} as IUser;
  showUserDetails = false;

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }


}
