import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  onSubmit(data: any) {
    console.log(data);
  }
}
export class ExpansionOverviewExample {
  panelOpenState = false;
}
