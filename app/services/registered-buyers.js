import Service from '@ember/service';

export default Service.extend({
  registeredBuyerList: null,

  init() {
    this._super(...arguments);
    this.set('registeredBuyerList', []);
  }
});
