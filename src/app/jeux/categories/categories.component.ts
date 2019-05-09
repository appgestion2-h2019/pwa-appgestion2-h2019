import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../categorie'
import { JeuxService } from '../jeux.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

 categories: Categorie[];

  constructor(private jeuxService: JeuxService) { }

  getCategories(): void {
      this.jeuxService.getCategories()
          .subscribe(resultat => this.categories = resultat);
  }

  ngOnInit() {
    this.getCategories();
  }

}
