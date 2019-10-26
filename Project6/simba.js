function simba_Obj (x, y) {
    this.position = createVector (x, y);
    this.direction = 1;
    this.speed = 8.5;

    this.draw = function () {
        scale(0.25);
        push();
        stroke(107, 44, 107);
        strokeWeight(8);
        fill(135,135,246);
        translate(this.position.x-320, this.position.y-150); // tail
        bezier(260, 355, 166, 274, 269, 250, 149, 204);
        ellipse(148, 210, 5,10);
        pop();

        fill(237, 160, 83);
        push();
        translate(this.position.x-213, this.position.y-20);// back right leg
        bezier(141, 253, 57, 254, 59, 102, 125, 180);
        pop();

        push(); // body -- lower half
        translate(this.position.x-40, this.position.y+140);
        rotate(PI/10);
        ellipse(0, 0, 100, 196);
        pop();

        ellipse(this.position.x-90,this.position.y+220, 50, 40); // back right paw

        ellipse(this.position.x+24, this.position.y+160, 35, 140);  // front left legs
        push(); // front left paw
        translate(this.position.x+24, this.position.y+215);
        ellipse(0,0, 50, 40);
        pop();

        ellipse(this.position.x-14, this.position.y+160, 35, 140);  // front right legs
        push();
        translate(this.position.x-13, this.position.y+215); // front right paw
        rotate(-PI/18);
        ellipse(0,0, 50, 40);
        pop();

        push(); // body -- upper half
        translate(this.position.x, this.position.y+80)
        rotate(-PI/8)
        ellipse(0, 0, 90, 100);
        pop();

        ellipse(this.position.x-47, this.position.y-20, 55, 60); // simba's left ear
        ellipse(this.position.x+48, this.position.y-23, 55, 60);// simba's right ear
        ellipse(this.position.x, this.position.y, 100, 100); // simba's head

        fill(237, 160, 83);
        ellipse(this.position.x-24, this.position.y, 18, 40); // simba's left outer eye
        ellipse(this.position.x+20, this.position.y-4, 18, 40);// simba's right outer eye

        ellipse(this.position.x-24, this.position.y, 13, 23); // simba's left inner eye
        ellipse(this.position.x+20, this.position.y-4, 13, 23);// simba's right inner eye

        arc(this.position.x, this.position.y+4.2, 100, 90, -0.12, PI, open); // try to hide the lower half of the eyes

        triangle(this.position.x-16, this.position.y+16, this.position.x+16, this.position.y+15, this.position.x-2, this.position.y+28); // simba's mouse

        // bezier(105, 224, 101, 237, 85, 240, 70, 238);
        bezier(this.position.x+25, this.position.y+26, this.position.x+24, this.position.y+31,
            this.position.x+15, this.position.y+34, this.position.x, this.position.y +32); // right whisker
        bezier(this.position.x, this.position.y+32, this.position.x-10, this.position.y+38,
            this.position.x-11, this.position.y+38, this.position.x-19, this.position.y+34); // left whisker

    }

    this.collide = function() {
        let c = 0;
        if (this.position.x > 1500 || this.position.y > 1350 || this.position.x < 100 || this.position.y <50) {
            c = 1;
        }
        return c;
    }

    this.move = function () {
        if ((this.collide() === 1) && (random(0, 10) < 5)) {
            this.direction = floor(random(1, 5));
        }
        switch (this.direction) {
            case 1: //right
                this.position.x += this.speed;
                if (this.collide() === 1) {
                    this.position.x -= this.speed;
                    this.direction = floor(random(1, 5));
                }
                break;
            case 2: //left
                this.position.x -= this.speed;
                if (this.collide() === 1) {
                    this.position.x += this.speed;
                    this.direction = floor(random(1, 5));
                }
                break;
            case 3: //down
                this.position.y += this.speed;
                if (this.collide() === 1) {
                    this.position.y -= this.speed;
                    this.direction = floor(random(1, 5));
                }
                break;
            case 4: //up
                this.position.y -= this.speed;
                if (this.collide() === 1) {
                    this.position.y += this.speed;
                    this.direction = floor(random(1, 5));
                }
                break;
        }
    }
}