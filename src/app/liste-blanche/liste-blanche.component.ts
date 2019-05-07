import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-liste-blanche',
    templateUrl: './liste-blanche.component.html',
    styleUrls: ['./liste-blanche.component.css']
})
export class ListeBlancheComponent implements OnInit {

    // tslint:disable-next-line:ban-types
    listeUtilisateurs: Object[] = new Array(1);

    constructor() {
    }

    ngOnInit() {

    }

}
