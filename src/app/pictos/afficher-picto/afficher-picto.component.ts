import {Component, Input, OnInit} from '@angular/core';
import {Pictos} from '../../pictos';

@Component({
  selector: 'app-afficher-picto',
  templateUrl: './afficher-picto.component.html',
  styleUrls: ['./afficher-picto.component.css']
})
export class AfficherPictoComponent implements OnInit {
    @Input() picto: string;

    constructor() { }

  ngOnInit() {
        console.log(this.picto);
  }

}
