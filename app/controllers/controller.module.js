import {ControllersModule} from './ControllersModule';
import {IndexController} from './index/IndexController';

let controllersModule = new ControllersModule();

controllersModule
  .registerController(IndexController)
;

export default controllersModule;
