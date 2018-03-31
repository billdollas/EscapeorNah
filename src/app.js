console.log('my guy');

var currentBtn= 'up';
var walkTime = 20;
var maleStep = 2;
var maleSpeed = 400;

$(document).ready(function() {

  let male = $('.male');

  $('.male').addClass('frontFaceStand');

    // });


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
    const male = $('.male')[0].getBoundingClientRect();
    const key = $('.leKey')[0].getBoundingClientRect();
    const box = $('.room')[0].getBoundingClientRect();
    // 37 is the left key 38 is the up key 39 is the right 40 is the down key

    if (male.x < key.x + key.width && male.x + male.width > key.x && male.y
    < key.y + key.height && male.height + male.y > key.y) {
      console.log('male');
    }
  //   if (male.x > box.x + male.y > box.y && male.x + box.w < box.x + male.w && male.y +
  //   male.h < box.y + box.h) {
  //   console.log('not leaving box');
  // }
  }
  });

  // wrap this if statement around box so male wont leave box
  // const male= $('.male')[0].getBoundingClientRect();
  // const box = $('.room')[0].getBoundingClientRect();
  // if (male.x > box.x + male.y > box.y && male.x + box.w < box.x + male.w && male.y +
  //   male.h < box.y + box.h) {
  //   console.log('not leaving box');
  // }

  //to contain male i have to find dimensions of the box and basically do the same if for
  //male and box, male x > box x, male y > box y, male x + width < box x +
  //width, male y + height < box y + height


  function maleWalk(direction) {
  let guy = $('.male').css('top');
  let np = guy.replace('px','');
  //takes off pixels and just gives me a number
  let guyLeft = $('.male').css('left');
  let npLeft = guyLeft.replace('px','');


  if (direction === 'up') {
  $('.male').css('top', Number(np)-10 + 'px');
}
  if (direction === 'down') {


    $('.male').css('top', Number(np)+ 10 + 'px');

    // alert(Number(np)+10);

  }

  if (direction ==='left') {
    $('.male').css('left', Number(npLeft)+ 10 + 'px');
  }

  if(direction ==='right') {
    $('.male').css('left', Number(npLeft) - 10 + 'px');
  }


};

setInterval(randomKey, 1000);


function randomKey() {
  const box = $('.room')[0].getBoundingClientRect();
  const key = document.querySelector('.leKey');
  const keyPos = $('.leKey')[0].getBoundingClientRect();
  // const intial = 0;
  // const pardonBack= false;
  // const bounceId = setInterval(bounce,3);


 // console.log(box);



  let xPos = Math.random() * (box.x + box.width);
  xPos -= keyPos.width;
  let yPos = Math.random() * (box.y + box.height);
  yPos -= keyPos.height;



  key.style.left = xPos + 'px'
  key.style.top = yPos + 'px'
  key.style.right = yPos + 'px'

  console.log(xPos);

//   box.css({'top:' left + 'px', 'left:' left + 'px'});
// }, 1000);

};

randomKey();

})
// END OF DOCUMENT BILLS


//this function workkks



// function randomKey() {
//   const box = $('.room')[0].getBoundingClientRect();
//   const key = document.querySelector('.leKey');
//   const keyPos = $('.leKey')[0].getBoundingClientRect();

//   let xPos = Math.random() * keyPos.x;
//   let yPos = Math.random() * keyPos.y;

//   key.style.left = xPos + 'px'
//   key.style.top = yPos + 'px'
//   key.style.right = yPos + 'px'

//   console.log(keyPos);

// };

// randomKey();

//this function works and on refresh it moves the key slightly
//just in case i break the play one









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
// });





























