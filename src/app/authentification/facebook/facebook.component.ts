import { Component, OnInit } from '@angular/core';

declare function signOutFacebook(): any;

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
