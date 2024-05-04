'use strict';

const slideVerify = require('..');
const assert = require('assert').strict;

assert.strictEqual(slideVerify(), 'Hello from slideVerify');
console.info('slideVerify tests passed');
