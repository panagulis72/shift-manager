import { Component, OnInit } from '@angular/core';
import { User } from '../user.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [
    new User("Antonio", "Fardella", "email@asd.com")
  ];

  constructor() { }

  ngOnInit() {
  }

}
