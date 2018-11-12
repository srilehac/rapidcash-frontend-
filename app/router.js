import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('employee');
  this.route('login');
  this.route('first');
  this.route('wallet');
  this.route('test');
  this.route('test2');
  this.route('test3');
  this.route('ex');
  this.route('sample');
});

export default Router;
