import { Component, OnInit, Input } from '@angular/core';
import { Salle } from 'src/app/salle';
import { SallesComponent } from '../salles.component';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  @Input('Salle') salle: Salle;

  constructor() { }

  ngOnInit() {
  }

}
