// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

require('cypress-xpath')

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("window:before:load", (win) => {
    win.fetch = null; // Disabling fetch API
  
    win.XMLHttpRequest = () => {
      const xhr = new Cypress.sinon.FakeXMLHttpRequest();
  
      xhr.abort = xhr.abort.bind(xhr);
      xhr.setRequestHeader = xhr.setRequestHeader.bind(xhr);
      xhr.getResponseHeader = xhr.getResponseHeader.bind(xhr);
      xhr.getAllResponseHeaders = xhr.getAllResponseHeaders.bind(xhr);
      xhr.addEventListener = xhr.addEventListener.bind(xhr);
      xhr.removeEventListener = xhr.removeEventListener.bind(xhr);
      xhr.dispatchEvent = xhr.dispatchEvent.bind(xhr);
  
      xhr.open = Cypress.sinon.stub().returns(xhr);
      xhr.send = Cypress.sinon.stub().returns(xhr);
  
      return xhr;
    };
  });