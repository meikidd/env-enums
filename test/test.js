const assert = require('assert');
const EnvEnums = require('../src');

describe('env enum values', () => {
  it('development', () => assert.equal(EnvEnums.DEVELOPMENT, 'development'));
  it('testing', () => assert.equal(EnvEnums.TESTING, 'testing'));
  it('production', () => assert.equal(EnvEnums.PRODUCTION, 'production'));
  it('staging', () => assert.equal(EnvEnums.STAGING, 'staging'));
});
