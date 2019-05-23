import { Component, OnInit } from '@angular/core';
import {Categorie} from '../../categorie';
import { JeuxService } from '../jeux.service';
import {DialogService} from '../dialog.service';

@Component({
  selector: 'app-mots',
  templateUrl: './mots.component.html',
  styleUrls: ['./mots.component.css']
})
export class MotsComponent implements OnInit {
  categories: Categorie[];
  selectedCategorie: Categorie;

  constructor(private jeuxService: JeuxService, private dialogService: DialogService) { }
  onSelect(categorie: Categorie): void {
    this.selectedCategorie = categorie;
    console.log(this.selectedCategorie);
  }
  getCategories(): void {
    this.jeuxService.getCategories()
        .subscribe(resultat => this.categories = resultat);
  }
  onDelete(categorie: Categorie): void {
      this.dialogService.openConfirmationDialog('Voulez-vous vraiment supprimer cette catégorie ?')
          .afterClosed().subscribe(res => {
             if (res) {
                 this.jeuxService.deleteCategorie(categorie)
                     .subscribe(result => this.categories = this.categories.filter(h => h !== categorie));
             }
      });
  }
  ngOnInit() {
    this.getCategories();
  }

}
