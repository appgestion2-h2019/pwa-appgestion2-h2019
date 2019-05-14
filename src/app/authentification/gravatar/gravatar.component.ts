import {Component, Input, OnInit} from '@angular/core';
import { UsagerService} from '../usager.service';
import {Usager} from '../usager';

@Component({
  selector: 'app-gravatar',
  templateUrl: './gravatar.component.html',
  styleUrls: ['./gravatar.component.css']
})
export class GravatarComponent implements OnInit {
  @Input('id') id: string;
  avatar: string;

  constructor(private usagerService: UsagerService) { }

  ngOnInit() {
    this.usagerService.getUsager(this.id).subscribe(resultat => this.avatar = resultat.avatar());
  }

}
