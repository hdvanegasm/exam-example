import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      cars: [
        {
          id: "audi",
          brand: "Audi R8",
          color: "black",
          price: 123000
        },
        {
          id: "chevrolet",
          brand: "Chevrolet Camaro",
          color: "white",
          price: 3000
        },
        {
          id: "dodge",
          brand: "Dodge Challenger",
          color: "black",
          price: 1200000
        },
        {
          id: "renault",
          brand: "Renault 4",
          color: "red",
          price: 120000
        }
      ]
    }
  }
});
