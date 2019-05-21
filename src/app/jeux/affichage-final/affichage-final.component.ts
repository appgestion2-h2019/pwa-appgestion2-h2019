import { Component, OnInit } from '@angular/core';
import { Score } from '../../score'
import { JeuxService } from '../jeux.service';

@Component({
  selector: 'app-affichage-final',
  templateUrl: './affichage-final.component.html',
  styleUrls: ['./affichage-final.component.css']
})
export class AffichageFinalComponent implements OnInit {

  scores: Score[];
  nouveauScore : Score;
  monScore : number;
  selectedScore: Score;

  constructor(private jeuxService: JeuxService) { }

  onSelect(score: Score): void {
        this.selectedScore = score;
        console.log(this.selectedScore);
    }

    getScore() : void {
     this.jeuxService.getScore()
         .subscribe(resultat => this.scores = resultat);
 }
 //Ajouter un score.
 onAdd() {
   this.nouveauScore.score = this.monScore;
   this.jeuxService.addScore(this.nouveauScore).subscribe();
   this.getScore();
 }

  ngOnInit() {
      console.log('in ngOnInit');
      this.nouveauScore = new Score();
      this.getScore();
  }
}
