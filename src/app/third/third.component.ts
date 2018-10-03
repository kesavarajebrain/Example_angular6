import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  // parent to child
  @Input() public sendingData;




  constructor() { }

  ngOnInit() {
  }
  

}
