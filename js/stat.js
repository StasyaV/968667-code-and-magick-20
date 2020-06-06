'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var TEXT_WIDTH = 40;
var BAR_WIDTH = 50;
var FIRST_PLAYER_NAME_X = CLOUD_X + TEXT_WIDTH;
var PLAYER_NAME_Y = 260;
var FIRST_PLAYER_BAR_X = 150;
var PLAYER_BAR_Y = CLOUD_HEIGHT - TEXT_WIDTH + CLOUD_GAP;
var PLAYER_BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var congtatulationText = 'Ура вы победили!';
var resultsText = 'Список результатов:';
var yourColor = 'rgba(255, 0, 0, 1)';
var textColor = '#000';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderClouds = function (ctx) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
};

var renderCongratsText = function (ctx) {
  ctx.fillStyle = textColor;
  ctx.fillText(congtatulationText, CLOUD_X + CLOUD_GAP, 40);
  ctx.fillText(resultsText, CLOUD_X + CLOUD_GAP, 60);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomNum = function (minValue, maxValue) {
  var randomNum = Math.floor(Math.random() * maxValue);
  return randomNum > minValue ? randomNum : minValue;
};

var renderPlayersName = function (ctx, players) {
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = textColor;
    ctx.fillText(players[i], FIRST_PLAYER_NAME_X + (BAR_WIDTH + TEXT_WIDTH) * i, PLAYER_NAME_Y);
  }
};

var renderPlayersTime = function (ctx, players, times) {
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = textColor;
    ctx.fillText(Math.round(times[i]), FIRST_PLAYER_NAME_X + (BAR_WIDTH + TEXT_WIDTH) * i, PLAYER_NAME_Y - ((BAR_MAX_HEIGHT * times[i]) / getMaxElement(times)) - TEXT_WIDTH + CLOUD_GAP);
  }
};

var renderPlayersBar = function renderRects(ctx, players, times) {
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'hsla(244,' + getRandomNum(0, 100) + '%, 34%, 1)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = yourColor;
    }
    ctx.fillRect(FIRST_PLAYER_BAR_X + (BAR_WIDTH + TEXT_WIDTH) * i, PLAYER_BAR_Y, PLAYER_BAR_WIDTH, ((BAR_MAX_HEIGHT * times[i]) / getMaxElement(times)) * -1);
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderClouds(ctx);

  renderCongratsText(ctx);

  renderPlayersBar(ctx, players, times);

  renderPlayersName(ctx, players);

  renderPlayersTime(ctx, players, times);
};

