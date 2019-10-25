function Game (obstacle) {
    this.tilemap = [
        "w           S     Pw",
        "w    wwwww     wwwww",
        "w  S               w",
        "wwwwww         wwwww",
        "w                  w",
        "w     wwwww        w",
        "w                  w",
        "w    S   wwwww     w",
        "w                  w",
        "w  wwwww    wwwww  w",
        "w             S    w",
        "w                  w",
        "w            wwwww w",
        "w  wwwww           w",
        "w                  w",
        "w      wwwww  wwwwww",
        "wwwww        S     w",
        "w                  w",
        "w                  w",
        "wwwwwwwwwwwwwwwwwwww",];

    this.gameStart=0; // start the game == 0;
    this.gameOver = -1;
    this.score = 0;
    this.currFrame = 0;
    this.undefeatable = 0; // 0 -- means afarid of bees, 1 -- not afarid of bees
    //this.yCor = -1650;
    this.objects = [];

    this.initialize = function () { //initialize the tilemap
        this.obstacle = [];
        this.stars = [];

        for (let i = 0; i < this.tilemap.length; i++) {
            for (let j = 0; j < this.tilemap[i].length; j++) {
                switch (this.tilemap[i][j]) { // draw the map layout
                    case 'w':
                        image(obstacle[(i + j) % 6], j * 20, i * 20, 20, 20); //display the image
                        this.obstacle.push(new obstacle_Obj(j * 20, i * 20)); // store each block into an array
                        break;
                    case 'S':
                        this.stars.push(new Star_Obj(j * 20, i * 20)); // store each block into an array
                        break;
                    case 'P':
                        image(princess, j * 20, i * 20, 25, 25); //display the image
                        this.princess = new Princess_Obj(j * 20, i * 20); // store each block into an array
                        break;

                }
            }
        }
    }

    this.star_display = function () {
        for (let i=0; i<this.stars.length; i++) {
            if (star_collected[i] ===0){
                image(star, this.stars[i].x, this.stars[i].y, 20,20);
            }
        }
    }

    this.enemy_display = function () {
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].draw();
            enemies[i].Wandering();
        }
    }

    this.localRegion = function (mario, distance, axis) { // return the array around the region of mario is at (x: -10 ~ +10 y: all range)
        let local_Obsctale = [];
        if (axis === 'x') {
            for (let i = 0; i < this.obstacle.length; i++) {
                if (abs(this.obstacle[i].x - mario.x) <= distance) {
                    local_Obsctale.push(this.obstacle[i]);
                }
            }
        }
        if (axis === 'y') {
            for (let i = 0; i < this.obstacle.length; i++) {
                if (this.obstacle[i].y - mario.y < 15) {
                    if (abs(this.obstacle[i].x - mario.x) <= distance) {
                        local_Obsctale.push(this.obstacle[i]);
                    }
                }
            }
            console.log((local_Obsctale.length));
        }
        return local_Obsctale;
    }


    this.lose_Game = function () {
        for (let i =0; i<enemies.length; i++) {
            if (enemies[i].eliminate === 0) { // if the enemy is not hit by the ball
                if (dist(mario.position.y, mario.position.x, enemies[i].position.y, enemies[i].position.x) <= 5) {
                    return true;
                }
            }
        }
        return false;
    }

    this.win_Game = function () {
        // all the stars needs to be collected
        for (let i=0; i< star_collected.length; i++) {
            if (star_collected[i] ===0 ) { // means there are still stars havent been collected
                return false;
            }
        }

        // reach to the princess
        if (dist(mario.position.x, mario.position.y, this.princess.position.x, this.princess.position.y) >20) {
            return false;
        }
        return true;
    }


}



