import { Component, OnInit, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
@Output() public passdata =new EventEmitter();

 public servicedata=[];
  constructor() { }

  ngOnInit() {

  }

  sendData(){
    this.passdata.emit('This data from fourth component');
  }
}
