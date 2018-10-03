import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
//import {SampleService} from '../app/sample.service';
import { HttpClientModule } from '@angular/common/http';
//import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule, routingComponents} from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { AdminUserComponent } from './admin-user/admin-user.component';


//import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
   // DashboardComponent,
   // UsersComponent,
    routingComponents,
   PageNotFoundComponent,
   CompanydetailsComponent,
   NormalUserComponent,
   AdminUserComponent,
 
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  
  ],

  //no need because angular 6
  //providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
