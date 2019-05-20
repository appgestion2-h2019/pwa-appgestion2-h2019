import {Component, OnInit} from '@angular/core';
import {Usager} from './usager';


@Component({
    selector: 'app-authentification',
    templateUrl: './authentification.component.html',
    styleUrls: ['./authentification.component.css']
})
// @ts-ignore
export class AuthentificationComponent implements OnInit {

    usager: Usager = new Usager();

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
