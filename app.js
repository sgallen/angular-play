var app = angular.module('app', []);

app.factory('messages', function() {
    var messages = {};
    messages.list = [{id: 0, text: "foo"}];
    messages.add = function(message) {
        messages.list.push({id: messages.list.length, text: message});
    };
    return messages;
});

app.controller('ListCtrl', function(messages) {
    var self = this;

    self.messages = messages.list;
});
