import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { JeuxService } from '../jeux/jeux.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-formulaire-jeu',
  templateUrl: './formulaire-jeu.component.html',
  styleUrls: ['./formulaire-jeu.component.css']
})
export class FormulaireJeuComponent implements OnInit {

   categories: Categorie[];
   selectedCategorie: Categorie;
   constructor(private jeuxService: JeuxService) { }

    newCategorie: Categorie;

    onAdd() {
        this.jeuxService.addCategorie(this.newCategorie).subscribe();
    }


    onSelect(categorie: Categorie): void {
          this.selectedCategorie = categorie;
          console.log(this.selectedCategorie);
      }

    getCategories(): void {
        this.jeuxService.getCategories()
            .subscribe(resultat => this.categories = resultat);
    }

    // NL
    onDeleteMot(categorie: Categorie | number, mot: {nom: string, niveau: number} | string): void {
        console.log('Preparation à la suppression d\'un mot');
        this.jeuxService.deleteMot(categorie, mot).subscribe();
    }

    ngOnInit() {
      this.getCategories();
      this.newCategorie = new Categorie();
      this.newCategorie.titre = '';
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
