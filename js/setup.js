'use strict';

var WIZARD_FIRST_NAMES = ['Дамблдор ', 'Волдеморт ', 'Доктор Стрендж ', 'Гарри Поттер '];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardsList = [];
var wizardsCount = 4;
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var wizardSetup = document.querySelector('.setup-player');
var wizardCoat = wizardSetup.querySelector('.wizard-coat');
var wizardEyeColor = wizardSetup.querySelector('.wizard-eyes');
var wizardFireballColor = wizardSetup.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  var inputCoatColor = document.querySelector('input[name=coat-color]');
  var color = WIZARDS_COAT_COLOR[getRandomNum(0, WIZARDS_COAT_COLOR.length)];
  wizardCoat.style.fill = color;
  inputCoatColor.value = color;
});

wizardEyeColor.addEventListener('click', function () {
  var inputEyecolor = document.querySelector('input[name=eyes-color]');
  var color = WIZARDS_EYES_COLOR[getRandomNum(0, WIZARDS_EYES_COLOR.length)];
  wizardEyeColor.style.fill = color;
  inputEyecolor.value = color;
});

wizardFireballColor.addEventListener('click', function () {
  var inputFireballColor = document.querySelector('input[name=fireball-color]');
  var color = WIZARD_FIREBALL_COLOR[getRandomNum(0, WIZARD_FIREBALL_COLOR.length)];
  wizardFireballColor.style.background = color;
  inputFireballColor.value = color;
});

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

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

showSimilarWizards();
getWizardsList();
renderWizards(wizardsList);


