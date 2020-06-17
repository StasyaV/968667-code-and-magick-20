'use strict';

(function () {
  var getRandomColor = function (array, firstValue, secondValue) {
    var randomColor = array[window.getRandomNum(firstValue, secondValue)];
    return randomColor;
  };

  window.wizardColorize = function (partToChange, input, arrayColors) {
    partToChange.addEventListener('click', function () {
      document.querySelector(input).value = getRandomColor(arrayColors, 0, arrayColors.length);
      partToChange.style.fill = getRandomColor(arrayColors, 0, arrayColors.length);
      partToChange.style.background = getRandomColor(arrayColors, 0, arrayColors.length);
    });
  };
})();
