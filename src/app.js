console.log('my guy');

var currentBtn= 'up';
var walkTime = 20;
var maleStep = 2;
var maleSpeed = 400;

$(document).ready(function() {

  $('#male').addClass('frontFaceStand');

});


$(document).keydown(function(position){
  if(currentBtn) {

    currentBtn = position.keyCode;
    switch(position.keyCode) {
        case 38: maleWalk('up');
        break;
        case 39: maleWalk('right');
        break;
        case 40: maleWalk('down');
        break;
        case 37: maleWalk('left');
        break;
      }
      // 37 is the left key 38 is the up key 39 is the right 40 is the down key
  }
});


function maleWalk(direction) {
  let guy = $('#male').css('top');
  let np = guy.replace('px','');
  //takes off pixels and just gives me a number
  let guyLeft = $('#male').css('left');
  let npLeft = guyLeft.replace('px','');


  if (direction === 'up') {
  $('#male').css('top', Number(np)-10 + 'px');
}
  if (direction === 'down') {


    $('#male').css('top', Number(np)+ 10 + 'px');

    // alert(Number(np)+10);

  }

  if (direction ==='left') {
    $('#male').css('left', Number(npLeft)+ 10 + 'px');
  }

  if(direction ==='right') {
    $('#male').css('left', Number(npLeft) - 10 + 'px');
  }

};




//   switch (maleStep) {
//     case 1 : $('#male').addClass(direction + 'rightSideStand');
//     break;
//     case 2 : $('#male').addClass(direction + 'rightSideFootL');
//     break;
//     case 3 : $('#male').addClass(direction + 'rightSideFootR');
//     break;
//     case 4 : $('#male').addClass(direction + 'rightSideFootUp');
//     break;
//     case 5 : $('#male').addClass(direction + 'rightSideFootToe');
//     break;
//     case 6 : $('#male').addClass(direction + 'rightSideFootDwn');
//     break;
//     case 7 : $('#male').addClass(direction + 'rightSideFootLBck');
//     break;
//     case 8 : $('#male').addClass(direction + 'rightSideFootLFrnt');
//     break;
//     case 9 : $('#male').addClass(direction + 'rightSideFootFin');
//     break;
// }
// }
//   switch(direction) {
//     case'front':
//     $('#male').animate({top: '+= 32'}, maleSpeed);
//     break;
//     case'back':
//     if ($('#male').position().top > 0) {
//       $('#male').animate({top: '-=32'}, maleSpeed);
//     }
//     break;
//     case 'left':
//     if ($('#male').position().left > 0) {
//       $('#male').animate({left: '-= 32'}, maleSpeed);
//     }
//     break;
//     case'right':
//     $('#male').animate({left: '+=32'}, maleSpeed);
//     break;
//   }
// }






























