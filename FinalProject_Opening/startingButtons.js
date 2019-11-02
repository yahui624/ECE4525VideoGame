function starting_Buttons() {


    this.draw = function () {
        push();
        noStroke();

        fill('rgba(63, 89, 191, 1.7)');

        rect(386, 240, 240, 60, 30);
        textSize(32);
        fill(255, 204, 0);
        text("Play! ", 460, 280);


        fill(240, 186, 131);
        rect(386, 320, 240, 60, 30);
        textSize(32);
        fill(D_BLUE);
        text("Instructions!", 420, 360);
        pop();
    }

    this.view_instruction = function () {
        if (mouseX > 386 && mouseY > 320 && mouseX < 626 && mouseY < 380) {
            cursor('grab');
            if (mouseIsPressed) {
                view_instruction = true;
            }
        }
        else if (mouseX > 386 && mouseY > 240 && mouseX < 626 && mouseY < 300) {
            cursor('grab');
            view_instruction = false;
        }
        else {
            cursor(ARROW);
            view_instruction = false;
        }
    }


    this.instruct_display = function () {
        textSize(26);
        fill(76, 15, 207);
        text("A game about a Japanese Akita named Hoshi ❤", 130, 200);
        fill(242, 12, 185);
        text("Help Hoshi collect all the bones to win the game", 130, 230);
        fill(201, 158, 16);
        text("Hoshi is afraid of bees so avoid getting stung", 130, 255);
        fill(181, 36, 181);
        text("Cherry bosslom can protect Hoshi from bees", 130, 280);
        fill(78, 166, 115);
        text("Toothpaste can freeze Hoshi for a few seconds", 130, 305);
    }
}