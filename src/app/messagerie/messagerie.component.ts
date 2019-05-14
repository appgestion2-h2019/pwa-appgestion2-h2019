import {Component, OnInit, Input} from '@angular/core';
import {MessagerieService} from '../messagerie.service';

@Component({
    selector: 'app-messagerie',
    templateUrl: './messagerie.component.html',
    styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
    @Input('salleId') salleId: string;
    utilisateurId = '2';
    salle;
    thread;
    constructor(private messagerieService: MessagerieService) {
    }

    getSalle(): void {
        this.messagerieService.getSalle(this.salleId).subscribe(resultat => this.updateSalle(resultat));
    }
    updateSalle(resultat): void {
        this.salle = resultat;
        if (this.salle.messages === null || this.salle.messages === undefined) {
            alert('NULL!');
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
            } catch {
                console.log('Une erreur de connexion à la base de données est survenue.');
            }
        }, 1000);
    }

    public buttonSend(message) {
        const messageObjet = {salleId: this.salleId, texte: message.value, picto: null, utilisateur_id: this.utilisateurId};
        this.envoyerMessage(messageObjet);
        message.value = '';
    }
}
