function game_Obj() {
    this.gameStart=0; // start the game == 0;
    this.gameOver = -1;
    this.gameWin =0; // not win -- 0; win -- 1
    this.score = 0;
    this.currFrame = 0;
    this.undefeatable = 0; // 0 -- means afarid of bees, 1 -- not afarid of bees
    this.frozen =0;
    //this.yCor = -1650;
    this.objects = [];


    this.tilemap = ["wwwwwwwwwwwwwwwwwwww",
        "w    B   B ww   B  w",
        "w wwwwwwww    w  www",
        "w wwww     wwww wwww",
        "w   w   B  www    w",
        "w   w              w",
        "w        ww      B w",
        "w    B    w        w",
        "wwww   wwww  www   w",
        "w  w          w    w",
        "w  w  B       w    w",
        "w    ww   w   w  B w",
        "w      B  w   w    w",
        "w B  wwwwww      w w",
        "w w  wB        w   w",
        "w w  w B       w   w",
        "w w  wwwwww     B  w",
        "w      B       wwwww",
        "w  B       B      ww",
        "wwwwwwwwwwwwwwwwwwww",];

    this.initialize = function () { //initialize the tilemap
        for (let i = 0; i < this.tilemap.length; i++) {
            for (let j = 0; j < this.tilemap[i].length; j++) {
                switch (this.tilemap[i][j]) {
                    case 'w':
                        this.objects.push(new object_Obj(j * 20 + 10, i * 20 + 10, 1));
                        branchs.push(new branch_Obj(j * 20, i * 20));
                        break;
                    case 'B':
                        this.objects.push(new object_Obj(j * 20 + 10, i * 20 + 10, 2));
                        bone.push(new bone_Obj(j * 20, i * 20));
                        break;
                }
            }
        }
    }


    this.drawBackground = function() {
        for (let i = 0; i < branchs.length; i++) {
            branchs[i].draw();
        }
        for (let i = 0; i < bone.length; i++) {
            if (bone[i].showImage === true) {
                bone[i].draw();
            }
        }
        for (i = 0; i < bee.length; i++) {
            bee[i].draw();
            bee[i].move();
        }
    }
}