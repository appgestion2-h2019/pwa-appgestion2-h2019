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
    // getScore(id:number): void {
    //     this.jeuxService.getScore(id)
    //    .subscribe(resultat => this.scores = resultat);
    //  }

  ngOnInit() {
      this.getScore();
  }
}
