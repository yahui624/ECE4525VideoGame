function minion_Obj (img, x, y, constant) {
    this.img = img;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.force = createVector(0, 0);
    this.x = x;
    this.y =y;

    this.jump = 0;
    this.jumpForce = createVector(0, -3);

    this.walkForward = 1;
    this.walkBackward = 1;

    // this.constant = constant;
    this.angle = 0.0;
    this.offset = this.position.y;
    this.scalar = 40;
    this.speed = 0.05;

    this.draw = function () {
        image(this.img, this.position.x, this.position.y, 60, 80);
    }

    this.animation = function () {
        this.position.y = this.offset + sin(this.angle + constant) * this.scalar;
        this.angle += this.speed;
    }

    this.play_Character = function () {
        image(this.img, this.position.x, this.position.y, 20, 20);
    }

    this.applyForce = function (force) { // update the acceleration
        this.acceleration.add(force);
        // console.log(this.acceleration, this.velocity);
    }

    this.update = function () { // update Mario's position
        this.acceleration.set(0, 0);
        if (this.jump === 0) {
            if (this.walkForward === 1) {
                this.applyForce(walkForce);

                this.position.add(2.5, 0);
                this.walkForward = 0;
            }
            if (this.walkBackward === 1) {
                this.applyForce(backForce);
                this.position.sub(2.5, 0);
                this.walkBackward = 0;
            }
            this.velocity.add(this.acceleration);
        } else {
            if (this.jump === 2) {
                this.applyForce(this.jumpForce);
                this.jump = 1;
            }
            if (this.jump > 0) {
                this.applyForce(gravity);
            }

            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.acceleration.set(0, 0);
        }

        if (this.position.x <= 20) {
            this.position.x = 20;
            this.velocity.x = 0;
        }
        if (this.position.x >= 580) {
            this.position.x = 580;
            this.velocity.x = 0;
        }
        if (this.position.y >= 580) {
            this.position.y = 580;
            this.velocity.y = 0;
            this.jump = 0;
        }
    }

    this.collision = function () { // check for left and right collision
        if (this.velocity.y === 0) {
            let local_Obstacle = level1_game.localRegion(this.position, 20, 'x'); //obstacle that Mario could possible run into in left/right direction

            for (let i = 0; i < local_Obstacle.length; i++) {
                let distance = dist(this.position.y, this.position.x, local_Obstacle[i].y, local_Obstacle[i].x) //distance between Mario and obstacles
                //console.log(distance);
                if (distance < 15) {
                    if (this.velocity.x > 0) { // Mario bumps to the right wall when they are on the different platforms
                        console.log("there is a wall in my right", this.velocity.x, distance);
                        this.position.x = local_Obstacle[i].x - 15;
                    }
                    if (this.velocity.x < 0) { // Mario bumps to the right wall
                        console.log("there is a wall in my left", this.velocity.x);
                        this.position.x = local_Obstacle[i].x + 15;
                    }
                }
            }

            // have a case that if Mario leave the platform, it should fall down
            // let possible_Platforms = level1_game.localRegion(this.position, 5, 'y');
            // if (possible_Platforms.length === 0) {
            //
            // }

            this.velocity.set(0, 0);
        }
    }

    this.landing = function (level1_game) { // during the jumping, check minion if can land on a platform
        let local_Obstacle = level1_game.localRegion(this.position, 10, 'x'); //obstacle that Mario could possible run into in left/right direction

        for (let i = 0; i < local_Obstacle.length; i++) { // check any obstacle's y is close to minion's
            if (dist(this.position.y, this.position.x, local_Obstacle[i].y, local_Obstacle[i].x) <= 15) {
                // console.log(this.velocity);
                if (this.velocity.y > 0) { // landing
                    console.log("I should land here");
                    this.position.y = local_Obstacle[i].y - 15;
                    this.velocity.y = 0;
                    this.jump = 0;
                }
            }
        }
    }


}