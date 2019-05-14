import { Component, OnInit, Input } from '@angular/core';
import { SallesComponent } from '../salles.component';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {

  @Input('instanceof_salles') instanceof_salles : SallesComponent;

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
