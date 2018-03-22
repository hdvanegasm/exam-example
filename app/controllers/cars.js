import Controller from '@ember/controller';
import {computed, get, set} from '@ember/object';

export default Controller.extend({
  totalPrice: computed('model.cars.@each.price', function() {
    return this.get('model.cars').reduce(
      (sumPrices, car) => sumPrices + car.price,
      0);
  }),

  actions: {
    increasePrice(addition = 100) {
      this.get('model.cars').forEach(
        (car) => {
          var oldPrice = get(car, 'price');
          var newPrice = oldPrice + addition;
          set(car, 'price', newPrice);
        }
      )
    }
  }
});
