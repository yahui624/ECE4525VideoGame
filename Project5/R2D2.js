function R2D2_Obj (img, x,y) {
    this.position = createVector (x,y);
    this.img=img;
    this.nums_getHit = 0;
    this.disappear = 0;

    //Trying to move object in a sin wave
    let amplitude =60; // Height of wave
    let frame_Now = 0;


    this.draw = function () {

        if (this.nums_getHit < 3 && this.disappear ===0) {
            textSize(12);
            text(this.nums_getHit, this.position.x, this.position.y-5, 70, 80);
            // console.log(this.nums_getHit);
            fill(193, 66, 66);

            image(this.img, this.position.x, this.position.y, 26, 26);
        }
        else if (this.nums_getHit >= 3) {
            this.disappear = 1;
        }
    }

    this.move = function () {
        if (frame_Now <  frameCount - 30) {
            this.position.y = sin(this.position.x) * amplitude + this.position.y;
            this.position.x += 2.6;
            frame_Now = frameCount;
        }

        if (this.position.x >495) { //one of the R2D2 reach to the boundary
            game_lose = true;
        }

    }
}