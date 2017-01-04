import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  stringInterpolation: string  ="This is string interpolation";
  numberInterpolation: number = 2;

  setBorder() {
    return true;
  }

  onClicked(value: string) {
    alert(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
