import { Component, OnInit, Input } from '@angular/core';
import { SallesComponent } from '../salles.component';
import { Salle } from 'src/app/salle';
import { LowerCasePipe } from '@angular/common';

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
  onSubmit(data: {
    min: number,
    max: number,
    type: string,
    langue: string
  }) {
    console.log(data);
    this.instanceof_salles.sallesUrl = `http://localhost:3000/salles/filtre?min=${data.min}&max=${data.max}&type=${data.type.toLowerCase()}&langue=${data.langue}`;
  }
  onReset() {
    this.instanceof_salles.sallesUrl = `http://localhost:3000/salles`;
  }
}
export class ExpansionOverviewExample {
  panelOpenState = false;
}
