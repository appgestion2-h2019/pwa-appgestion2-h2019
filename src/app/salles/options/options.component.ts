import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PopupCreationComponent } from '../popup-creation/popup-creation.component';
import { SallesComponent } from '../salles.component';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input('instanceof_salles') instanceof_salles : SallesComponent;

  instanceof_creation : this;

  ngOnInit() {
    console.log(this.instanceof_salles.sallesUrl);
  }

  /**
   * Ouvre la fenêtre de création d'unse salle
   * dans un popup
   * @author Étienne Bouchard
   */
  ouvrirCreationPopup(): void {
    let dialogRef = this.dialog.open(PopupCreationComponent, {
      height: '85%',
      width: '75%',
      data: { instanceof_salles: this.instanceof_salles }
    });

    this.instanceof_salles.dialogueOuvert = dialogRef;
  }

}
