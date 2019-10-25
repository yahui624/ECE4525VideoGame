function ball_Obj (x, y) {
    this.position = createVector(x,y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.bumpForce = createVector(0, 0);
    this.size = random(20, 35);
    this.mass = this.size / 5;
    this.disappear =0;

    this.draw = function () {
        if (this.disappear === 0) {
            image(ball, this.position.x, this.position.y, 20, 20);
        }
    }

    this.applyForce = function(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    };

    this.computeBump = function() {
        if (this.disappear === 0) {
            for (let i = 0; i < ball_Array.length; i++) {
                if (this !== ball_Array[i] && ball_Array[i].disappear ===0 ) {
                    if (dist(this.position.x, this.position.y, ball_Array[i].position.x, ball_Array[i].position.y) <= (this.size / 2 + ball_Array[i].size / 2)) {
                        let v = createVector(this.position.x - ball_Array[i].position.x, this.position.y - ball_Array[i].position.y);
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
                        ball_Array[i].bumpForce.add(v);
                    }
                    ball_Array[i].bumpForce.normalize();
                }
            }
        }
};

    this. updatePosition = function() {
        if (this.disappear === 0) {
            let gravityForce = p5.Vector.mult(gravity, this.mass);
            this.applyForce(gravityForce);
            this.computeBump();
            this.applyForce(this.bumpForce);
            this.bumpForce.set(0, 0);
            let airFriction = p5.Vector.mult(this.velocity, -0.02);
            this.applyForce(airFriction);

            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            if (this.position.y > (380 - this.size / 2)) { //bouncing off the ground
                this.position.y = 380 - this.size / 2;
                this.velocity.y *= -1;
            }
            if (this.position.y < (20 - this.size / 2)) { //bouncing off the ground
                this.position.y = 20 - this.size / 2;
                this.velocity.y *= -1;
            }

            if (this.position.x > (345 + this.size / 2)) { //bounding off the right boundary
                // this.position.x = -this.size / 2;
                this.velocity.x *= -1;
            } else if (this.position.x < (30 - this.size / 2)) { //bounding off the left boundary
                this.velocity.x *= -1;
                // this.position.x = width + this.size / 2;
            }

            this.acceleration.set(0, 0);
        }
    }

}