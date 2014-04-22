(function(){
  'use strict';

  $(document).ready(init);

  var $pacman;
  var pacmanX = Math.floor(Math.random() * 2);
  var pacmanY = Math.floor(Math.random() * 3);
  var $td1;
  var $td2;

  function init(){
    $('body').on('click', '#start', start);
    $('body').keydown(move);
  }

  function start(){

    $pacman = $('<img src="./media/pacman.jpg">');
    var $cherry = $('<img src="./media/cherry.jpg">');

    $td1 = $('td[data-x=' + pacmanX + '][data-y=' + pacmanY + ']');
    $td2 = $('td[data-x=' + Math.floor(Math.random() * 2) + '][data-y=' + Math.floor(Math.random() * 3) + ']');

    $td1.append($pacman);
    $td2.append($cherry);
    compare();

  }

  function move(key){

    $td1.empty();

    switch(key.keyCode){
    case 38:
      pacmanY--;
      paint();
      break;
    case 40:
      pacmanY++;
      paint();
      break;
    case 37:
      pacmanX--;
      paint();
      break;
    case 39:
      pacmanX++;
      paint();
    }

    if (key.keyCode === 37 || key.keyCode === 38 || key.keyCode === 39 || key.keyCode === 40){
      key.preventDefault();

    }
  }

  function paint(){
    $td1 = $('td[data-x=' + pacmanX + '][data-y=' + pacmanY + ']');
    $td1.append($pacman);
    compare();
  }

  function compare(){
    //var pacmanSpot = ($td1.data('x'), $td1.data('y'));
    //var cherrySpot = ($td2.data('x'), $td2.data('y'));

    if($td1.data('x') === $td2.data('x') && $td1.data('y') === $td2.data('y')){
      alert('got em');
    } else {
      return;
    }
  }


})();
