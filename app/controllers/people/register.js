import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({

  // Se hace la inyeccion al servicio
  registeredBuyers: service('registered-buyers'),

  // Acciones que se disparan desde la template
  actions: {
    register() {
      var name = this.get('name')
      var lastName = this.get('lastName');
      var creditCard = this.get('creditCard');

      var regexString = /^[a-zA-Z]+$/;
      var regexCreditCard = /^[0-9]+$/;

      if(regexString.test(name) && regexString.test(lastName) && regexCreditCard.test(creditCard)) {
        this.get('registeredBuyers').registeredBuyerList.push({
          name: this.get('name'),
          lastName: this.get('lastName'),
          creditCard: this.get('creditCard')
        });
        this.set('response', 'Registration completed');
        this.set('responseClass', 'success');
      } else {
        this.set('responseClass', 'error')
        this.set('response', 'There is an error in the registration form');
      }
    }
  }
});
