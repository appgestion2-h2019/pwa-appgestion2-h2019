import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../categorie';
import { JeuxService } from '../jeux.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    categories: Categorie[];
    newCategorie: Categorie;

    onAdd() {
        this.jeuxService.addCategorie(this.newCategorie).subscribe();
    }
  constructor(private jeuxService: JeuxService) { }

  getCategories(): void {
      this.jeuxService.getCategories()
          .subscribe(resultat => this.categories = resultat);
  }

    onDelete(categorie: Categorie): void {
        this.jeuxService.deleteCategorie(categorie)
            .subscribe(result => this.categories = this.categories.filter(h => h !== categorie));
    }
  ngOnInit() {
      this.newCategorie = new Categorie();
      this.newCategorie.titre = '';
      this.getCategories();
  }

}

// //////////////////////////////////////////////////////42 et 43 dans notes de cours////////////////////////////////////////////////////
