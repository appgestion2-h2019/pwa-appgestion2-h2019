import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {MessagerieService} from '../messagerie.service';
import {AjouterPictoComponent} from '../pictos/ajouter-picto/ajouter-picto.component';
import {delay, isEmpty} from 'rxjs/operators';

@Component({
    selector: 'app-messagerie',
    templateUrl: './messagerie.component.html',
    styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
    @Input('salleId') salleId: string;
    componentPicto: AjouterPictoComponent;
    utilisateurId = '1';
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
        alert(this.salleId);
        this.thread = setInterval(() => {
            try {
                this.getSalle();
                const container = document.getElementsByClassName('fenetreChat');
            } catch {
                console.log('Une erreur de connexion à la base de données est survenue.');
            }
        }, 1000);
    }

    public buttonSend(message) {
        this.sendingMessage = true;
        let cache = [];
        let messageObjet;
        if (this.picto) {
            messageObjet = {salleId: this.salleId, texte: message.value, picto: JSON.stringify(this.componentPicto.onclickSave(), function(key, value) {
                    if (typeof value === 'object' && value !== null) {
                        if (cache.indexOf(value) !== -1) {
                            try {
                                return JSON.parse(JSON.stringify(value));
                            } catch (error) {
                                return;
                            }
                        }
                        cache.push(value);
                    }
                    return value;
                }), utilisateur_id: this.utilisateurId};
            cache = null;
        } else {
            messageObjet = {salleId: this.salleId, texte: message.value, picto: null, utilisateur_id: this.utilisateurId};
        }
        if (message.value || this.picto) {
            this.envoyerMessage(messageObjet);
            message.value = '';
        }
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
