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
  // TODO Create Applications Model and pass in that as the type instead of any.
  public applications: any[];
  // Used to save applications for filtering later.
  public removedApplications: Array<Object> = [];
  public activeApplication: Object = {};
  public showApplication: boolean = false;
  public roleRequirements: Array<String>;

  constructor(
    private applicationsService: ApplicationsService,
    private activatedRoute: ActivatedRoute
  ) {}

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
  private getMinimumRoleRequirements( roleID: number ): void {
    // Sets default application filters
    this.occupation = 'Web Developer';
    this.experience = 3;
    this.roleRequirements = [ 'id1', 'id2' ];
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
            answer >= Number(this.experience)
          ) ?  false : true;
          // If removeApp return true and the questionId is needed, remove the application from our array
          if (removeApp && this.roleRequirements.indexOf(questionId) > -1 ) {
            // Cache the to-be removed applications for use when filtering
            this.removedApplications.push(this.applications[Number(application)]);
            // Remove application that didn't meet the filter standards
            this.removeApplication( Number(application) );
            return; 
          }

        };
    };
  }

  private removeApplication( applicationIndex: number ): void {
    this.applications.splice( applicationIndex, 1 );
    this.filterApplications();
  }

  public changeFilter(): void {
    for (let removedApplication in this.removedApplications) {
       this.applications.push(this.removedApplications[removedApplication]);
    }
    this.removedApplications = [];
    this.filterApplications();
  }

  public setActiveApplication( application: Object ): void {
    this.activeApplication = application;
    this.showApplication = true;
  }

}
