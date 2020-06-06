'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_MAX_HEIGHT = 150;
var PLAYER_NAME_Y = 260;
var FIRST_PLAYER_NAME_X = CLOUD_X + BAR_WIDTH;
var FIRST_PLAYER_BAR_X = CLOUD_X + BAR_WIDTH;
var PLAYER_BAR_Y = CLOUD_HEIGHT - BAR_WIDTH + GAP;
var congtatulationText = 'Ура вы победили!';
var resultsText = 'Список результатов:';
var yourColor = 'rgba(255, 0, 0, 1)';
var textColor = '#000';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderClouds = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, GAP * 2, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, GAP, '#fff');
};

var renderCongratsText = function (ctx) {
  ctx.fillStyle = textColor;
  ctx.fillText(congtatulationText, CLOUD_X + GAP, 40);
  ctx.fillText(resultsText, CLOUD_X + GAP, 60);
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
    ctx.fillText(players[i], FIRST_PLAYER_NAME_X + (BAR_GAP + BAR_WIDTH) * i, PLAYER_NAME_Y);
  }
};

var renderPlayersTime = function (ctx, players, times) {
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = textColor;
    ctx.fillText(Math.round(times[i]), FIRST_PLAYER_NAME_X + (BAR_GAP + BAR_WIDTH) * i, PLAYER_NAME_Y - ((BAR_MAX_HEIGHT * times[i]) / getMaxElement(times)) - BAR_WIDTH + GAP);
  }
};

var renderPlayersBar = function renderRects(ctx, players, times) {
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'hsla(244,' + getRandomNum(0, 100) + '%, 34%, 1)';
    if (players[i] === 'Вы') {
      ctx.fillStyle = yourColor;
    }
    ctx.fillRect(FIRST_PLAYER_BAR_X + (BAR_GAP + BAR_WIDTH) * i, PLAYER_BAR_Y, BAR_WIDTH, ((BAR_MAX_HEIGHT * times[i]) / getMaxElement(times)) * -1);
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderClouds(ctx);

  renderCongratsText(ctx);

  renderPlayersBar(ctx, players, times);

  renderPlayersName(ctx, players);

  renderPlayersTime(ctx, players, times);
};

