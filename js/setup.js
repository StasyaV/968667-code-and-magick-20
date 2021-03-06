'use strict';

var WIZARD_FIRST_NAMES = ['Дамблдор ', 'Волдеморт ', 'Доктор Стрендж ', 'Гарри Поттер '];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESCAPE = 'Escape';
var ENTER = 'Enter';
var wizardsList = [];
var wizardsCount = 4;
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardSetup = document.querySelector('.setup-player');
var wizardCoat = wizardSetup.querySelector('.wizard-coat');
var wizardEyeColor = wizardSetup.querySelector('.wizard-eyes');
var wizardFireballColor = wizardSetup.querySelector('.setup-fireball-wrap');

var getRandomColor = function (array, firstValue, secondValue) {
  var randomColor = array[getRandomNum(firstValue, secondValue)];
  return randomColor;
};

var wizardSettings = function (partToChange, input, arrayColors) {
  partToChange.addEventListener('click', function () {
    document.querySelector(input).value = getRandomColor(arrayColors, 0, arrayColors.length);
    partToChange.style.fill = getRandomColor(arrayColors, 0, arrayColors.length);
    partToChange.style.background = getRandomColor(arrayColors, 0, arrayColors.length);
  });
};

var showSimilarWizards = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

var getRandomNum = function (minValue, maxValue) {
  var randomNum = Math.floor(Math.random() * maxValue);
  return randomNum > minValue ? randomNum : minValue;
};

var getWizardsList = function () {
  for (var i = 0; i < wizardsCount; i++) {
    var wizardObj = {
      name: WIZARD_FIRST_NAMES[getRandomNum(0, WIZARD_FIRST_NAMES.length)] + WIZARD_LAST_NAMES[getRandomNum(0, WIZARD_LAST_NAMES.length)],
      coatColor: WIZARDS_COAT_COLOR[getRandomNum(0, WIZARDS_COAT_COLOR.length)],
      eyesColor: WIZARDS_EYES_COLOR[getRandomNum(0, WIZARDS_EYES_COLOR.length)]
    };
    wizardsList.push(wizardObj);
  }
  return wizardsList;
};

var createWizardTemplate = function (wizards) {
  var wizardTemplate = similarWizardTemplate.cloneNode(true);

  wizardTemplate.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardTemplate.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardTemplate.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;

  return wizardTemplate;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(createWizardTemplate(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

var openPopup = function () {
  document.querySelector('.setup').classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (evt.key === ESCAPE) {
    evt.preventDefault();
    closePopup();
  }
};

var closePopup = function () {
  document.querySelector('.setup').classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

var popupSettings = function () {
  var setup = document.querySelector('.setup');

  if (setup) {
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = setup.querySelector('.setup-close');

    var userName = setup.querySelector('input[name=username]');
    setupOpen.addEventListener('click', function () {
      openPopup();
    });

    setupOpen.addEventListener('keydown', function (evt) {
      if (evt.key === ENTER) {
        openPopup();
      }
    });

    setupClose.addEventListener('click', function () {
      closePopup();
    });

    setupClose.addEventListener('keydown', function (evt) {
      if (evt.key === ENTER) {
        closePopup();
      }
    });

    userName.addEventListener('focus', function () {
      document.removeEventListener('keydown', onPopupEscPress);
    });

    userName.addEventListener('blur', function () {
      document.addEventListener('keydown', onPopupEscPress);
    });
  }
};

popupSettings();
showSimilarWizards();
getWizardsList();
renderWizards(wizardsList);
wizardSettings(wizardCoat, 'input[name=coat-color]', WIZARDS_COAT_COLOR);
wizardSettings(wizardEyeColor, 'input[name=eyes-color]', WIZARDS_EYES_COLOR);
wizardSettings(wizardFireballColor, 'input[name=fireball-color]', WIZARD_FIREBALL_COLOR);


