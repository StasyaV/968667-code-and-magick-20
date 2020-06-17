'use strict';

(function () {
  var openPopup = function () {
    document.querySelector('.setup').classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var closePopup = function () {
    document.querySelector('.setup').classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
  };

  window.popupSettings = function () {
    var setup = document.querySelector('.setup');

    if (setup) {
      var setupOpen = document.querySelector('.setup-open');
      var setupClose = setup.querySelector('.setup-close');

      var userName = setup.querySelector('input[name=username]');
      setupOpen.addEventListener('click', function () {
        openPopup();
      });

      setupOpen.addEventListener('keydown', function (evt) {
        window.util.isEnterEvent(evt, openPopup);
      });

      setupClose.addEventListener('click', function () {
        closePopup();
      });

      setupClose.addEventListener('keydown', function (evt) {
        if (evt.key === window.util.ENTER) {
          window.util.isEnterEvent(evt, closePopup);
        }
      });

      userName.addEventListener('focus', function () {
        document.removeEventListener('keydown', onPopupEscPress);
      });

      userName.addEventListener('blur', function () {
        document.addEventListener('keydown', onPopupEscPress);
      });
    }
  }();

})();
