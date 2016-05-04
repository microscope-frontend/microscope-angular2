import 'es6-shim';
import 'reflect-metadata';
import 'rxjs';
import 'zone.js/dist/zone';

import {enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {App} from './app.ts';

enableProdMode();
bootstrap(App, [ROUTER_PROVIDERS]);