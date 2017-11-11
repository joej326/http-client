import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.sass']
})
export class GenericComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
   console.log(this.joe<number>(1)); 
  }

  joe<T>(arg1: T): T{
    return arg1;
  }



}
