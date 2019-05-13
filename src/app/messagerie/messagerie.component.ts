import { Component, OnInit } from '@angular/core';
import {MessagerieService} from '../messagerie.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
  salleId = '5cd19757db118018a826b99e';
  utilisateurId = '1';
  salle = JSON.parse('{"messages": [ { "texte": "Message texte s’il y a lieu", "picto": null, "date": "2018-09-14 12:21:37", "utilisateur_id": "1"} ] }');
  constructor(private messagerieService: MessagerieService) { }

  getSalle(salleId): void {
    this.messagerieService.getSalle(this.salleId).subscribe(resultat => this.salle = resultat);
  }

  ngOnInit() {
    this.getSalle(this.salleId);
  }

  public buttonSend(message) {
    alert(message);
    alert(this.salle.nom);
  }

}
