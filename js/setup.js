'use strict';

var WIZARD_FIRST_NAMES = ['Дамблдор ', 'Волдеморт ', 'Доктор Стрендж ', 'Гарри Поттер '];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardsList = [];
var wizardsCount = 4;
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

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

getWizardsList();

var renderWizard = function (wizards) {
  var wizardTemplate = similarWizardTemplate.cloneNode(true);

  wizardTemplate.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardTemplate.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardTemplate.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;

  return wizardTemplate;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardsList.length; i++) {
  fragment.appendChild(renderWizard(wizardsList[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
