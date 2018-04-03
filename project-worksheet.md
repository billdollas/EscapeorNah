# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.


My game is basically an escape room. It will consist of 3 levels, which are displayed as 3 rooms. In the first room it'll be the smallest room of them all and in this room you will have a set time of 30s to find the hidden key in the room. If the time runs out you lose. If you happen to find the key you move on to the next room which will be slightly bigger than the first room. Only in this room there will be 3 keys that has to be found also keys will randomize position and fade in and out, so the player will be able to see the keys sometimes giving them some type of hope/same for the 3rd room. Also besides the keys I want to have time icons that will increase the current time thats on the timer by 5 secs to give more time to find the keys. In the last room, there will be 6keys to find it is the biggest of all rooms and the plot twist is that there will never be a winner, I want only 5 keys to be found and the 6th key to never appear but the time increments will continue to pop up, leaving the player on a ongoing search for the sixth key. MUAHAHAHAHAHAHA!

## Wireframes

Include images of your wireframes. 

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

JavaScript
Collision Detection
Element Containment
CSS

## Game Components

### Landing Page
What will a player see when they start your game?
My landing page will consist of the option to pick avatar, either male or female. Then after that is chosen you will be able to click the play button. Not sure if I want the play button to appear when the avatar has been chosen.

*Update* The landing page consist of the games title and has an on click event on the body
so to play you just click anywhere on the site and the page fades out into the game.

### Game Initialization
What will a player see when the game is started? 
When the game in started the player will see a small square, with an avatar at the top left corner.


### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the game.

The flow of the game is basically the user using the up, down, left, right keys to move around in the 'rooms'. The first room you wont be able to see the key because it is hidden, so the avatar will basically have to explore, so the user will be utilizing the up, down, left, right keys in order to find or come across the key. The key will unlock the next level, in the next level the keys are randomizing and fading in and out, there will also be a time icon that increments time to the time clock that will always begin at 30s.

### Winning The Game
What does it look like when the game ends, what determines winning or losing?

WELLLLL muahahaha! When time runs out you will lose, there will be no set winner because the ;ast key in the last room wont be found, but time will be able to be increased, to give hope to the player that the key can still be found.

*Update* Winning logic depends on catching the key

### Game Reset
How will the user restart the game once it has been completed.

There will be a restart button that leads to the beginning of the game (landing page) where you have to choose your avatar.


Update: That good ol command n :)

## MVP 

Include the full list of features that will be part of your MVP 

MVP : Collision Detection, CSS, movement and containment of Avatar, and landing page.


## POST MVP

Include the full list of features that you are considering for POST MVP

Harder winning logic, multiple levels, score board, applying pictures that coincide with
avatars movement


## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

-Make sure I have a timer counting down from 30 secs
-Function that would increment time by 5secs attach it to time icon
-Use a .key method, attach to my whole document, so that it can be manipulated by the up, down, left right keys
- A function that randomizes the key in 3 diff positions for first level
- For the second level have a function that randomizes the key in 6 diff positions
- have key and time icon fade in and out in css
- have a function when the avatar 'div' comes across 1st key in first level it unlocks the second level
- have a function that when the avatar comes across 3 keys in 2nd level it advances
- have a function in the 3rd level that collects 5 out of 6 keys but doesnt let the last key be chosen or remotely show
-have a function that will only show the time icon when there 20secs on the clock

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Logic | H | 10hrs|  |  |
| CSS | H | 24hrs|  |  |
| JavaScript | H | 24hrs|  |  |
| Pseudocode | Mid | 4hrs| 12hrs |  |
| Component 1 | H | 10hrs| 12hrs |  |
I used all my time wisely, didn't really keep track of how much time I spent
on what, I just sorted out what was most important and did that first.
| Total |  | 10hrs| 12hrs | 12hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

    const male = $('.male')[0].getBoundingClientRect();
    const key = $('.leKey')[0].getBoundingClientRect();
    const box = $('.room')[0].getBoundingClientRect();

    Not exactly a code, but I'm just super proud of myself for grasping a sort
    of understanding of the .getBoundingClientRect(); & implementing it almost 
    everywhere.

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

 I discovered the fading in and fading out transition method, as well as adding a 
 clicking event on the body.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.

 I didn't stick it through with the landing page, I wanted to make two avatars, have the player
 chose one or the other, but since I'm the decision maker :). For future references I'll implement that feature.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

 Issues such as making correct functions and misplacing them
  or trying to make too many functions for things that already had a function all 
  were resolved by speaking it out with my peers. White boarding and also visiting
  the good ol SRC. Came across a whole bunch of issues containing my character, having 
  my key randomizing within the box all over the place. Some minor issues involving CSS
  I would just go through a period of trial and error. Found myself asking my own question
  which I'm proud of.


  Resources : http://digipiph.com/blog/creating-sprite-character-movement-javascript-and-jquery-ver-10

    http://www.1001fonts.com/pixel-fonts.html?page=17&items=10

    https://www.youtube.com/watch?v=kVc_XfZY0vI

    http://digipiph.com/blog/creating-sprite-character-movement-javascript-and-jquery-ver-10



#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
