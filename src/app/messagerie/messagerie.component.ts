import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public buttonSend(message) {
    alert(message);
  }

}
