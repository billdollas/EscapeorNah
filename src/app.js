console.log('my guy');

var currentBtn= 'up';

$(document).ready(function() {

  let male = $('.male');

  $('.male').addClass('frontFaceStand');

    // });
    // this is le landing page fade out function
  $(document).ready(function() {

    $('body').click(function() {

      $('.back').fadeOut('13000', function() {

      }); // ending of fadeout

    });
    });


   //this is assigning le keys to le up, le down, le left and le right keys
  $(document).keydown(function(position){
  if(currentBtn) {

    currentBtn = position.keyCode;
    switch(position.keyCode) {
        case 38: maleWalk('up');
        break;
        case 37: maleWalk('right');
        break;
        case 40: maleWalk('down');
        break;
        case 39: maleWalk('left');
        break;
      }

      // this is le doing the collision detection
    const male = $('.male')[0].getBoundingClientRect();
    const key = $('.leKey')[0].getBoundingClientRect();
    const box = $('.room')[0].getBoundingClientRect();
    // 37 is the left key 38 is the up key 39 is the right 40 is the down key

    let collision = male.x < key.x + key.width && male.x + male.width > key.x && male.y
    < key.y + key.height && male.height + male.y > key.y;

    if (collision)
    {

      console.log('male');
      //console logging current position of male as key is pressed

      $('.leKey').removeClass('leKey');
      $('.room').hide();
      $('.winning').fadeIn('fast');
      clearInterval(inter);

      clearInterval(intNumber);
     //  so when i remove class of key, the randomization console logs error ?!
   }

   else if (!collision && count === 0) {
    $('.room').hide();
    $('.losing').fadeIn('fast');
    console.log('pero like');
   }

   else {
    // $('.leKey').addClass('leKey');

   }

   //still console logging an error on lekey after key is grabbed, its not doing it
   // on the randomization of the keys




    // if (male === 'up' ) {
    //   $('.male').addClass('backBackStand');
    // }

    // if (male === 'down'){
    //   $('.male').addClass('frontFaceStand')
    // }
  //   if (male.x > box.x + male.y > box.y && male.x + box.w < box.x + male.w && male.y +
  //   male.h < box.y + box.h) {
  //   console.log('not leaving box');
  // }
  }
  });

  //to contain male i have to find dimensions of the box and basically do the same if for
  //male and box, male x > box x, male y > box y, male x + width < box x +
  //width, male y + height < box y + height

  // this function is making my genderless character move in general
  //also containing genderless into room except on the left side

  function maleWalk(direction) {
  let guy = $('.male').css('top');
  let np = guy.replace('px','');
  //takes off pixels and just gives me a number
  let guyLeft = $('.male').css('left');
  let npLeft = guyLeft.replace('px','');
  let male = $('.male')[0].getBoundingClientRect();
  let room = $('.room')[0].getBoundingClientRect();
  //getting all dimensions of elements w variables guyPos & roomIn

   console.log(male);
  let xRoom = room.x + room.width;

  // adding the x to the width of the room
  // guyPos -= xRoom;
  let yRoom = room.y + room.height;
  // adding the y to the height of the room
  // guyPos -= yRoom;

  // SO IVE ADDED A CLASS TO THE DIRECTION BUTTON UP SO IT CAN SHOW THE AVATAR
  //BACK BUT WHEN I PRESS DOWN IT DOESNT WANT TO GO BACK TO THE FRONT FACE OF
  //THE CHARACTER

  // if (direction === 'up') {

  //   $('.male').css('top', Number(np)-12 + 'px');
  //   // $('.male').addClass('backBackStand');
  //   //once i press up then down it stays at back
  //   // $('.male').addClass('backGnaStep');
  //   // $('.male').addClass('backLeftFwd');
  //   // $('.male').addClass('backLeftStep');
  //   // $('.male').addClass('backLeftTouch');
  //   // $('.male').addClass('backLeftDone');
  //   // $('.male').addClass('backRightUp');
  //   // $('.male').addClass('backRightStep');
  //   // $('.male').addClass('backFin');
  // }


  // if (direction === 'down') {
  //   $('.male').css('top', Number(np)+ 12 + 'px');
  //   $('.male').addClass('frontFaceStand');
  // }

  // if (direction === 'left') {
  //   $('.male').css('left', Number(npLeft)+ 10 + 'px');
  //   $('.male').addClass('rightSideStand');
  // }


  if (direction === 'up' && male.y > room.y) {
  $('.male').css('top', Number(np)-5 + 'px');
  // $('.male').addClass('backBackStand');

 }


  if (direction === 'down' && male.y < 400) {
    $('.male').css('top', Number(np)+ 5 + 'px');
    // $('.male').addClass('frontFaceStand');

    // alert(Number(np)+10);
  }



  if (direction ==='left' && male.x < 750) {
    $('.male').css('left', Number(npLeft)+ 5 + 'px');
    // $('.male').addClass('rightSideStand');
    // $('.male').addClass('');
    //$('.room').innerWidth() added this to contain from the left side
    // when resizing screen didnt work
  }

  if(direction ==='right' && male.x > room.x) {
    $('.male').css('left', Number(npLeft) - 5 + 'px');
  }


};

//this function is randomizing key within le box
//this }; gucci 154
let intNumber = setInterval(randomKey, 1000);
//original time 2000
//clearInterval(intNumber)

function randomKey() {
  const box = $('.room')[0].getBoundingClientRect();
  const key = document.querySelector('.leKey');
  const keyPos = $('.leKey')[0].getBoundingClientRect();
  // const intial = 0;
  // const pardonBack= false;
  // const bounceId = setInterval(bounce,3);


  console.log("here", box);


  let xPos = Math.floor((Math.random() * 490) + 40);
  //the mathrandom is randomizing numbers bet 0 & 490
  xPos -= keyPos.width;
  let yPos = Math.floor((Math.random() * 480) + 20);
  yPos -= keyPos.height;



  key.style.left = xPos + 'px'
  key.style.top = yPos + 'px'
  key.style.right = xPos + 'px'
  key.style.bottom = yPos + 'px'

  console.log(xPos);

//   box.css({'top:' left + 'px', 'left:' left + 'px'});
// }, 1000);

};

randomKey();

// this le function is making my timer countdown from 30secs down

let count = 31;


let inter = setInterval(function lose() {



  if (count === 1) {
    clearInterval(inter);
    $('.room').hide();
    $('.losing').fadeIn('slow');
}

  count--;
  $('.timer').text(count);

  console.log(count);
}, 1000);





//note to self
//research secs time in jquery
//try out doing a div with picture of door then put
//fade out when door opens
//back isnt properly alligned with screen
//find escape or nah font
//research how to apply a sound for when key is found
//also apply sound to when body is click
//fade in effect for losing logic
// losing logic should also go in winning logic else if












































//copy and paste functions that work below, just in case they break during play



















































}) // END OF DOCUMENT BILLS


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








































