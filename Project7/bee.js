function bee_Obj (x,y) {
    this.x = x;
    this.y = y;
    this.direction = 1;
    this.speed = 1;

    this.draw = function () {
        // noStroke();
        push();
        scale(0.5);
        push();
        strokeWeight(2);
        translate(this.x, this.y);
        stroke(107, 44, 107);
        bezier(-5, 0, -15, -35, -23, 13, -5, -16.5);
        bezier(5, 0, 15, -35, 23, 13, 5, -16.5);
        pop();

        fill(255, 240, 253);
        ellipse(this.x + 10, this.y + 10, 20, 16.5);
        ellipse(this.x - 10, this.y + 10, 20, 16.5);
        fill(255, 251, 0);
        ellipse(this.x, this.y + 20, 20, 26);//body
        fill(255, 255, 255);
        ellipse(this.x, this.y, 20, 18.5);//head

        push();
        translate(this.x - 9.5, this.y + 15);
        strokeWeight(2);
        fill(255, 251, 0);
        bezier(0, 0, 2.5, 10.5, 17, 9, 19, 0);//body line
        pop();

        strokeWeight(1.5);
        fill(26, 25, 25);
        ellipse(this.x - 3, this.y - 1, 1.5, 3); //left eye
        ellipse(this.x + 3, this.y - 1, 1.5, 3); //right eye
        push();
        translate(this.x + 2, this.y + 8);
        triangle(0, 25, -5, 24.5, -2.5, 30); //tail needle
        pop();
        fill(255, 255, 255);
        pop();

    }

    this.collide = function() {
        let c = 0;
        for (let i = 0; i < branchs.length; i++) {
            if (dist(this.x, this.y, branchs[i].x, branchs[i].y) < 20) {
                c = 1;
            }
        }
        return c;
    }

    this.atJoint = function() {
        let j = 0;
        for (let i = 0; i < joints.length; i++) {
            if ((this.x === joints[i].x) && (this.y === joints[i].y)) {
                j = 1;
            }
        }
        return j;

    }

    this.move = function() {
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