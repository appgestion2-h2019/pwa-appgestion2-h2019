import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-formulaire-jeu',
  templateUrl: './formulaire-jeu.component.html',
  styleUrls: ['./formulaire-jeu.component.css']
})
export class FormulaireJeuComponent implements OnInit {
    categorie: Categorie = {
        id: 1,
        titre: 'Windstorm',
        mot: [{nom: 'ffe'}, {niveau: 1}]
    };
  constructor() { }
  ngOnInit() {
  }

}
