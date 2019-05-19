import { Component, OnInit } from '@angular/core';
import {CanvasWhiteboardComponent} from 'ng2-canvas-whiteboard';
import {Pictos} from '../pictos';

@Component({
    selector: 'app-pictos',
    viewProviders: [CanvasWhiteboardComponent],
    templateUrl: './pictos.component.html',
    styleUrls: ['./pictos.component.css']
})
export class PictosComponent implements OnInit {
    // TODO: Gérer l'url en fonction des paramètres de recherche
    pictosUrl = 'http://localhost:3000/picto/';

  constructor() { }


     ngOnInit() {
    }
}
