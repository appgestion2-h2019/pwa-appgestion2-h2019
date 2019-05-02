import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CategoriesComponent} from './jeux/categories/categories.component';
import { PictosComponent } from './pictos/pictos.component';
<<<<<<< HEAD
import { GoogleComponent } from './authentification/google/google.component';
import { FacebookComponent } from './authentification/facebook/facebook.component';
=======
import { SallesComponent } from './salles/salles.component';
import { SalleComponent } from './salles/salle/salle.component';
import { FiltreComponent } from './salles/filtre/filtre.component';
import { PopupCreationComponent } from './salles/popup-creation/popup-creation.component';
import { PopupModificationComponent } from './salles/popup-modification/popup-modification.component';
import { PopupConsultationComponent } from './salles/popup-consultation/popup-consultation.component';

>>>>>>> 225fe02f9dc52ea9d0d5a2ce27d7f7fb496e02ec

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    PictosComponent,
<<<<<<< HEAD
    GoogleComponent,
    FacebookComponent,
=======
    SallesComponent,
    SalleComponent,
    CategoriesComponent,
    FiltreComponent,
    PopupCreationComponent,
    PopupModificationComponent,
    PopupConsultationComponent,
>>>>>>> 225fe02f9dc52ea9d0d5a2ce27d7f7fb496e02ec
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
