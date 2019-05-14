import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ListeBlancheComponent } from './liste-blanche/liste-blanche.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCheckboxModule,
} from '@angular/material';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoriesComponent} from './jeux/categories/categories.component';
import { PictosComponent } from './pictos/pictos.component';
import { GoogleComponent } from './authentification/google/google.component';
import { FacebookComponent } from './authentification/facebook/facebook.component';
import { SallesComponent } from './salles/salles.component';
import { SalleComponent } from './salles/salle/salle.component';
import { FormulaireJeuComponent } from './formulaire-jeu/formulaire-jeu.component';
import { FiltreComponent } from './salles/filtre/filtre.component';
import { PopupCreationComponent } from './salles/popup-creation/popup-creation.component';
import { PopupModificationComponent } from './salles/popup-modification/popup-modification.component';
import { PopupConsultationComponent } from './salles/popup-consultation/popup-consultation.component';
import { OptionsComponent } from './salles/options/options.component';
import { SalleService } from './salles/salle/salle.service';
import { JeuxService } from './jeux/jeux.service';
import { MotsComponent } from './jeux/mots/mots.component';
import { DessinerComponent } from './jeux/dessiner/dessiner.component';
import { DevinerDessinsComponent } from './jeux/deviner-dessins/deviner-dessins.component';
import { AffichageFinalComponent } from './jeux/affichage-final/affichage-final.component';
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MessagerieService} from './messagerie.service';
import { GravatarComponent } from './authentification/gravatar/gravatar.component';
import {UsagerService} from './authentification/usager.service';

const appRoutes: Routes = [
  { path: 'accueil', component: AuthentificationComponent },
  { path: 'connexion', component: AuthentificationComponent },
  { path: 'salles', component: SallesComponent },
  { path: 'messagerie', component: MessagerieComponent },
  { path: 'salles/:id', component: SalleComponent }, // TODO Salle selon l'id
  { path: 'jeux', component: FormulaireJeuComponent }, 
  { path: 'jeux/:idUsager', component: AffichageFinalComponent }, //Modification du score selon l'id de l'utilisateur ayant joué au jeu.
  { path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  /*{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
    declarations: [
        AppComponent,
        ListeBlancheComponent,
        MessagerieComponent,
        AuthentificationComponent,
        PictosComponent,
        GoogleComponent,
        FacebookComponent,
        SallesComponent,
        SalleComponent,
        CategoriesComponent,
        FiltreComponent,
        PopupCreationComponent,
        PopupModificationComponent,
        PopupConsultationComponent,
        FormulaireJeuComponent,
        OptionsComponent,
        MotsComponent,
        DessinerComponent,
        DevinerDessinsComponent,
        AffichageFinalComponent,
        GravatarComponent,
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatExpansionModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        HttpClientModule,
        FormsModule,
        MatDialogModule,
        MatGridListModule,
        MatPaginatorModule,
        MatTableModule,
        MatCheckboxModule,
        MatTabsModule,
    ],
    exports : [
      PopupCreationComponent,
      PopupModificationComponent,
      PopupConsultationComponent,
    ],
    entryComponents: [
      PopupCreationComponent,
      PopupModificationComponent,
      PopupConsultationComponent,
      AffichageFinalComponent,
    ],
    providers: [ SalleService, JeuxService, MessagerieService, UsagerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
