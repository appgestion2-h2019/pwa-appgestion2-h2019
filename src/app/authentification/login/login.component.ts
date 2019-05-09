import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            courriel: ['', [Validators.required, Validators.email]],
            motdepasse: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            alert('Error!! :-)\n\n' + JSON.stringify(this.loginForm.value));
            return;

        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
    }
}
