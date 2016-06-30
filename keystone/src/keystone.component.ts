import {Component} from '@angular/core';
// import {RouteConfig} from 'angular2/router';
import {KeystoneHeader} from './header/header.component';
import {KeystoneContent} from './content/content.component';

@Component({
    selector: 'keystone-app',
    // template: '<h1>Done</h1>'
    templateUrl: 'js/keystone.component.html',
    styleUrls: ['resources/css/keystone.component.css'],
    directives: [KeystoneHeader, KeystoneContent]
})

export class KeystoneApp {

}
