var Backbone.Controller = (function() {
  function Controller() {

  }

  return Controller;
})();
// (function() {
//   var defaultController = {
//     initialize: noop,
//     initIndex: noop,
//     initShow: noop,
//     initNew: noop,
//     initEdit: noop,

//     on: function(eventName, handler) {
//       JSKit.App.Dispatcher.on("controller:" + this.name + ":" + eventName, handler);
//     },

//     off: function(eventName, handler) {
//       JSKit.App.Dispatcher.off("controller:" + this.name + ":" + eventName, handler);
//     }
//   };

//   function noop(){}
//   function registerEvents(c) {
//     JSKit.App.Dispatcher.on("controller:" + c.name + ":index", c.initIndex);
//     JSKit.App.Dispatcher.on("controller:" + c.name + ":show", c.initShow);
//     JSKit.App.Dispatcher.on("controller:" + c.name + ":new", c.initNew);
//     JSKit.App.Dispatcher.on("controller:" + c.name + ":edit", c.initEdit);
//   }

//   JSKit.App.Controllers = {
//     create: function(name, options) {
//       if (!name) throw new Error("Controllers.create(name, options): name is undefined");
//       if (name.match(/create/i)) throw new Error("Controllers.create(name, options): name cannot be (C|c)reate");
//       options = options || {};
//       options = JSKit.Utils.merge(options, { name: name });
//       var controller = this[options.name] = JSKit.Utils.merge({}, defaultController, options);
//       JSKit.Utils.bindAll(controller);
//       controller.initialize();
//       registerEvents(controller);
//       return controller;
//     }
//   };
// })();
