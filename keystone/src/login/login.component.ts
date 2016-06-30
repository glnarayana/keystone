import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl} from '@angular/forms';

@Component({
    selector: 'login-form',
    templateUrl: 'js/login/login.component.html',
    styleUrls: ['resources/css/login.component.css'],
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class LoginComponent {
  loginForm: FormGroup;
    usernameCtrl = new FormControl();
    passwordCtrl = new FormControl();
    constructor() {
      this.loginForm = new FormGroup({
        'username': this.usernameCtrl,
        'password': this.passwordCtrl
      })
    }
}
