import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | test.hbs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:test.hbs');
    assert.ok(route);
  });
});
