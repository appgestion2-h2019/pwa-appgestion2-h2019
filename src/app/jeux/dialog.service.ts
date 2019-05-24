import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import {MatConfirmDialogComponent} from './mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
// https://github.com/CodAffection/Angular-Material-Confirm-Dialog/tree/master/CompleteAngularMaterialApp
export class DialogService {

  constructor(private dialog: MatDialog) { }
  openConfirmationDialog(msg) {
    return this.dialog.open(MatConfirmDialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data : {
      message : msg
      }
    });
  }
}
