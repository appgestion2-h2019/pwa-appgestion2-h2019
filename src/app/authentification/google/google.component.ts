import { Component, OnInit } from '@angular/core';

declare function signOut(): any;

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      signOut();
  }

}

