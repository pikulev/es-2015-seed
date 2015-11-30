export class Module {

  constructor(name = null) {
    this._name = name === null ? 'app.module.' + Reflect.getPrototypeOf(this).constructor.name : name;
    this._controllers = [];
    this._services = [];
    this._providers = [];
    this._modules = [];
  }

  config() {

  }

  registerController(controller) {
    this._controllers.push(controller);
    return this;
  }

  registerService(service) {
    this._services.push(service);
    return this;
  }

  registerProvider(provider) {
    this._providers.push(provider);
    return this;
  }

  registerModule(module) {
    this._modules.push(module);
    return this;
  }

  get moduleNames() {
    let moduleNames = [];
    for (let module of this._modules) {
      moduleNames.push(module.name);
    }
    return moduleNames;
  }

  get name() {
    return this._name;
  }

  get controllers() {
    return this._controllers;
  }

  get services() {
    return this._services;
  }

  get providers() {
    return this._providers;
  }

  get modules() {
    return this._modules;
  }
}
