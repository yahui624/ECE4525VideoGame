function level1_GameObj() {

    this.tilemap = [
        "w                            w",
        "w    wwwww               wwwww",
        "w                         L  w",
        "wwwwww       wwww        wwwww",
        "w                            w",
        "w     wwwww         wwww     w",
        "w                            w",
        "w        wwwww               w",
        "w           L        wwww    w",
        "w  wwwww    wwwww            w",
        "w                            w",
        "w    wwwww               wwwww",
        "w              wwww       L  w",
        "wwwwww                   wwwww",
        "w                            w",
        "w     wwwww       wwww       w",
        "w        L                   w",
        "w        wwwww               w",
        "w                    wwwww   w",
        "w  wwwww                     w",
        "w                  ww        w",
        "w                     ww     w",
        "w                            w",
        "w  wwwwww                    w",
        "w      L           wwwww     w",
        "w      wwwww            wwwwww",
        "w                            w",
        "wwwwww                       w",
        "wM                 wwww      w",
        "wwwwwwwwwwwwwwwwwwwwwwwwwwwwww",];

    this.gameStart = 0; // start the game == 0;
    this.gameOver = -1;
    this.score = 0;
    this.currFrame = 0;
    //this.yCor = -1650;
    this.objects = [];

    this.initialize = function () { //initialize the tilemap
        this.walls = [];
        this.ladders = [];

        for (let i = 0; i < this.tilemap.length; i++) {
            for (let j = 0; j < this.tilemap[i].length; j++) {
                switch (this.tilemap[i][j]) { // draw the map layout
                    case 'w':
                        image(level1_tilemap, j * 20, i * 20, 20, 20); //display the image
                        this.walls.push(new tilemap_Obj(j * 20, i * 20)); // store each block into an array
                        break;
                    case 'M':
                        minion.play_Character();

                        break;
                    case 'L':
                        image(ladder_img, j * 20, i * 20, 20, 22);
                        this.ladders.push(new ladder_Obj(j * 20, i * 20));
                        break;

                }
            }
        }
    }

    this.createWaterfall = function () {
        if (waterfall_Particles.length < 1000) {
            waterfall_Particles.push(new waterfall_Obj(random(572, 576), 20));
            waterfall_Particles.push(new waterfall_Obj(random(572, 576), 35));
        }
        for (let i = 0; i < waterfall_Particles.length; i++) {
            if ((waterfall_Particles[i].timeLeft > 0) && (waterfall_Particles[i].position.y < 590)) {
                waterfall_Particles[i].draw();
                waterfall_Particles[i].move();
            } else {
                waterfall_Particles.splice(i, 1);
            }
        }
    }


    this.localRegion = function (minion, distance, axis) { // return the array around the region of minion is at (x: -10 ~ +10 y: all range)
        let local_Obsctale = [];
        if (axis === 'x') {
            for (let i = 0; i < this.walls.length; i++) {
                if (abs(this.walls[i].x - minion.x) <= distance) {
                    local_Obsctale.push(this.walls[i]);
                }
            }
        }
        if (axis === 'y') {
            for (let i = 0; i < this.walls.length; i++) {
                if (this.walls[i].y - minion.y < 15) {
                    if (abs(this.walls[i].x - minion.x) <= distance) {
                        local_Obsctale.push(this.walls[i]);
                    }
                }
            }
            console.log((local_Obsctale.length));
        }
        return local_Obsctale;
    }

    // this.lose_Game = function () {
    //
    // }
    //
    // this.win_Game = function () {
    //
    // }


}