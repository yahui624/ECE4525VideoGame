function Game () {
    this.tilemap = ["wwwwwwwwwwwwwwwwwwww",
        "w          ww      w",
        "w wwwwwwww    w  www",
        "w wwww     wwww wwww",
        "w   w       www    w",
        "w   w              w",
        "w        ww        w",
        "w         w        w",
        "wwww   wwww  www   w",
        "w  w          w    w",
        "w  w          w    w",
        "w    ww   w   w    w",
        "w         w   w    w",
        "w    wwwwww      w w",
        "w w  w         w   w",
        "w w  w         w   w",
        "w w  wwwwww        w",
        "w              wwwww",
        "w                 ww",
        "wwwwwwwwwwwwwwwwwwww",];

    this.initialize = function () { //initialize the tilemap
        for (let i = 0; i < this.tilemap.length; i++) {
            for (let j = 0; j < this.tilemap[i].length; j++) {
                if (this.tilemap[i][j] === 'w') {
                    walls.push(new wall_Obj(j * 20, i * 20));
                    graph[i][j] = -1;
                } else {
                    graph[i][j] = 0;
                }
            }

        }
    }

    this.displayTilemap = function () {
        fill(0, 0, 255);
        noStroke();
        for (let i = 0; i < walls.length; i++) {
            rect(walls[i].x, walls[i].y, 20, 20);
        }
    }
}