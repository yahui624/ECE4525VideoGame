// Project 4 --- Yahui Zhao 10/05/2019
// Run Program: This is my first time use P5.js. The way I run it is to create a local server: Open the index.html in Pycharm, click the chrome button to create server.
// Copyright: I dont own any of the characters used in this project. The only purpose is for this project.
// Objectivity: Create a game with main character can drop balls and 7 floating enemies.

// Functionality:
// - Mario is controlled by left/right/up arrow key.
// - To get down, Mario needs to jump and land on the lower platform.
// - When the down arrow is pressed, Mario will drop a ball (max 10 balls).
// - When the ball lands on a floating adversary, the adversary will die. However, if an adversary touches the ball from the side, the ball will disappear.
// - To win the game, Mario needs to collect all the five stars and reach the princess on the top right of the canvas.
// - If Mario runs into any floating adversary, the game ends.
// - To restart the game, refresh the page.

// Future Improvements:
// - I havent come up with an solution to make Mario falling down if he keeps moving left/right and leaves the current platform.
// - Whem Mario is jumping up, left/right key wont work.

let bg;
let obstacle = [];
let tilemap;
let mario;
let mario_img;
let gravity;
let walkForce;
let backForce;
let star;
let star_collected;
let princess;
let ball;
let ball_Count;
let ball_Array;
let joints;
let enemies;
let bb8_img;
let r2d2_img;
let darthvader_img;
let enemy_Eliminate;
let win_bg;
let Mario_Win;
let gameOver;
let frontPage;
let front_BG;

function preload() {
    frontPage = 0;
    front_BG = loadImage("image/frontPage.gif"); // take the first frame
    bg = loadImage("image/galaxy.png");
    win_bg = loadImage("image/planet.png");
    mario_img = loadImage("image/mario.png");
    r2d2_img = loadImage("image/R2D2.png");
    darthvader_img = loadImage("image/darthvader.png");
    bb8_img = loadImage("image/bb8.png");
    for (let i =0; i<=6; i++){
        obstacle[i] = loadImage('image/tilemap/circle-cropped_' + i +'.png');
    }
    star = loadImage("image/star.png");
    star_collected = [0, 0, 0, 0, 0]; // keep tracking of collected star

    princess = loadImage("image/princess.png");
    ball = loadImage("image/ball.png");
    gameOver = loadImage("image/gameOver.jpg");
    Mario_Win = loadImage("image/mario_Win.png");
    gameOver.resize(400, 400);
    ball_Array = [];
    ball_Count = 0;

    joints =[];
    enemies = [];
    enemy_Eliminate = [0,0,0,0,0,0,0]; // keep tracking of which enemy get hit by the balls

}

function setup() {
  createCanvas(400,400);
  mario = new Mario_Obj(30, 360, mario_img);
  tilemap = new Game(obstacle);
  gravity = createVector(0, 0.1);
  walkForce = createVector(0.1, 0);
  backForce = createVector(-0.1, 0);

  enemies.push(new FloatingObjects(230, 230, bb8_img), new FloatingObjects(350, 350, r2d2_img),
      new FloatingObjects(250, 90, r2d2_img), new FloatingObjects(35, 25, r2d2_img),
      new FloatingObjects(35, 120, darthvader_img), new FloatingObjects(120, 80, bb8_img),
      new FloatingObjects(220, 190, darthvader_img));
}

function keyPressed() {
    if (keyCode === ENTER) {
        frontPage = 1; //start the game
        console.log(frontPage);
    }

    // moving left or right
    if (keyCode === RIGHT_ARROW) {
        mario.walkForward =1;
    }
    if (keyCode === LEFT_ARROW) {
        mario.walkBackward =1;
    }
    // jumping effect
    if (keyCode === UP_ARROW && mario.jump === 0) {
        console.log("I should jump now");
        mario.jump = 2;
    }
    if (keyCode === DOWN_ARROW) {
        console.log("I should drop bomb here");
        if (ball_Count <= 10) {
            ball_Array.push(new ball_Obj(mario.position.x, mario.position.y));
            ball_Count ++ ;
        }
    }
}


function keyReleased() {
    if (keyCode === RIGHT_ARROW) {
        mario.walkForward = 0;
    } else if (keyCode === LEFT_ARROW) {
        mario.walkBackward = 0;
    }
}

function draw() {
    // background(135,135,246);
    angleMode(DEGREES);
    if (frontPage === 0 ) {
        image(front_BG, 0, 0, 400,400);
        textSize(40);
        text("MARIO @ SPACE", 40, 100);
        textSize(20);
        text("press Enter to start", 100, 300);
        fill(255, 255, 255);
    }
    else if (frontPage === 1){
        if (tilemap.win_Game() === false && tilemap.lose_Game() === false) {
            background(bg);
            tilemap.initialize();
            tilemap.star_display();
            tilemap.enemy_display();
            mario.collision();
            mario.landing(tilemap);
            mario.update();
            mario.draw();
            mario.collect_Star(tilemap.stars);
            mario.draw_Ball();

            //Finite state machine for bees
            for (let i = 0; i < enemies.length; i++) {
                enemies[i].state[enemies[i].currState].execute(enemies[i]);
                enemies[i].hit_ByBall();
            }
        } else if (tilemap.lose_Game()) { // lose the game
            background(gameOver);
        } else if (tilemap.win_Game()) { // win the game
            background(win_bg);
            text("YOU WIN!!", 66, 100);
            textSize(56);
            fill(255, 255, 255);
            image(mario_img, 105, 155, 160, 160);
        }
    }
}

