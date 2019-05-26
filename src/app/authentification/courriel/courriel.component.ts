import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CourrielService} from "../../courriel.service";
import {Usager} from "../usager";

@Component({
    selector: 'app-courriel',
    templateUrl: './courriel.component.html',
    styleUrls: ['./courriel.component.css']
})
export class CourrielComponent implements OnInit {
    creationCompteForm: FormGroup;
    submitted = false;

    // usagerText = String;
    usager: Usager[];
    newUsager: Usager;

    constructor(private formBuilder: FormBuilder, private courrielService: CourrielService) {
    }

    createUser(): void {
        this.newUsager = new Usager();
        ((u, p) => {
            // u.id = p.getId();
            u.nomusager = p.nomusager;
            u.courriel = p.courriel;
            u.motdepasse = p.motdepasse;
        })(this.newUsager, this.creationCompteForm.value);

        this.courrielService.addUsagerCourriel(this.newUsager).subscribe();

        alert(this.newUsager);
        console.log(this.newUsager)
    }

    ngOnInit() {
        this.creationCompteForm = this.formBuilder.group({
            nomusager: ['', [Validators.required]],
            courriel: ['', [Validators.required, Validators.email]],
            motdepasse: ['', [Validators.required, Validators.minLength(6)]],
            confirmMotdepasse: ['', Validators.required]
        }, {

            //todo Trouver comment fontionne le MustMatch
            // validator: MustMatch('motdepasse', 'confirmMotdepasse')
        });
    }

    get f() {
        return this.creationCompteForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        if (this.creationCompteForm.invalid) { // Si le formulaire n'est pas valide
            return;
        } else {
            this.createUser();
        }
    }
}

