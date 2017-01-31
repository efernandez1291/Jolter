import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationsService } from '../shared/applications/applications.service'

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  public occupation: string;
  public experience: number;
  public convictions: string;
  // TODO Create Applications Model and pass in that as the type instead of any.
  public applications: any[];
  public removedApplications: any = [];

  constructor(
    private applicationsService: ApplicationsService,
    private activatedRoute: ActivatedRoute
  ) { 

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
       this.getMinimumRoleRequirements(+params['id']);
      },
      error => {
        console.error('Not able to find role')
      }
    );
    this.applicationsService.getApplications().subscribe(
      applications => {
        this.applications = applications;
        this.filterApplications();
      }
    );
  }

  // TODO call a service that returns manager set requirements for the given role ID
  private getMinimumRoleRequirements( roleID: number ) {
    // Sets default application filters
    this.occupation = 'Web Developer';
    this.experience = 3;
    this.convictions = "None";
  }

  // TODO this should be a pipe, but i'm running out of time.
  public filterApplications(): void {
    // Loop through applications
    for (let application in this.applications) { 
        // Loop through questions
        for (let question in this.applications[application].questions) {
          // Check answers against the application filters for a match
          let answer = this.applications[application].questions[question].answer;
          let questionId = this.applications[application].questions[question].id;
          // Ternary that determines if an Application needs to be removed from the array
          let removeApp = (
            answer === this.occupation ||
            answer >= Number(this.experience) || 
            answer === this.convictions) ? 
            false : true
          if (removeApp) {
            // Used the removed application's index to save the one you need.
            this.removedApplications.push(this.applications[Number(application)]);
            this.removeApplication( Number(application) );
            return; 
          }

        };
    };
  }

  private removeApplication( applicationIndex: number ) {
    this.applications.splice( applicationIndex, 1 );
    this.filterApplications();
  }

  private saveRemovedApps( applicationToBeSavedIndex: number ): void {
    this.removedApplications.push(this.applications[applicationToBeSavedIndex]);
  }

  public changeFilter(): void {
    for (let removedApplication in this.removedApplications) {
       this.applications.push(this.removedApplications[removedApplication]);
    }
    this.removedApplications = [];
    this.filterApplications();
  }

}
