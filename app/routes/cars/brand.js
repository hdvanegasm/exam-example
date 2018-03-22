import Route from '@ember/routing/route';

export default Route.extend({
  model({id}) {

    // modelFor retorna el modelo de una ruta padre en la jerarquia de rutas
    const cars = this.modelFor('cars').cars;

    // findBy busca sobre el primer parametro lo que hay en el segundo parametro
    const car = cars.findBy('id', id);

    if(!car) {
      // Para redirigir a un template cuyo modelo es "cars"
      this.transitionTo('cars');
    } else {
      // Retorna el carro recuperado como modelo a la template
      return car;
    }
  }
});
