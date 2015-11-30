import {Module} from 'flaky/Module';
import {injectConfig} from 'flaky/core/decorators';

@injectConfig('$locationProvider')
export class Application extends Module {

  constructor() {
    super();
  }

  config(stateProvider, locationProvider) {
    locationProvider.html5Mode({
      'enabled': true,
      'requireBase': true,
      'rewriteLinks': true
    }).hashPrefix('!');
  }
}
