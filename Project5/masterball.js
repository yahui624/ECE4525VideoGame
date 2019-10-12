function masterball_Obj (img, x,y, angle) {
    this.position = createVector(x,y);
    this.img = img;
    this.angle = angle;
    this.disappear =0;
    this.initialize = 0;
    // based on the previous code
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.bumpForce = createVector(0, 0);
    this.size = 40;
    this.mass = this.size / 5;

    let temp_y = pikachu.position.y;

    this.draw = function () {
        if (this.disappear === 0 && this.initialize === 0 ) {
            push();
            translate(pikachu.position.x, pikachu.position.y);
            rotate(this.angle);
            temp_y -= 3.6;
            image(this.img, -15, temp_y -500, 30, 20);
            pop();

            // restore the real coordinate
            this.position.x = pikachu.position.x + -15 * cos(this.angle) - sin(this.angle)*(temp_y - 500);
            this.position.y = pikachu.position.y + -15 * sin(this.angle) + cos(this.angle)*(temp_y - 500);
            // console.log(this.angle, this.position);
        }
        else if (this.disappear === 0 && this.initialize === 1 ) {
            image(this.img, this.position.x, this.position.y, 30, 20);
        }
    }

    this.checkcollision = function () {
        for (let i = 0; i < masterBalls_Arr.length; i++) {
            if (this !== masterBalls_Arr[i] && masterBalls_Arr[i].disappear === 0) {
                if (dist(this.position.x, this.position.y, masterBalls_Arr[i].position.x, masterBalls_Arr[i].position.y) <= (this.size / 2 + masterBalls_Arr[i].size / 2)) {
                    this.initialize = 1;
                }
            }
            for (let j = 0; j<R2D2_Arr.length; j++){
                if (R2D2_Arr[j].disappear === 0) {
                    if (dist(this.position.x, this.position.y, R2D2_Arr[j].position.x, R2D2_Arr[j].position.y) <= 30) {
                        if (currFrameCount < frameCount - 30) {
                            console.log("I run into something!!!! ");
                            this.initialize = 1;
                            R2D2_Arr[j].nums_getHit ++;
                            currFrameCount = frameCount;
                        }
                    }
                }
            }

        }
    }

    this.outOfBoundary = function () {
        if (this.position.y <-20 || this.position.y >530 || this.position.x <-20 || this.position.x >530) {
            this.disappear =1;
        }
    }

     this.applyForce = function(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    };

    this.computeBump = function() {
        if (this.disappear === 0) {
            for (let i = 0; i < masterBalls_Arr.length; i++) {
                if (this !== masterBalls_Arr[i] && masterBalls_Arr[i].disappear === 0) {
                    if (dist(this.position.x, this.position.y, masterBalls_Arr[i].position.x, masterBalls_Arr[i].position.y) <= (this.size / 2 + masterBalls_Arr[i].size / 2)) {
                        let v = createVector(this.position.x - masterBalls_Arr[i].position.x, this.position.y - masterBalls_Arr[i].position.y);
                        this.velocity.mult(-1);
                        let heading1 = this.velocity.heading();
                        let heading2 = v.heading();
                        let angle = heading2 - heading1;
                        if (heading2 < heading1) {
                            angle = -angle;
                        }
                        if (abs(heading2 - heading1) > 180) {
                            angle = -angle;
                        }
                        this.velocity.rotate(2 * angle);
                        v.mult(0.1);    // approx
                        this.bumpForce.add(v);
                        v.mult(-1);
                        masterBalls_Arr[i].bumpForce.add(v);
                    }
                    masterBalls_Arr[i].bumpForce.normalize();
                }
            }
        }
    }

    this. updatePosition = function() {
        if (this.disappear === 0) {
            let gravityForce = p5.Vector.mult(gravity, this.mass);
            this.checkcollision();
            this.applyForce(gravityForce);
            this.computeBump();
            this.applyForce(this.bumpForce);
            this.bumpForce.set(0, 0);
            let airFriction = p5.Vector.mult(this.velocity, -0.02);
            this.applyForce(airFriction);

            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.outOfBoundary();

            this.acceleration.set(0, 0);
        }
    }




    






}