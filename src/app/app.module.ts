import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DropdownModule } from 'ng2-bootstrap';

// Routes
import { JolterRoutes } from './app.routes';
// Services
import { ApplicationsService } from './shared/applications/applications.service';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { FindJobsComponent } from './find-jobs/find-jobs.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { UserBarComponent } from './shared/user-bar/user-bar.component';
import { EmblemComponent } from './shared/emblem/emblem.component';
import { RoleComponent } from './role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageFoundComponent,
    UserBarComponent,
    EmblemComponent,
    ManagerComponent,
    FindJobsComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JolterRoutes,
    DropdownModule.forRoot()
  ],
  providers: [
    ApplicationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
