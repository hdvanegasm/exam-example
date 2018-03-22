import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cars', function() {
    // :price es el atributo que voy a captar del objeto
    this.route('brand', {path: ':id'});
  });
  this.route('people', function() {
    this.route('register');
    this.route('list');
  });
});

export default Router;
