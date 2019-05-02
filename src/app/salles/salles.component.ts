import { Component, OnInit } from '@angular/core';
import { Salle } from '../salle';
import { SALLES } from './salles-mock';
 
@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {

  salles = SALLES;

  constructor() { }

  ngOnInit() {
  }

}
