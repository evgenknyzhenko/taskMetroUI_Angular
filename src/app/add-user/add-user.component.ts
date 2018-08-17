import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user-service';
import {User} from '../users/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  private user;
  private msg;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.msg = '';
  }

  addUser(): void {
    this.userService.addUser(this.user)
      .subscribe(
        resp => {
          this.msg = 'User was created successfully';
          this.user = new User();
        },
        err => {
          this.msg = 'User was not added';
        }
      );
  }
}
