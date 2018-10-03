import { Component } from '@angular/core';
import {SampleService} from '../app/sample.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today  = new Date();

  //interpolation
  title = 'app';
  myname='kesavaraj';
  interpolation='This is a example interpolation';
  Div = 50/3;
  Multi = 5*8;

  //Property Binding from 2nd component template
  property = 'dummy';

  // ngIf Static-Example
  condition =false;

  //ngSwitch Static-Example 
  public color ="red";

//ngSwitch Dynamic-Example 
 public current =new Date().toLocaleDateString();

 //parent to child component interaction
public DisplayName='Kesvaraj';

//ngFor Static Example 
 public cars=["Honda", "Suzuki","Mahendra","Renault","Ford","Benz","BMW", "Hyundai"];

 //child to parent  component interaction
public message="";

//pipes
public Name="angular";
public format={
  "Name":"Kesav",
  "Age":"24",
  "Cherector":"Good"
}
public date= new Date();

// static service 
public servicedata=[];
// dynamic service
public studentdata=[];
//error handling
public errordata=[];
//get error msg

  public pageid;

public errormsg;

public errormsg1;
  interpolatefun(){
    return "Hi," +  this.myname;
  }

  

  ontype(value){
    // alert(value);
    console.log(value);
 console.log(this.current);
  }

  constructor(private _sampleservice:SampleService) { }

  ngOnInit() {
    //hardcoded data
    this.servicedata=this._sampleservice.getdata();

    //dynamic data
    this._sampleservice.getdynamicdata()
    .subscribe(data=>this.studentdata = data,
                error => this.errormsg1 = error);

   //geterrorhandling
   this._sampleservice.geterrorhandling()
   .subscribe(data=>this.errordata = data,
               error => this.errormsg = error);
  }

}
