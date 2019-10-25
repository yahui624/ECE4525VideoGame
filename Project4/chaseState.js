function chaseState () {
    this.step = createVector (0,0);

    this.execute = function(me) {
        if (dist(mario.position.x, mario.position.y, me.position.x, me.position.y) <= 50) {
            me.chase();
        }
        if (dist(me.position.x, me.position.y, mario.position.x, mario.position.y )> 50) {
            me.changeState(0);
        }
    }
}