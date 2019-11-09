// Project 7 -- Yahui Zhao 11/04/2019

let initialized = 0;
let branchs =[];
let joints = [];
let Hoshi;
let bone = [];
let bee=[];
let graph;
let cost;
let inq ;
let comefrom;
let game_obj;
let toothBrush;
let backGround;
let cherryBlossom;
let frontPage;
let star = [];

function preload() {


}

function setup() {
    createCanvas(400, 400);
    game_obj = new game_Obj();
    graph = new Array(20);
    cost = new Array(20);
    inq = new Array(20);
    comefrom = new Array(20);

    toothBrush = new toothBrush_Obj(random(270, 200), random(230, 330));
    Hoshi = new hoshi_Obj(35, 40, 1);
    backGround = new backGround_Obj();
    cherryBlossom = new cherryBlossom_Obj(90, 80);
    frontPage = new frontPage_Obj(120, 130);

    star.push(new star_obj(30, 170), new star_obj(110, 170), new star_obj(190, 170), new star_obj(270, 170), new star_obj(350, 170));
    bee.push(new bee_Obj(120, random(50, 130)), new bee_Obj(250, 260), new bee_Obj(random(70, 300), random(200, 300)));


    for (let i = 0; i < 20; i++) { // Making 2D array
        graph[i] = new Array(20);
        cost[i] = new Array(20);
        inq[i] = new Array(20);
        comefrom[i] = new Array(20);
    }
}


function keyPressed() {
    if (game_obj.frozen === 0) {
        if (keyCode === LEFT_ARROW) {
            Hoshi.x -= 3;
            Hoshi.direction = 2;
        }
        if (keyCode === RIGHT_ARROW) {
            Hoshi.x += 3;
            Hoshi.direction = 1;
        }
        if (keyCode === UP_ARROW) {
            Hoshi.y -= 3;
            Hoshi.direction = 4;
        }
        if (keyCode === DOWN_ARROW) {
            Hoshi.y += 3;
            Hoshi.direction = 3;
        }
        if (Hoshi.x < 30) { //boundary on canvas
            Hoshi.x = 30;
        }
        if (Hoshi.x > 365) {
            Hoshi.x = 365;
        }
        if (Hoshi.y < 25) {
            Hoshi.y = 25;
        }
        if (Hoshi.y > 365) {
            Hoshi.y = 365;
        }
    } else if (game_obj.frozen === 1) { //forzen the dog
        println("oopps!");
        // Hoshi.x = Hoshi.x;
        // Hoshi.y = Hoshi.y;
    }
}

function draw() {
    // background(135,135,246);
    // angleMode(RADIANS);
    // game_obj.initialize();
    // game_obj.displayTilemap();
    if (game_obj.gameStart === 0) {
        background(250, 218, 218);
        frontPage.draw();
        backGround.display();
        for(let i=0; i<star.length; i++) {
            star[i].display();
            star[i].gameStart();
        }
    }
    else if (game_obj.gameStart ===1) {
        frameRate(80);
        if (game_obj.gameWin === 0) {
            if (game_obj.gameOver === -1) {
                game_obj.initialize();
                game_obj.gameOver = 0;
            }
            else if (game_obj.gameOver === 0) {
                cursor(ARROW);
                background(247, 242, 247); // clear the screen
                push();
                game_obj.drawBackground();
                Hoshi.draw();
                Hoshi.stop_Move();
                // toothBrush.showing();
                if (game_obj.undefeatable ===0) { //if dont have the powerup, defeatable
                    Hoshi.gameOver();
                }
                if (game_obj.undefeatable ===1){//this time wont call bee collision function
                    Hoshi.addCherry(); //draw a new HoShi
                }
                if (game_obj.frozen === 1){
                    Hoshi.add_IceCube();
                    game_obj.frozen=0;
                }

                Hoshi.addBones();

                //Bonus for getting Udefeatable
                if (frameCount%650 === 0) {
                    game_obj.currFrame = frameCount;
                    cherryBlossom = new cherryBlossom_Obj(random(70,200),random(130,330));
                    game_obj.undefeatable =0;
                }
                else if (frameCount%650 !== 0) {
                    cherryBlossom.display();
                    Hoshi.power_UP();
                }

                //Bonus for getting Udefeatable
                if (frameCount%750 === 0) {
                    game_obj.currFrame = frameCount;
                    toothBrush = new toothBrush_Obj(random(70,200),random(130,330));
                    game_obj.frozen =0;
                }
                else if ((frameCount%750 !== 0)) {
                    toothBrush.draw();
                    Hoshi.frozen();
                }

                pop();
                fill(255, 0, 0);
            }
            else { //Lose the game_obj
                fill(58, 58, 186);
                textSize(40);
                text("Game Over", 100, 200);
            }
        }
        else if (game_obj.gameWin === 1) {
            background(240, 198, 247);
            fill(51, 199, 219);
            textSize(25);
            text("Congratulation!\n      You Win!", 100, 200);
        }
    }

}
