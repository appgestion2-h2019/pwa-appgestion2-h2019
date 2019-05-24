import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ListeBlancheComponent} from './liste-blanche/liste-blanche.component';
import {MessagerieComponent} from './messagerie/messagerie.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {AuthentificationComponent} from './authentification/authentification.component';
import {MatDialogModule} from '@angular/material/dialog';
import {CategoriesComponent} from './jeux/categories/categories.component';
import {PictosComponent} from './pictos/pictos.component';
import {GoogleComponent} from './authentification/google/google.component';
import {FacebookComponent} from './authentification/facebook/facebook.component';
import {SallesComponent} from './salles/salles.component';
import {SalleComponent} from './salles/salle/salle.component';
import {FormulaireJeuComponent} from './formulaire-jeu/formulaire-jeu.component';
import {FiltreComponent} from './salles/filtre/filtre.component';
import {PopupCreationComponent} from './salles/popup-creation/popup-creation.component';
import {PopupModificationComponent} from './salles/popup-modification/popup-modification.component';
import {PopupConsultationComponent} from './salles/popup-consultation/popup-consultation.component';
import {CanvasWhiteboardModule} from 'ng2-canvas-whiteboard';
import {OptionsComponent} from './salles/options/options.component';
import {SalleService} from './salles/salle/salle.service';
import {JeuxService} from './jeux/jeux.service';
import {MotsComponent} from './jeux/mots/mots.component';
import {DessinerComponent} from './jeux/dessiner/dessiner.component';
import {DevinerDessinsComponent} from './jeux/deviner-dessins/deviner-dessins.component';
import {AffichageFinalComponent} from './jeux/affichage-final/affichage-final.component';
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { GoogleService } from './google.service';
import {AfficherPictoComponent} from './pictos/afficher-picto/afficher-picto.component';
import {AjouterPictoComponent} from './pictos/ajouter-picto/ajouter-picto.component';
import {MessagerieService} from './messagerie.service';
import {GravatarComponent} from './authentification/gravatar/gravatar.component';
import {UsagerService} from './authentification/usager.service';
import {CourrielComponent} from './authentification/courriel/courriel.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CourrielService} from './courriel.service';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { MatConfirmDialogComponent } from './jeux/mat-confirm-dialog/mat-confirm-dialog.component';

const appRoutes: Routes = [
    {path: 'accueil', component: AuthentificationComponent},
    {path: 'connexion', component: AuthentificationComponent},
    {path: 'salles', component: SallesComponent},
    {path: 'messagerie', component: MessagerieComponent},
    {path: 'salles/:id', component: SalleComponent}, // TODO Salle selon l'id
    {path: 'jeux', component: FormulaireJeuComponent}, // TODO Salle selon l'id
    {path: 'pictos', component: PictosComponent},
    {path: 'jeux', component: FormulaireJeuComponent},
    {path: 'jeux', component: AffichageFinalComponent},
    {path: 'jeux/supprimerCategorie', component: MotsComponent},
    {
        path: '',
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
        AfficherPictoComponent,
        AjouterPictoComponent,
        GravatarComponent,
        CourrielComponent,
        ConnexionComponent,
        MatConfirmDialogComponent,
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
        CanvasWhiteboardModule,
        FormsModule,
        MatDialogModule,
        MatGridListModule,
        MatPaginatorModule,
        MatTableModule,
        MatCheckboxModule,
        MatTabsModule,
        ReactiveFormsModule,
    ],
    exports: [
        PopupCreationComponent,
        PopupModificationComponent,
        PopupConsultationComponent,
        MatDialogModule
    ],
    entryComponents: [
        PopupCreationComponent,
        PopupModificationComponent,
        PopupConsultationComponent,
        AffichageFinalComponent,
        MatConfirmDialogComponent
    ],
    providers: [ SalleService, JeuxService, MessagerieService, GoogleService, UsagerService, CourrielService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
