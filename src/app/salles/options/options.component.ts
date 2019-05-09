import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PopupCreationComponent } from '../popup-creation/popup-creation.component';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  /**
   * Ouvre la fenêtre de création d'unse salle
   * dans un popup
   * @author Étienne Bouchard
   */
  ouvrirCreationPopup(): void {
    let dialogRef = this.dialog.open(PopupCreationComponent, {
      height: '400px',
      width: '900px',
    });
  }

}
