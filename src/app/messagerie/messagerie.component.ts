import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
  utilisateurId = '1';
  salle = JSON.parse('{"messages": [ { "texte": "Message texte s’il y a lieu", "picto": null, "date": "2018-09-14 12:21:37", "utilisateur_id": "1"} ] }');
  constructor() { }

  ngOnInit() {
  }

  public buttonSend(message) {
    alert(message);
    alert(this.salle.messages[0].texte);
  }

}
