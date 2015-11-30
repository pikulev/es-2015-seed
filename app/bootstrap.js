import {vendors} from './vendors';
import {Bootstrap} from 'flaky/Bootstrap';
import {Application} from './Application';
import controllersModule from './controllers/controller.module';

let application = new Application();

for (let module of vendors) {
  application.registerModule(module);
}

application.registerModule(controllersModule);

Bootstrap.run(application);
