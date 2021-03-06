"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Listener = {

  listeners: [],

  addListeners: function addListeners(entity, events) {
    for (var prop in this.props) {
      if (this.props.hasOwnProperty(prop) && events[prop]) {
        var addListener = google.maps.event.addListener;
        var listener = addListener(entity, events[prop], this.props[prop]);
        this.listeners.push(listener);
      }
    }
  },

  removeListeners: function removeListeners() {
    this.listeners.forEach(function (listener) {
      google.maps.event.removeListener(listener);
    });
  }

};

exports["default"] = Listener;
module.exports = exports["default"];