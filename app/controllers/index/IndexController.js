import {route, inject} from 'flaky/core/decorators';

@route('/test', {
  templateUrl: 'states/index/index.html'
})
@inject('$state')
export class IndexController {

  constructor(stateService) {
    console.log(stateService);
  }
}
