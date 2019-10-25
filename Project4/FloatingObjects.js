function FloatingObjects (x, y, img) {
    this.img = img;
    this.direction = 1;
    this.speed = 0.5;
    this.position = createVector(x, y);
    this.state = [new wanderState(), new chaseState()]; // FSM
    this.currState = 0;
    this.angle = 0;
    this.step = createVector(0, -1);
    this.eliminate = 0; // 0--not hit by ball; 1 -- hit by falling down ball


    this.draw = function () {
        if (this.eliminate === 0 ) {
            image(this.img, this.position.x, this.position.y, 20, 20);
        }
    }

    this.collide = function() {
        let c = 0;
        for (let i = 0; i < tilemap.obstacle.length; i++) {
            if (dist(this.position.x, this.position.y, tilemap.obstacle[i].x, tilemap.obstacle[i].y) < 20) {
                c = 1;
            }
        }

        if (this.position.y<10) { // out of top
            c =1
        }
        return c;
    }

    this.atJoint = function() {
        let j = 0;
        for (let i = 0; i < joints.length; i++) {
            if ((this.position.x === joints[i].x) && (this.position.y === joints[i].y)) {
                j = 1;
            }
        }
        return j;
    }

    this.Wandering = function() {
        if (this.eliminate === 0) {
            if ((this.atJoint() === 1) && (random(0, 10) < 5)) {
                this.direction = floor(random(1, 5));
            }
            switch (this.direction) {
                case 1: //right
                    this.position.x += this.speed;
                    this.angle = PI / 2;
                    if (this.collide() === 1) {
                        this.position.x -= this.speed;
                        this.direction = floor(random(1, 5));
                    }
                    break;
                case 2: //left
                    this.position.x -= this.speed;
                    this.angle = -PI / 2;
                    if (this.collide() === 1) {
                        this.position.x += this.speed;
                        this.direction = floor(random(1, 5));
                    }
                    break;
                case 3: //down
                    this.position.y += this.speed;
                    this.angle = PI;
                    if (this.collide() === 1) {
                        this.position.y -= this.speed;
                        this.direction = floor(random(1, 5));
                    }
                    break;
                case 4: //up
                    this.position.y -= this.speed;
                    this.angle = 0;
                    if (this.collide() === 1) {
                        this.position.y += this.speed;
                        this.direction = floor(random(1, 5));
                    }
                    break;
            }
        }
    }

    this.changeState = function(x) {
        this.currState = x;
    }

    this.chase = function() {
        if (this.eliminate ===0 ) {
            if (dist(this.position.x, this.position.y, mario.position.x, mario.position.y) > 1) {
                this.step.set(mario.position.x - this.position.x, mario.position.y - this.position.y);
                this.angle = this.step.heading() + PI / 2;
                this.step.normalize();
                this.step.mult(1.5);
                this.position.x += this.step.x;
                this.position.y += this.step.y;
            }
        }
    }

    this.hit_ByBall = function () {
        for (let i=0; i<ball_Array.length; i++) {
            let distance = dist(this.position.y, this.position.x, ball_Array[i].position.y, ball_Array[i].position.x) <= 5
            if (distance) {
                if (ball_Array[i].velocity.y > 0) { // means the ball is falling down
                    this.eliminate = 1;
                }
                else if (ball_Array[i].velocity.x != 0){
                    ball_Array[i].disappear =1;
                }
            }
        }
    }
}