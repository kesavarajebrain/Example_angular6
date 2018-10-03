import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import it 
import { RouterModule, Routes } from '@angular/router';

//import components
import {DashboardComponent} from '../../app/dashboard/dashboard.component'
import {UsersComponent} from '../../app/users/users.component'
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {CompanydetailsComponent} from '../../app/companydetails/companydetails.component';

//children Components
import {NormalUserComponent} from '../../app/normal-user/normal-user.component';
import {AdminUserComponent} from '../../app/admin-user/admin-user.component'

//define here path like a object format 
const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component: DashboardComponent},
  {path:'dashboard/:id',component:DashboardComponent },
  {path:'users',component:UsersComponent,
  children: [
    {path:'normal-user',component:NormalUserComponent},
    {path:'admin',component:AdminUserComponent}
  ]

},
//for type wrong component name in url
{path:'**',component:PageNotFoundComponent}
];


@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,UsersComponent,
  PageNotFoundComponent,CompanydetailsComponent,AdminUserComponent,NormalUserComponent]