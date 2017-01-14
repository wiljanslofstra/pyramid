/* global __COVERAGE__ */

// ---------------------------------------
// Test Environment Setup
// ---------------------------------------
/* eslint-disable */
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import chaiEnzyme from 'chai-enzyme';
/* eslint-enable */

chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiEnzyme());

global.chai = chai;
global.sinon = sinon;
global.expect = chai.expect;
global.should = chai.should();

// ---------------------------------------
// Require Tests
// ---------------------------------------

// require all `tests/**/*.spec.js`
const testsContext = require.context('./', true, /\.spec\.js$/);

// only run tests that have changed after the first pass.
testsContext.keys().forEach(testsContext);

const componentsContext = require.context('../src/', true, /^((?!main).)*\.js$/);
componentsContext.keys().map(componentsContext);
