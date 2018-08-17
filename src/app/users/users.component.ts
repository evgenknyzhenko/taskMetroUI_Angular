import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from '../services/user-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<User> = [];
  public user: User;
  selectedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  public getAllUsers(): void {
    this.userService.getAll()
      .subscribe(
        resp => this.users = resp,
        err => console.log('Users cant be fetched')
      );
  }

  onSelect(u: User): void {
    this.selectedUser = u;
  }
}
