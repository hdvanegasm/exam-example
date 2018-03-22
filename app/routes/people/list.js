import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  buyerList: service('registered-buyers'),

  model() {
    return this.get('buyerList').registeredBuyerList;
  }
});
