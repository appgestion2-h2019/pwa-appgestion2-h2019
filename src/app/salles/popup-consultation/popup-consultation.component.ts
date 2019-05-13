import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { SalleComponent } from '../salle/salle.component';
import { SallesComponent } from '../salles.component';
import { Salle } from 'src/app/salle';

@Component({
  selector: 'app-popup-consultation',
  templateUrl: './popup-consultation.component.html',
  styleUrls: ['./popup-consultation.component.css']
})
export class PopupConsultationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  instanceof_salle : Salle;

  instanceof_salles : SallesComponent;

  /**
   * Assigne la salle en paramètre comme salle active
   * @param salle salle à ouvir
   * @author Étienne Bouchard
   */
  rejoindreSalle() : void {
    this.instanceof_salles.salleActive = this.instanceof_salle;
  }

  ngOnInit() {
    // Obtention du data depuis le MAT_DIALOG_DATA. 
    // Le constructeur déclare la variable [data] depuis la constante
    this.instanceof_salle = this.data.instanceof_salle;
    this.instanceof_salles = this.data.instanceof_salles;
  }

}
