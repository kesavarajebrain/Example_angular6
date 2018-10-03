import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import {Router, ParamMap} from '@angular/router';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public pageid;
  public rdata=[];
  constructor(private _sampleservice:SampleService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this._sampleservice.getroutingdata()
    .subscribe(data=>this.rdata = data);

    //using snapshot 
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.pageid = id;

    //using paramMAP
    this.route.paramMap.subscribe((params:ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.pageid = id;
    });

    
  }

  onSelect(getpage){
    this.router.navigate(['/dashboard',getpage.id]);
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.pageid = id;
     // this.router.navigate([getpage.id],{relativeTo: this.route});
  }

  prev(){
    let prevbtn = this.pageid - 1;
    this.router.navigate(['/dashboard',prevbtn]);

  }

  next(){
    let nxtbtn = this.pageid + 1;
    this.router.navigate(['/dashboard',nxtbtn]);

  }

  backbtn(){
    let showid = this.pageid ? this.pageid : null;
  this.router.navigate(['/dashboard',{id:this.pageid}]);
   // this.router.navigate(['../' ,{id:this.pageid}],{relativeTo:this.route});
  }

  //Optional Route Parameters
  isSelected(getpage){
    return this.pageid === this.pageid;

  }
}
