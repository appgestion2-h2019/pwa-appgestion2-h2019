import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatTable} from '@angular/material';
import {SalleComponent} from '../salles/salle/salle.component';
import {SallesComponent} from '../salles/salles.component';

@Component({
    selector: 'app-liste-blanche',
    templateUrl: './liste-blanche.component.html',
    styleUrls: ['./liste-blanche.component.css']
})


export class ListeBlancheComponent implements OnInit {


    // TODO PULL LA LISTE D'UTILISATEURS

    @Input('instanceof_creation') instanceOfCreation: SallesComponent;
    @Input('maxUtilisateurs') maxUtilisateurs: number;
    // listeUtilisateurs: PeriodicElement[] = [];
    
    selectedUser: PeriodicElement;
    // IMPORT DE MATERIALS
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    @ViewChild(MatPaginator) paginator: MatPaginator;

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    //////////////////////

    onSelect(element: PeriodicElement, tableUtilsateursajoutes: MatTable<PeriodicElement>, ajouter: boolean): void {
        this.selectedUser = element;
        if (this.instanceOfCreation.listeUtilisateurs.length < this.maxUtilisateurs && ajouter === true
            && !this.instanceOfCreation.listeUtilisateurs.includes(this.selectedUser)) {
            this.instanceOfCreation.listeUtilisateurs.push(this.selectedUser);
        } else if (ajouter === false) {
            const index = this.instanceOfCreation.listeUtilisateurs.indexOf(this.selectedUser);
            this.instanceOfCreation.listeUtilisateurs.splice(index, 1);
        }
        tableUtilsateursajoutes.renderRows();
        console.log(this.instanceOfCreation.listeUtilisateurs);


    }

    constructor() {
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
}

// IMPORT DE MATERIALS

export class PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
///////////////////////////
