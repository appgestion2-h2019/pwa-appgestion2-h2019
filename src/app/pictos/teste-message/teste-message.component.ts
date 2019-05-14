import { Component, OnInit } from '@angular/core';
import {Pictos} from '../../pictos';
import {Message} from '../message';

@Component({
  selector: 'app-teste-message',
  templateUrl: './teste-message.component.html',
  styleUrls: ['./teste-message.component.css']
})
export class TesteMessageComponent implements OnInit {

  constructor() { }

    message: Message = {
        id: '1',
        picto: 'teste',
    };

  ngOnInit() {
  }

}
