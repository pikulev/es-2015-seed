import angular from 'angular';
import {Module} from './Module';

export class Bootstrap {

  static run(module) {
    if (!module instanceof Module) {
      return;
    }

    angular.element(document).ready(function() {
      angular.bootstrap(document, [Bootstrap.loadModule(module).name]);
    });
  }

  static loadModules(modules) {
    let moduleNames = [];
    for (let module of modules) {
      moduleNames.push(module.name);
      Bootstrap.loadModule(module);
    }
    return moduleNames;
  }

  static loadModule(module) {
    let moduleNames = Bootstrap.loadModules(module.modules);
    let ajsModule = angular.module(module.name, module.moduleNames.concat(moduleNames));
    let states = Bootstrap.loadControllers(ajsModule, module.controllers);
    let injectConfig = ['$stateProvider'];


    if (angular.isArray(module.constructor.$injectConfig)) {
      injectConfig = injectConfig.concat(module.constructor.$injectConfig);
    }

    ajsModule.config(Bootstrap.createInjectedFunction(function(...dependencies) {
      for (let [name, options] of states) {
        dependencies[0].state(name, options);
      }
      if (angular.isFunction(module.config)) {
        module.config.apply(module, dependencies);
      }

    }, injectConfig));

    ajsModule.run(Bootstrap.createInjectedFunction(function(...dependencies) {
      if (angular.isFunction(module.run)) {
        module.run.apply(module, dependencies);
      }
    }, module.constructor.$injectRun || []));

    return ajsModule;
  }

  static createInjectedFunction(callback, inject) {
    callback.$inject = inject;
    return callback;
  }

  static loadControllers(ajsModule, controllers) {
    let states = [];
    for (let controller of controllers) {
      if (controller.$route) {
        let stateName = controller.name.toString().replace('Controller', '').toLowerCase();
        states.push([stateName, controller.$route]);
      }
      ajsModule.controller(controller.name, controller);
    }
    return states;
  }
}
