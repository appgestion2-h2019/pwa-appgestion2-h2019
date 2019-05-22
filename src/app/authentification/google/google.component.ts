import { Component, OnInit } from '@angular/core';
import { Usager } from '../usager';
import { GoogleService } from '../../google.service';

declare function signOut(): any;
// declare function onSignIn();
declare function returnPorfile(): any;

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  usager: Usager[];
  newUsager: Usager;

  onSignIn(googleUser) {
    console.log("allo1");
    this.newUsager = new Usager();
    ((u, p) => {
      // u.id = p.getId();
      u.nomusager = p.getName();
      u.googlecourriel = p.getEmail();
      // u.imageUrl      = p.getImageUrl();
        // u.givenName     = p.getGivenName();
        // u.familyName    = p.getFamilyName();
    })(this.newUsager, googleUser.getBasicProfile());
    console.log(this.newUsager);
    this.onAdd();
  }
  constructor(private googleService: GoogleService) { }

  ngOnInit() {
    this.getUsager();
    this.newUsager = new Usager();
    // this.newUsager.nomusager = 'Sam1';
    // this.newUsager.googlecourriel = 'sam@gmail.com';
  }
  signOut() {
  }
  getUsager(): void {
    this.googleService.getUsager().subscribe(resultat => this.usager = resultat);
  }
  onAdd() {
    this.googleService.addUsager(this.newUsager).subscribe();
  }

  ngAfterViewInit() {
    gapi.signin2.render('googlebutton', {
      'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'light',
        'onsuccess': param => this.onSignIn(param)
    });
  }
}



