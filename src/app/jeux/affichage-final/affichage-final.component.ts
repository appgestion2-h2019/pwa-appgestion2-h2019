import { Component, OnInit } from '@angular/core';
import { Score } from '../../score'
import { JeuxService } from '../jeux.service';

@Component({
  selector: 'app-affichage-final',
  templateUrl: './affichage-final.component.html',
  styleUrls: ['./affichage-final.component.css']
})

//Affichage des meilleurs scores selon les usagers.
export class AffichageFinalComponent implements OnInit {

  scores: Score[];
  nouveauScore : Score;
  monScore : number;

//Va chercher le service de jeux pour faire le lien entre le component et l'API.
  constructor(private jeuxService: JeuxService) { }

    //Fonction pour l'affichage de tous les scores dans la base de données.
    getScore() : void {
     this.jeuxService.getScore()
         .subscribe(resultat => this.scores = resultat);
 }

 //Fonction pour ajouter un score.
 onAdd() {
   console.log(this.monScore);
   this.nouveauScore.score = this.monScore;
   this.jeuxService.addScore(this.nouveauScore).subscribe();
   //Rappelle ma fonction getScore pour l'affichage tout de suite après l'ajout.
   this.getScore();
 }

  ngOnInit() {
      console.log('in ngOnInit');
      //Instancie un nouveau score
      this.nouveauScore = new Score();
      this.nouveauScore.score = null;
      this.getScore();
  }
}
