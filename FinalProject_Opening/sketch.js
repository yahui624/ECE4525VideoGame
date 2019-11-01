let DD_RED
let D_RED
let RED
let L_RED
let D_ORANGE
let ORANGE
let L_ORANGE
let GOLD
let D_YELLOW
let YELLOW
let L_YELLOW
let D_GREEN
let GREEN
let L_GREEN
let TEAL
let DD_BLUE
let D_BLUE
let BLUE
let L_BLUE
let LL_BLUE
let D_PURPLE
let PURPLE
let L_PURPLE
let PINK
let D_BROWN
let BROWN
let L_BROWN
let WHITE
let D_GREY
let GREY
let L_GREY
let BLACK
let SEAFOAM
let MINT
let tower
let song

function preload() {
    soundFormats('mp3', 'ogg');
    song = loadSound('sound/Pharrell Williams - Freedom.mp3');
}

function setup() {
    createCanvas(800, 600);
    DD_RED = color(100, 0, 0);
    D_RED = color(180, 0, 0);
    RED = color(255, 0, 0);
    L_RED = color(255, 100, 100);
    D_ORANGE = color(200, 110, 0);
    ORANGE = color(255, 150, 0);
    L_ORANGE = color(255, 190, 80);
    GOLD = color(199, 166, 0);
    D_YELLOW = color(200, 200, 0);
    YELLOW = color(255, 255, 0);
    L_YELLOW = color(255, 255, 186);
    D_GREEN = color(0, 150, 0);
    GREEN = color(0, 255, 0);
    L_GREEN = color(175, 255, 175);
    TEAL = color(40, 150, 160);
    DD_BLUE = color(0, 0, 50);
    D_BLUE = color(0, 0, 100);
    BLUE = color(0, 0, 255);
    L_BLUE = color(0, 200, 255);
    LL_BLUE = color(180, 250, 255);
    D_PURPLE = color(60, 0, 120);
    PURPLE = color(150, 0, 255);
    L_PURPLE = color(200, 120, 255);
    PINK = color(250, 112, 255);
    D_BROWN = color(75, 30, 10);
    BROWN = color(150, 75, 50);
    L_BROWN = color(175, 100, 75);
    WHITE = color(255, 255, 255);
    D_GREY = color(75, 75, 75);
    GREY = color(125, 125, 125);
    L_GREY = color(175, 175, 175);
    BLACK = color(0, 0, 0);
    SEAFOAM = color(100, 240, 160);
    MINT = color(120, 240, 200);

    // initialize new object
    tower = new tower_Obj(250, 60);

    song.setVolume(0.1);
    song.play();
}



function draw() {
    background(SEAFOAM);
    tower.draw();
}

