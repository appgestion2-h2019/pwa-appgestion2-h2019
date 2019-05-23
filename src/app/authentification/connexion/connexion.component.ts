import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CourrielService} from "../../courriel.service";
import {Usager} from "../usager";

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
    connexionForm: FormGroup;
    submitted = false;
    usager: Usager[];

    constructor(private formBuilder: FormBuilder, private courrielService: CourrielService) {
    }

    getCourriel(): void {
        console.log('Entre dans le getCourriel');
        this.courrielService.getUsager().subscribe(resultat => this.usager = resultat);
    }

    ngOnInit() {
        this.connexionForm = this.formBuilder.group({
            courriel: ['', [Validators.required, Validators.email]],
            motdepasse: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    get f() {
        return this.connexionForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        if (this.connexionForm.invalid) { // Si le formulaire n'est pas valide
            return;
        } else {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.connexionForm.value))
        }
    }

}
