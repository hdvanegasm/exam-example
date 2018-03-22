import Component from '@ember/component';

export default Component.extend({

  // Colorea los carros de rojo si su precio es mayor a 1000000, de lo contrario
  // los colorea a verde
  didRender() {
    var car = this.get('car');
    if(car.price > 1000000) {
      this.set('carColor', 'expensive-car');
    } else {
      this.set('carColor', 'cheap-car');
    }
  }
});
