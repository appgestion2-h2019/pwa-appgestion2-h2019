import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-courriel',
  templateUrl: './courriel.component.html',
  styleUrls: ['./courriel.component.css']
})
export class CourrielComponent implements OnInit {
    creationCompteForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.creationCompteForm = this.formBuilder.group({
            nomusager: ['', [Validators.required]],
            courriel: ['', [Validators.required, Validators.email]],
            motdepasse: ['', [Validators.required, Validators.minLength(6)]],
            confirmMotdepasse: ['', Validators.required]
        }, {

            //   validator: MustMatch('motdepasse', 'confirmMotdepasse')
        });
    }

    get f() { return this.creationCompteForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.creationCompteForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.creationCompteForm.value))
    }
}

