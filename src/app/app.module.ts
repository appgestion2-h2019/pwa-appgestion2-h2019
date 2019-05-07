import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthentificationComponent } from './authentification/authentification.component';

import { PictosComponent } from './pictos/pictos.component';
import { SallesComponent } from './salles/salles.component';
import { SalleComponent } from './salles/salle/salle.component';
import { FormulaireJeuComponent } from './formulaire-jeu/formulaire-jeu.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    PictosComponent,
    SallesComponent,
    SalleComponent,
    FormulaireJeuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
