'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var TEXT_WIDTH = 40;
var BAR_WIDTH = 50;
var FIRST_PLAYER_NAME_X = CLOUD_X + TEXT_WIDTH;
var PLAYER_NAME_Y = 250;
var FIRST_PLAYER_BAR_X = 150;
var PLAYER_BAR_Y = 70;
var PLAYER_BAR_WIDTH = 40;
var FIRST_PLAYER_BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getCongratsText = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_GAP, 40);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_GAP, 60);

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

var getPlayersBar = function renderRects(ctx, players, times) {
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    if (players[i].indexOf('Вы')) {
      ctx.fillStyle = 'rgba(0, 0, 205)';
    }
    ctx.fillRect(FIRST_PLAYER_BAR_X + (BAR_WIDTH + TEXT_WIDTH) * i, PLAYER_BAR_Y, PLAYER_BAR_WIDTH, (FIRST_PLAYER_BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], FIRST_PLAYER_NAME_X + (BAR_WIDTH + TEXT_WIDTH) * i, PLAYER_NAME_Y);
    ctx.fillText(Math.round(times[i]), FIRST_PLAYER_NAME_X + (BAR_WIDTH + TEXT_WIDTH) * i, (FIRST_PLAYER_BAR_HEIGHT * times[i]) / maxTime + CLOUD_GAP);
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  getCongratsText(ctx);

  getPlayersBar(ctx, players, times);
};

