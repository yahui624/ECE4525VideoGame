function frontPage_Obj(x, y) {
    this.x=x;
    this.y=y;

    this.draw = function() {
        push();
        textSize(80);
        fill(0, 137, 222);
        text("ほし", this.x, this.y - 5);
        textSize(30);
        text("(star)", this.x + 150, this.y - 5);

        textFont("sans-serif", 15);
        text("A game about a Japanese Akita named Hoshi ❤", 30, 250);
        text("Collect all the bones to win the game", 30, 280);
        text("Avoid getting stung by bees", 30, 310);
        text("Cherry bosslom can protect from bees", 30, 340);
        text("(Click any star to start the game)", 30, 370);

        pop();
    }
}