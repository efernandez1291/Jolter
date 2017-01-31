import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  // TODO import roles from a role service to populate this html.
  // TODO use ngFor to loop through array of roles for manager page.

  // TODO pass in roleID from array object, not manually.
  public openRole( roleID: number ): void {
    this.router.navigate(['/manager/role', roleID]);
  }

}
