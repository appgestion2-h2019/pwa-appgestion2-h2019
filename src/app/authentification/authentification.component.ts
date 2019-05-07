import {Component, OnInit} from '@angular/core';
import {Usager} from './usager';

@Component({
    selector: 'app-authentification',
    templateUrl: './authentification.component.html',
    styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

    usager: Usager = {
        id: 1,
        nomUsager: 'Dannick',
        courriel: 'dannickbedard@gmail.com',
        motdepasse: 'qwerty1234',
        avatar: 'image',
        admin: false,
        actif: true,
    };

    constructor() {
    }

    ngOnInit() {
    }

}
