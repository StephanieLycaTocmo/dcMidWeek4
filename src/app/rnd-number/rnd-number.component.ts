import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rnd-number',
  templateUrl: './rnd-number.component.html',
  styleUrls: ['./rnd-number.component.css']
})
export class RndNumberComponent implements OnInit {

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  constructor() { 
    for (var x=0; x<6; x++){
      this.rndNumber.push(Math.floor(Math.random()*46)+1)
    }
  }

  rndNumber:any = []
  selected:any

  buttonSelect(num: number){
    this.selected = num
  }

}
