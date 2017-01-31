import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {

  public userName: string;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.getUserName();
  }

  // TODO get this from a service that stores a user model
  private getUserName () {
    if (this.location.path() === '/manager' || this.location.path() === '/manager/role/200') {
      this.userName = 'Manager001';
    }
    else {
      this.userName = 'User001'
    }
  }

}
