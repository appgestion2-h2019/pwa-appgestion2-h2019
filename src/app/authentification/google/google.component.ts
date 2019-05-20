import { Component, OnInit } from '@angular/core';
import { Usager } from '../usager';
import { GoogleService } from '../../google.service';

declare function signOut(): any;
declare function onSignIn(): any;

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  usager: Usager[];
  constructor(private googleService: GoogleService) { }

  ngOnInit() {
    this.getUsager();
  }

  signOut() {
  }
  onSignIn() {
  }
  getUsager(): void {
    this.googleService.getUsager().subscribe(resultat => this.usager = resultat);
  }

}



