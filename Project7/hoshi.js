function hoshi_Obj(x, y, s) {
    this.x = x;
    this.y = y;
    this.speed = s;
    this.direction = 0;

    this.draw = function () {
        push();
        scale(0.5);
        push();
        fill(255, 255, 255);
        stroke(161, 76, 76);
        ellipse(this.x, this.y, 30, 30);
        fill(245, 228, 228);
        triangle(this.x - 3, this.y - 14, this.x - 10, this.y - 25, this.x - 14, this.y - 4);
        triangle(this.x + 3, this.y - 14, this.x + 10, this.y - 25, this.x + 14, this.y - 4);
        fill(84, 61, 25);
        ellipse(this.x - 8, this.y, 5, 5);  // eyes
        ellipse(this.x + 8, this.y, 5, 5);
        ellipse(this.x, this.y + 3, 3, 3);    // nose
        fill(176, 52, 52);
        arc(this.x, this.y + 6.5, 6, 12, 0, 180);//tounge
        pop();
        pop();
    }




    this.bump_Wall = function () {
        let c = 0;
        for (let i = 0; i < branchs.length; i++) {
            if (dist(this.x, this.y, branchs[i].x, branchs[i].y) < 15) {//bump to any wall
                c = 1;
            }
        }
        return c;
    }

    this.stop_Move = function () {
        switch (this.direction) {
            case 1: //right
                if (this.bump_Wall() === 1) {
                    this.x -= this.speed * 2;
                }
                break;
            case 2: //left
                if (this.bump_Wall() === 1) {
                    this.x += this.speed * 2;
                }
                break;
            case 3: //down
                if (this.bump_Wall() === 1) {
                    this.y -= this.speed * 2;
                }
                break;
            case 4: //up
                if (this.bump_Wall() === 1) {
                    this.y += this.speed * 2;
                }
                break;
        }
        this.Direction = 0;
    }
    this.addBones = function () {
        let not_win = 0;
        for (let i = 0; i < bone.length; i++) {
            if (dist(this.x, this.y, bone[i].x, bone[i].y) < 15) {
                if (game_obj.currFrame < (frameCount - 100)) {
                    game_obj.score++;
                    game_obj.currFrame = frameCount;
                    bone[i].showImage = false;
                }
            }
        }
        for (let i = 0; i < bone.length; i++) {//check if all the bones are collected
            if (bone[i].showImage === true) {
                not_win = 1;
            }
        }
        if (not_win === 0) {
            game_obj.gameWin = 1;
        }
    }

    this.gameOver = function () {
        for (let i = 0; i < bee.length; i++) {
            if (dist(this.x, this.y, bee[i].x, bee[i].y) < 15) {
                game_obj.gameOver = 1;
            }
        }
    }

    this.power_UP = function () {
        //if Hoshi collect the flower, wont be able to afraid of bees
        if (dist(this.x, this.y, cherryBlossom.x, cherryBlossom.y) < 22) {
            game_obj.undefeatable = 1;
        }
    }

    this.addCherry = function () {
        this.draw(); // Draw the orginal Hoshi

        push(); //Add the Bow
        stroke(176, 87, 201);
        fill(255, 13, 231);
        ellipse(this.x + 4, this.y - 14, 8, 9);
        ellipse(this.x + 14, this.y - 7, 8, 9);
        fill(253, 204, 255);
        ellipse(this.x + 9, this.y - 10, 7, 8);
        pop();
    }

    this.frozen = function () {
        //if Hoshi toothes the toothbrush, she needs to be frozen
        if (dist(this.x, this.y, toothBrush.x, toothBrush.y) < 22) {
            game_obj.frozen = 1;
        }
    }


    this.add_IceCube = function () {
        this.draw(); // Draw the orginal Hoshi
        push(); //make the ice cude
        translate(this.x, this.y);
        stroke(0, 227, 216);
        fill(204, 255, 252, 75);
        quad(-18, -26, 18, -26, 29, -40, -3, -40);
        rect(-18, -26, 35, 45);
        quad(18, -26, 18, 19, 29, 1, 29, -40);
        pop();
    }
}