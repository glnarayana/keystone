import {Component} from '@angular/core';
import {LoginComponent} from '../login/login.component';

@Component({
    selector: 'keystone-content',
    templateUrl: 'js/content/content.component.html',
    styleUrls: ['resources/css/content.component.css'],
    directives: [LoginComponent]
})

export class KeystoneContent {

}
