import {bootstrap} from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {KeystoneApp} from './keystone.component';

bootstrap(KeystoneApp, [
  disableDeprecatedForms(),
   provideForms()
 ]);
