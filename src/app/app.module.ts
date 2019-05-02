import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthentificationComponent } from './authentification/authentification.component';

import { PictosComponent } from './pictos/pictos.component';
import { GoogleComponent } from './authentification/google/google.component';
import { FacebookComponent } from './authentification/facebook/facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    PictosComponent,
    GoogleComponent,
    FacebookComponent,
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
