function Mario_Obj (x,y, img) {
    this.img = img;

    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.force = createVector(0, 0);

    this.jump = 0;
    this.jumpForce = createVector(0, -4);

    this.walkForward = 1;
    this.walkBackward = 1;

    this.draw = function () {
        image(this.img, this.position.x, this.position.y, 25, 25);
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

                this.position.add(4, 0);
                this.walkForward = 0;
            }
            if (this.walkBackward === 1) {
                this.applyForce(backForce);
                this.position.sub(4, 0);
                this.walkBackward = 0;
            }
            this.velocity.add(this.acceleration);
        }
        else {
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
        if (this.position.x >= 365) {
            this.position.x = 365;
            this.velocity.x = 0;
        }
        if (this.position.y >= 360) {
            this.position.y = 360;
            this.velocity.y = 0;
            this.jump = 0;
        }
    }

    this.collision= function () { // check for left and right collision
        if (this.velocity.y === 0) {
            let local_Obstacle = tilemap.localRegion(this.position, 20, 'x'); //obstacle that Mario could possible run into in left/right direction

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
            // let possible_Platforms = tilemap.localRegion(this.position, 5, 'y');
            // if (possible_Platforms.length === 0) {
            //
            // }

            this.velocity.set(0,0);
        }
    }
    
    this.landing = function (tilemap) { // during the jumping, check mario if can land on a platform
        let local_Obstacle = tilemap.localRegion(this.position, 10, 'x'); //obstacle that Mario could possible run into in left/right direction

        for (let i = 0; i < local_Obstacle.length; i++) { // check any obstacle's y is close to mario's
            if (dist(this.position.y + 5, this.position.x, local_Obstacle[i].y, local_Obstacle[i].x) <= 15) {
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

    this.collect_Star = function (stars) { // if Mario leave the platform will fall
        for (let i=0; i<stars.length; i++) {
            if (dist(this.position.y, this.position.x, stars[i].y, stars[i].x) <= 5) {
                star_collected[i] = 1; // means the star is collected
            }
        }
    }
    
    this.draw_Ball = function () {
        for (let i=0; i<ball_Array.length; i++) {
            ball_Array[i].updatePosition();
            ball_Array[i].draw();
        }
    }

    
}

