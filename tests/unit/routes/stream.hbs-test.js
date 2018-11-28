import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | stream.hbs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:stream.hbs');
    assert.ok(route);
  });
});
