import { Component, OnInit } from '@angular/core';
import {CanvasWhiteboardComponent} from 'ng2-canvas-whiteboard';

@Component({
    selector: 'app-pictos',
    viewProviders: [CanvasWhiteboardComponent],
    templateUrl: './pictos.component.html',
    styleUrls: ['./pictos.component.css']
})
export class PictosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
