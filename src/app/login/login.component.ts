import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  // TODO create log in service 
  public logIn (): void {
    if (this.userName === 'manager') {
      this.router.navigate(['manager']);
    } else {
      this.router.navigate(['find-jobs']);
    }
  }

}
