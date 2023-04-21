import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { Messages } from '../collections/collections.js';

import './client.html';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

if (Meteor.isClient) {
  Template.messages.helpers({
    messages: function() {
    return Messages.find({}, { sort: { time: -1}});
  }
  });
}
  Template.input.events({
    'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user())
      var name = Meteor.user().username;
        else
      var name = 'Anonymous';
        var message = document.getElementById('message');
        if (message.value != '') {
      Messages.insert({
        name: name,
      message: message.value
          });

          document.getElementById('message').value = '';
          message.value = '';
        }
      }
    }
  });


