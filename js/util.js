'use strict';

window.util = (function () {
  var ESCAPE = 'Escape';
  var ENTER = 'Enter';

  return {
    isEscEvent: function (evt, action) {
      if (evt.key === ESCAPE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === ENTER) {
        action();
      }
    }
  };
})();
