function toothBrush_Obj(x, y) {
    this.x = x;
    this.y = y;

    this.draw = function (x, y) {
        push();
        strokeWeight(0.8);
        stroke(104, 65, 135);
        translate(this.x, this.y);
        rotate(10);
        fill(107, 228, 255);
        rect(25, -15, 5, 12.5);
        fill(133, 153, 230);
        rect(0, -15, 25, 12.5);
        line(3, -11, 21, -11);
        fill(243, 255, 153);
        quad(0, -15, 0, -2.6, -5, -6, -5, -11.25);
        fill(240, 184, 135);
        rect(-5, -6, -4, -5);
        fill(201, 224, 213);
        ellipse(12.5, -30, 5.5, 5);
        fill(222, 199, 199);
        rect(4, 4, 7.5, 10);
        fill(201, 224, 213);
        ellipse(12.5, 12, 5.5, 5);
        rect(10, -29.5, 5, 40, 80);
        strokeWeight(1.2);
        line(5, 12, 7, 12); // the brushes
        line(5, 10, 8, 10);
        line(5, 8, 7.25, 8);
        line(5, 6, 7.5, 6);
        pop();

        push();
        translate(this.x, this.y);
        rotate(10);
        noStroke();
        fill(201, 224, 213);
        rect(10.25, 5.2, 4.5, 8);
        pop();
        stroke(132, 126, 224);
    }

    this.showing = function (x, y) {
        //shifting positions
        if (frameCount % 750 === 0) {
            game.currFrame = frameCount;
            toothBrush = new toothBrush_Obj(random(70, 200), random(50, 330));
        } else if ((frameCount % 750 !== 0)) {
            toothBrush.draw();
            Hoshi.frozen();
        }
    }

    this.collide = function () {
        let c = 0;
        for (let i = 0; i < branchs.length; i++) {
            if (dist(this.x, this.y, branchs[i].x + 5, branchs[i].y - 6) < 20) {
                c = 1;
            }
        }
        return c;
    }

    this.atJoint = function () {
        var j = 0;
        for (var i = 0; i < joints.length; i++) {
            if ((this.x === joints[i].x) && (this.y === joints[i].y)) {
                j = 1;
            }
        }
        return j;
    }

    this.move = function () {
        if ((this.atJoint() === 1) && (random(0, 10) < 5)) {
            this.direction = floor(random(1, 5));
        }
        switch (this.direction) {
            case 1: //right
                this.x += this.speed;
                if (this.collide() === 1) {
                    this.x -= this.speed;
                    this.direction = floor(random(1, 5));
                }
                break;
            case 2: //left
                this.x -= this.speed;
                if (this.collide() === 1) {
                    this.x += this.speed;
                    this.direction = floor(random(1, 5));
                }
                break;
            case 3: //down
                this.y += this.speed;
                if (this.collide() === 1) {
                    this.y -= this.speed;
                    this.direction = floor(random(1, 5));
                }
                break;
            case 4: //up
                this.y -= this.speed;
                if (this.collide() === 1) {
                    this.y += this.speed;
                    this.direction = floor(random(1, 5));
                }
                break;
        }
    }

}