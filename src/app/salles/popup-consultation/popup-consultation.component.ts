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

  // Instance du component Salle
  instanceof_salle : Salle;

  // Instance du component Salles
  instanceof_salles : SallesComponent;

  // Si l'usager est présent dans la liste Blanche de la salle
  estDansListe : Boolean;

  /**
   * Assigne la salle en paramètre comme salle active
   * @param salle salle à ouvir
   * @author Étienne Bouchard
   */
  rejoindreSalle() : void {
    this.instanceof_salles.salleActive = this.instanceof_salle;
    this.instanceof_salles.fermerPopup();
  }

  ngOnInit() {
    // Obtention du data depuis le MAT_DIALOG_DATA. 
    // Le constructeur déclare la variable [data] depuis la constante
    this.instanceof_salle = this.data.instanceof_salle;
    this.instanceof_salles = this.data.instanceof_salles;
    this.estDansListe = this.data.estDansListe;
  }

}
