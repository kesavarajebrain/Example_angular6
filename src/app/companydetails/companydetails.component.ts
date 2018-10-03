import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {
 public pageid;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.pageid = id;

    //paramMAP
    this.route.paramMap.subscribe((params:ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.pageid = id;
    });
    
  }

  prev(){
    let prevbtn = this.pageid - 1;
    this.router.navigate(['/dashboard',prevbtn]);

  }

  next(){
    let nxtbtn = this.pageid + 1;
    this.router.navigate(['/dashboard',nxtbtn]);

  }
}
