import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { JeuxService } from '../jeux/jeux.service';

@Component({
  selector: 'app-formulaire-jeu',
  templateUrl: './formulaire-jeu.component.html',
  styleUrls: ['./formulaire-jeu.component.css']
})
export class FormulaireJeuComponent implements OnInit {

   categories: Categorie[];
   selectedCategorie: Categorie;
    constructor(private jeuxService: JeuxService) { }

    onSelect(categorie: Categorie): void {
          this.selectedCategorie = categorie;
          console.log(this.selectedCategorie);
      }

    getCategories(): void {
        this.jeuxService.getCategories()
            .subscribe(resultat => this.categories = resultat);
    }

    ngOnInit() {
      this.getCategories();
    }

    // categorie: Categorie[] = [
    //     {
    //         id: 1,
    //         titre: 'Cat1',
    //         mot: [{nom: 'ffe1'}, {niveau: 1}]
    //     },
    //     {
    //         id: 2,
    //         titre: 'Cat2',
    //         mot: [{nom: 'ffe2'}, {niveau: 1}]
    //     },
    //     {
    //         id: 3,
    //         titre: 'Cat3',
    //         mot: [{nom: 'ffe3'}, {niveau: 1}]
    //     }
    // ];

}