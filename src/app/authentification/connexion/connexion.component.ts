import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CourrielService} from "../../courriel.service";
import {Usager} from "../usager";
import {CookieService} from "angular2-cookie/core";

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
    connexionForm: FormGroup;
    submitted = false;
    connecter = false;
    InfoUsager: Usager[];
    connexionUsager: Usager;
    message = '';

    constructor(private formBuilder: FormBuilder, private courrielService: CourrielService, private _cookieService: CookieService) {
        this.message = "Vous n'est pas connecté";
        this.connecter = false;
    }

    /**
     * Cette fonction nous permet d'allez vérifier si l'utilisateur a un compte. Par la suite on met un cookie pour
     * garder la session ouvert dans les autres page et même si la page ce raffraichi nous gardons la session.
     */
    connexion(): void {
        this.connexionUsager = new Usager();
        ((u, p) => {
            u.courriel = p.courriel;
            u.motdepasse = p.motdepasse;
        })(this.connexionUsager, this.connexionForm.value);

        this.courrielService.connexionUsager(this.connexionUsager).subscribe(resultat => this.InfoUsager = resultat);

        console.log('Résultat : ');
        console.log(this.InfoUsager);

        if (this.InfoUsager) { // Si la connexion d'usager a fonctionné
            this.message = "Vous êtes bien connecté";
            this.connecter = true;
            this._cookieService.put("connecterMessage", this.message);
            this._cookieService.putObject("connecter", true);
        } else { // Si la connexion d'usager n'a pas fonctionné
            this.message = "Vous n'avez pas entré les bonnes informations";
            this.connecter = false;
            this._cookieService.put("connecterMessage", this.message);
            this._cookieService.putObject("connecter", false);
        }
    }

    /**
     * Permet de ce déconnecter.
     */
    logout(): void { // Cette fonction est appeller pour ce déconnecter
        this._cookieService.put("connecterMessage", "Vous êtes déconnecté");
        this._cookieService.putObject("connecter", false);
    }

    /**
     * A l'ouverture de la page
     */
    ngOnInit() { // Lorsque la page est charger
        this.connecter = false;
        this.connexionForm = this.formBuilder.group({
            courriel: ['', [Validators.required, Validators.email]],
            motdepasse: ['', [Validators.required, Validators.minLength(6)]],
        });

        // this._cookieService.put("connecter", "Vous n'êtes pas connecter");
        console.log("Set Test Cookie as Test");
    }

    /**
     * Vas chercher le message qui est mis dans un cookie.
     * @param key Le id du cookie qu'on lui donne.
     */
    getCookieMessage(key: string) {
        return this._cookieService.get(key);
    }

    /**
     * Vas cerhcerh la valeur qui est mis dans un cookie.
     * @param key Le id du cookie qu'on lui donne.
     */
    getCookieValue(key: string) {
        return this._cookieService.getObject(key);
    }

    get f() {
        return this.connexionForm.controls;
    }

    /**
     * Lorsqu'on envoi le formulaire.
     */
    onSubmit() {
        this.submitted = true;

        if (this.connexionForm.invalid) { // Si le formulaire n'est pas valide
            return;
        } else {
            this.connexion();
        }
    }
}
