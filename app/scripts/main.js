'use strict';

window.bbTictactoe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    console.log('Hello from Backbone!');
  }
};

/* Order and include as you please. */
require('.tmp/scripts/templates');
require('app/scripts/views/*');
require('app/scripts/models/*');
require('app/scripts/collections/*');
require('app/scripts/routers/*');

$(document).ready(function () {
  bbTictactoe.init();
  $('body').append(Handlebars.templates['application']);
});
