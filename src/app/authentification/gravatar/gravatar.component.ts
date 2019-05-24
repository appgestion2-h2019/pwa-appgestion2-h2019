import {Component, Input, OnInit} from '@angular/core';
import { UsagerService } from '../usager.service';
import * as gravatar from 'gravatar';

@Component({
  selector: 'app-gravatar',
  templateUrl: './gravatar.component.html',
  styleUrls: ['./gravatar.component.css']
})
export class GravatarComponent implements OnInit {
  @Input('id') id: string;
  avatar: string;
  profil: string;

  constructor(private usagerService: UsagerService) { }

  ngOnInit() {
    this.usagerService.getUsager(this.id).subscribe(resultat => {
      if (resultat != null) {
        this.avatar = gravatar.url(resultat.courriel, {s: '100', r: 'pg', d: 'wavatar'}, true);
        /*this.profil = gravatar.profile_url(resultat.courriel, {protocol: 'https'});*/
      }
    });
  }

}
