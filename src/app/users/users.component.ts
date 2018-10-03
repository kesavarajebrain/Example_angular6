import { Component, OnInit } from '@angular/core';
import {Router,} from '@angular/router';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  gonormaluser(){
    this.router.navigate(['normal-user'],{relativeTo:this.route});

  }
  goadminuser(){
    this.router.navigate(['admin'],{relativeTo:this.route})
  }
}
