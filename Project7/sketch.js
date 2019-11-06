// Project 7 -- Yahui Zhao 11/04/2019

let initialized = 0;
let walls = [];
let graph;
let cost;
let inq ;
let comefrom;
let game_obj;

function preload() {


}

function setup() {
    createCanvas(400, 400);
    game_obj = new Game();
    graph = new Array(20);
    cost = new Array(20);
    inq = new Array(20);
    comefrom = new Array(20);

    for (var i = 0; i < 20; i++) { // Making 2D array
        graph[i] = new Array(20);
        cost[i] = new Array(20);
        inq[i] = new Array(20);
        comefrom[i] = new Array(20);
    }
}

function draw() {
    background(135,135,246);
    angleMode(RADIANS);
    game_obj.initialize();
    game_obj.displayTilemap();

}
