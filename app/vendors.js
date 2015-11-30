import {Module} from 'flaky/Module';
import 'angular';
import 'angular-animate';
import 'angular-cookies';
import 'angular-sanitize';
import 'angular-messages';
import 'angular-aria';
import 'angular-ui-router';
import 'angular-material';
import './templates';

export const vendors = [
  new Module('ngAnimate'),
  new Module('ngCookies'),
  new Module('ngSanitize'),
  new Module('ngMessages'),
  new Module('ngAria'),
  new Module('ui.router'),
  new Module('ngMaterial'),
  new Module('templates')
];
