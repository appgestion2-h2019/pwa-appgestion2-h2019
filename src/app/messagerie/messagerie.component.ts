import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {MessagerieService} from '../messagerie.service';
import {AjouterPictoComponent} from '../pictos/ajouter-picto/ajouter-picto.component';
import {delay} from 'rxjs/operators';

@Component({
    selector: 'app-messagerie',
    templateUrl: './messagerie.component.html',
    styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
    @Input('salleId') salleId: string;
    componentPicto: AjouterPictoComponent;
    utilisateurId = '4';
    salle;
    thread;
    picto = false;
    sendingMessage = false;
    constructor(private messagerieService: MessagerieService) {
    }

    getSalle(): void {
        this.messagerieService.getSalle(this.salleId).subscribe(resultat => this.updateSalle(resultat));
    }
    updateSalle(resultat): void {
        this.salle = resultat;
        if (this.salle.messages === null || this.salle.messages === undefined) {
            this.initMessages();
        }
    }

    initMessages(): void {
        this.messagerieService.initialiseMessages(this.salleId).subscribe(resultat => this.setSalle(resultat));
    }
    setSalle(resultat): void {
        if (resultat.code === 200) {
            this.getSalle();
        }
    }
    envoyerMessage(messageObjet): void {
        this.messagerieService.envoyerMessage(messageObjet).subscribe(resultat => this.setSalle(resultat));
    }

    ngOnInit() {
        this.thread = setInterval(() => {
            try {
                this.getSalle();
                const container = document.getElementsByClassName('fenetreChat');
            } catch {
                console.log('Une erreur de connexion à la base de données est survenue.');
            }
        }, 500);
    }

    public buttonSend(message) {
        this.sendingMessage = true;
        const messageObjet = {salleId: this.salleId, texte: message.value, picto: null, utilisateur_id: this.utilisateurId};
        this.envoyerMessage(messageObjet);
        // alert(JSON.stringify(this.componentPicto));
        message.value = '';
    }
    public afficherPicto() {
        if (this.picto) {
            this.picto = false;
        } else {
            this.picto = true;
        }
    }
    public setPicto(componenentPicto) {
        this.componentPicto = componenentPicto;
    }
    public submit(event: KeyboardEvent, message) {
        console.log(event.key);
        if (event.key === 'Enter') {
            this.buttonSend(message);
        }
    }
}
