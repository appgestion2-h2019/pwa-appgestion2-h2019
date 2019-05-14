import { Component, OnInit } from '@angular/core';
import { Salle } from '../salle';
import { SalleService } from './salle/salle.service';
import { ListeBlancheComponent } from '../liste-blanche/liste-blanche.component';
import { MatDialog } from '@angular/material';
import { PopupModificationComponent } from './popup-modification/popup-modification.component';
import { PopupConsultationComponent } from './popup-consultation/popup-consultation.component';
import { AffichageFinalComponent } from '../jeux/affichage-final/affichage-final.component';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {
  /**
   * TODO: Gérer l'url en fonction des paramètres de recherche
   */
  sallesUrl = "http://localhost:3000/salles/";
  salles : Salle[];
  listeUtilisateurs : any = [];
  salles_instance = this;
  interval: any;

  dialogueOuvert : any;

  // Salle ouverte et rejointe dans la liste
  salleActive : Salle;

  /**
   * TODO: Voir avec l'équipe utilisateur pour leur modèle de données
   */
  utilisateurActif : string = "2"; 

  constructor(private salleService: SalleService, public dialog: MatDialog) { }

  /**
   * Quitte la salle active
   * @author Étienne Bouchard
   */
  quitterSalle() : void {
    this.salleActive = null;
  }

  /**
   * Ouvre une salle lors du click sur celle-ci
   * @author Étienne Bouchard
   */
  ouvrirSalle(salle : Salle) : void {
    if (salle.proprietaire == this.utilisateurActif) {

      // Popup modification

      let dialogRef = this.dialog.open(PopupModificationComponent, {
        height: '85%',
        width: '75%',
        data: { instanceof_salle: salle, instanceof_salles: this.salles_instance }
      });

      this.dialogueOuvert = dialogRef;

    } else {
      // Popup consultation

      let dialogRef = this.dialog.open(PopupConsultationComponent, {
        height: '85%',
        width: '75%',
        data: { instanceof_salle: salle, instanceof_salles: this.salles_instance }
      });

      this.dialogueOuvert = dialogRef;

    }
  }

  /**
   * Ferme le dialog ouvert à ce moment
   * @author Étienne Bouchard
   */
  fermerPopup() {
    this.dialogueOuvert.close();
  }

  /**
   * Obtient les salles à partir du [salleService]
   * @author Étienne Bouchard
   */
  obtenirSalles() : void {
    this.salleService.sallesUrl = this.sallesUrl;
    this.salleService.obtenirSalles().subscribe(salles => this.salles = salles);
  }

  /**
   * Création d'une salle à partir d'un service
   * @param salle Salle à créer
   */
  creerSalles(salle: Salle) : void {
    this.salleService.creerSalle(salle).subscribe();
  }

  /**
   * Affiche le component de fin de partie lors du clique sur le
   * bouton "terminer partie"
   * @author Étienne Bouchard
   */
  terminerPartie() : void {
    let dialogRef = this.dialog.open(AffichageFinalComponent, {
      height: '85%',
      width: '75%'
    });

    this.dialogueOuvert = dialogRef;
  }

  ngOnInit() {
    this.obtenirSalles();

    // Crée un Timer à chaque 2 secs d'obtenir les salles
    this.interval = setInterval(() => { 
      try{
        this.obtenirSalles(); 
        // console.log(this.listeUtilisateurs.length);
      } catch {
        console.log("Une erreur de connexion à la base de données est survenue.");
      }
    }, 2000);
  }

}
