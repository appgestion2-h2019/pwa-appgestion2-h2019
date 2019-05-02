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
import { FiltreComponent } from './salles/filtre/filtre.component';
import { PopupCreationComponent } from './salles/popup-creation/popup-creation.component';
import { PopupModificationComponent } from './salles/popup-modification/popup-modification.component';
import { PopupConsultationComponent } from './salles/popup-consultation/popup-consultation.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    PictosComponent,
    SallesComponent,
    SalleComponent,
    FiltreComponent,
    PopupCreationComponent,
    PopupModificationComponent,
    PopupConsultationComponent,
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
