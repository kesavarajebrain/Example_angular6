import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl:'./second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
name="kesavaraj";

  constructor() { }

  ngOnInit() {
  }
  clickFun(){
    alert('This is a Event Binding, By  ' + this.name);
  }
  clickFuntwo(value){
    alert('Your Typed Value : ' + value);
    console.log(value);

  }

}
