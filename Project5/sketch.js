// Project 5 -- Yahui Zhao 10/11/2019
// Objectivity: Creating a dodge-ball game with NPCs able to dodge the balls.
// Functionality:
// - 3 NPCs are running across the canvas in sin waves format
// - The player character is at the bottom center of the canvas and can throw balls toward the opponents based on its current angle.
// - The ball changes direction when it hits an NPC and disappears when it  touches a border.
// - An NPC is eliminated if it gets hit with a ball 3 times.
// - To win the game, player needs to eliminate all the NPCs.
// - If any NPC reachs to the right border, player lose.
// - Refresh the page to restart the game.

// Copyright: I dont own any of the characters used in this project. The only purpose is for this project.

let bg, start_Button;
let game_start = 0;
let galaxy_Bg, R2D2_Arr_Img, masterBall_Img, Pikachu_Img;
let R2D2_Arr = [], pikachu, masterBall;
let masterBalls_Arr;
let gravity;
let currFrameCount;
let game_lose;
let win_Pikachu_Img, lose_Pikachu_Img;
function preload() {
    bg = loadImage('Images/background.jpg');
    galaxy_Bg = loadImage("Images/galaxy.png");
    R2D2_Arr_Img = loadImage("Images/R2D2.png");
    masterBall_Img = loadImage("Images/MasterBall.png");
    Pikachu_Img = loadImage("Images/pikachu.png");
    masterBall_Img = loadImage("Images/MasterBall.png");
    win_Pikachu_Img = loadImage("Images/PikachuVictory.png");
    lose_Pikachu_Img = loadImage("Images/pikachuLose.png");
    masterBalls_Arr = [];
    currFrameCount = 0;
    game_lose = false;
}

function setup() {
    createCanvas(500, 500);

    for (let i=0; i<4; i++) {
        R2D2_Arr[i] = new R2D2_Obj(R2D2_Arr_Img,25, (i+1)*70);
    }

    start_Button = createButton('START GAME');
    start_Button.position(200, 400);
    start_Button.mousePressed(game_Start);

    gravity = createVector(0, 0.1);
    pikachu = new pikachu_Obj(Pikachu_Img, 235, 475);
}

function game_Start () {
    start_Button.hide();
    game_start = 1;
    return game_start;
}

function game_Win () {
    let win = true;
    for (let i =0; i<R2D2_Arr.length; i++ ) {
        if (R2D2_Arr[i].disappear === 0) {
            win = false;
        }
    }
    return win;
}

function mouseClicked() {
    if (game_start === 1) {
        masterBalls_Arr.push(new masterball_Obj(masterBall_Img, pikachu.position.x, pikachu.position.y, pikachu.angle));
    }
}

function draw() {
    if (game_start === 0) {
        background(bg);
        noStroke();
        fill('rgba(63, 89, 191, 1.7)');
        rect(50, 60, 400, 60, 30);
        textSize(32);
        fill(255, 204, 0);
        text("Pikachu with R2D2", 120, 100);

        fill(240, 186, 131);
        rect(40, 150, 420, 180, 30);
        textSize(20);
        fill(131, 186, 240);
        text(" - Use cursor to control the director Pikachu", 50, 185);
        text(" - Mouse click to shoot the bullet", 50, 210);
        text(" - Eliminate all R2D2s to win the game", 50, 235);
        text(" - If any R2D2 reaches the right boundary, \n  game ends", 50, 260);

    }
    else if (game_start ===1) {
        if (game_lose) {
            background(255,255,255);
            image(lose_Pikachu_Img, 150, 150, 300, 300);
            fill(191, 127, 63);
            textSize(32);
            text("R2D2 Invades!", 100, 100);

        }
        else if (game_Win() === false) { // havent win the game
            angleMode(RADIANS);
            background(galaxy_Bg);
            for (let i = 0; i < R2D2_Arr.length; i++) {
                R2D2_Arr[i].move();
                R2D2_Arr[i].draw();

            }
            pikachu.draw();
            pikachu.shoot_Ball();
        }
        else if (game_Win()) { // Win the game
            background(63, 127, 191);
            image(win_Pikachu_Img, 150, 150, 300, 300);

            fill(191, 127, 63);
            textSize(52);
            text("You Win!", 100, 100);
        }
    }
}

