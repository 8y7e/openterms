import { assert } from 'chai';
import { spy } from 'sinon';

import {
  when,
  validate,
  run,
} from './utils';

describe('utils', () => {
  it('when', () => {
    const testString = 'Hello world';
    assert.equal(when(true, testString), testString, 'truthy condition');
    assert.equal(when(false, testString), '', 'falsy condition');
  });

  it('validate', () => {
    const schema = { a: 'string', b: 'number', c: 'boolean', d: 'array' };
    const options = {
      a: '',
      b: 0,
      c: false,
      d: [],
      e: {},
    };

    assert.isTrue(validate(schema, options), 'correct options');
    assert.isFalse(validate(schema, { a: false }), 'incorrect options');
  });

  it('run', () => {
    const fn = spy();
    const schema = { a: 'string' };
    const invalid = () => run(fn, schema, { a: 0 });

    assert.throws(invalid, /invalid/, 'throws');
    assert.isFalse(fn.calledOnce, 'not called');

    run(fn, schema, { a: '' });
    assert.isTrue(fn.calledOnce, 'called');
  });
});
