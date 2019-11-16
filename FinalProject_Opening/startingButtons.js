function starting_Buttons() {


    this.draw = function () {
        push();
        noStroke();

        fill('rgba(63, 89, 191, 1.7)');

        rect(286, 240, 240, 60, 30);
        textSize(32);
        fill(255, 204, 0);
        text("Play! ", 360, 280);


        fill(240, 186, 131);
        rect(286, 320, 240, 60, 30);
        textSize(32);
        fill(D_BLUE);
        text("Instructions!", 320, 360);
        pop();
    }


    this.select_options = function () {
        if (mouseX > 286 && mouseY > 320 && mouseX < 526 && mouseY < 380) {
            cursor('grab');
            if (mouseIsPressed) {
                view_instruction = true;
            }
        }
        else if (mouseX > 286 && mouseY > 240 && mouseX < 526 && mouseY < 300) {
            cursor('grab');
            if (mouseIsPressed) {
                game_start = true;
            }
        }
        else {
            cursor(ARROW);
            view_instruction = false;
            game_start = false;
        }
    }


    this.instruct_display = function () {
        textSize(16);
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

        this.display_returningButton();

    }
    this.display_returningButton = function () {
        fill(240, 186, 131);
        noStroke();
        rect(130, 380, 126, 46, 30);
        textSize(22);
        fill(D_BLUE);
        text("Return ... ", 150, 410);

        if (mouseX > 130 && mouseY > 380 && mouseX < 256 && mouseY < 426) {
            cursor('grab');
            if (mouseIsPressed) {
                this.return_startingPage();
            }
        }
        else {
            cursor(ARROW);
        }

    }
    this.return_startingPage = function () {
        view_instruction = false;
        game_start = false;
        show_return_instruction = false;
    }
}