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
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CategoriesComponent} from './jeux/categories/categories.component';
import { PictosComponent } from './pictos/pictos.component';
import { GoogleComponent } from './authentification/google/google.component';
import { FacebookComponent } from './authentification/facebook/facebook.component';
import { SallesComponent } from './salles/salles.component';
import { SalleComponent } from './salles/salle/salle.component';
import { FiltreComponent } from './salles/filtre/filtre.component';
import { PopupCreationComponent } from './salles/popup-creation/popup-creation.component';
import { PopupModificationComponent } from './salles/popup-modification/popup-modification.component';
import { PopupConsultationComponent } from './salles/popup-consultation/popup-consultation.component';
import { OptionsComponent } from './salles/options/options.component';
import { SalleService } from './salles/salle/salle.service';

const appRoutes: Routes = [
  { path: 'accueil', component: AuthentificationComponent },
  { path: 'connexion', component: AuthentificationComponent },
  { path: 'salles', component: SallesComponent },
  { path: 'messagerie', component: MessagerieComponent },
  { path: 'salles/:id', component: SalleComponent }, // TODO Salle selon l'id
  { path: 'jeux', component: SallesComponent }, // TODO Salle selon l'id
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

        OptionsComponent,
    ],
    imports: [
        RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
        ),
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        HttpClientModule,
    ],
    providers: [ SalleService ],
    bootstrap: [AppComponent]
})
export class AppModule { }