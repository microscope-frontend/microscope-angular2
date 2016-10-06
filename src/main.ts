/// <reference path="../typings\index.d.ts" />

// Polyfills
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import * as $ from 'jquery';
window['$'] = window['jQuery'] = $;
import 'bootstrap-sass';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './module';

//enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(AppModule);