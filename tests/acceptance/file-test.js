import { test } from 'qunit';
import moduleForAcceptance from 'test-helper-file-picker/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | file');

test('visiting /file', function(assert) {
  visit('/file');

  andThen(function() {
    assert.equal(currentURL(), '/file');
    uploadFile(
      [''],
      'test.csv'
    );
  });
});
