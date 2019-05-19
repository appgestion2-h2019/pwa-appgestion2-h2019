import {Component, OnInit} from '@angular/core';
import {Usager} from './usager';

@Component({
    selector: 'app-authentification',
    templateUrl: './authentification.component.html',
    styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

<<<<<<< HEAD
    usager: Usager = {
        id: 1,
        nomusager: 'Dannick',
        courriel: 'dannickbedard@gmail.com',
        motdepasse: 'qwerty1234',
        admin: false,
        actif: true,
    };
=======
    usager: Usager = new Usager();
>>>>>>> a70d23ef8705e371dbb26cc786c982e0f07c0515

    constructor() {
        this.usager.id = 1;
        this.usager.nomUsager = 'Dannick';
        this.usager.courriel = 'dannickbedard@gmail.com';
        this.usager.motdepasse = 'qwerty1234';
        this.usager.admin = false;
        this.usager.actif = true;
    }

    ngOnInit() {
    }

}
