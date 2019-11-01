function tower_Obj (x, y) {
    this.position = createVector(x, y);

    this.draw = function () {
        strokeWeight(1.5);
        stroke(D_BROWN);
        line(this.position.x, this.position.y, this.position.x, this.position.y + 20);

        // creating tower top
        push();
        translate(this.position.x, this.position.y + 20);
        beginShape();
        vertex(-3, 0);
        vertex(-3, 22);
        vertex(-9, 22);
        vertex(-15, 30);
        vertex(-20, 30);
        vertex(-20, 43);
        vertex(-16, 43);
        vertex(-16, 70);
        vertex(16, 70);
        vertex(16, 43);
        vertex(20, 43);
        vertex(20, 30);
        vertex(15, 30);
        vertex(9, 22);
        vertex(3, 22);
        vertex(3, 0);
        endShape(CLOSE);
        rect(-24, 50, 48, 8);
        pop();

        // creating the first part of the tower
        push();
        translate(this.position.x, this.position.y + 90);
        beginShape(QUAD_STRIP);
        vertex(-16, 0);
        vertex(-16, 8);
        vertex(0, 0);
        vertex(0, 8);
        vertex(16, 0);
        vertex(16, 8);
        endShape();

        translate(0, 8); // starting create the window shape
        let initial_width = 16;
        let initial_height = 14;
        let increment_width = 0.5;
        let increment_height = 0.5;
        let cur_ypos = 0;
        for (let i = 0; i <= 6; i++) {
            beginShape(TRIANGLE_FAN); // left windows
            vertex(-initial_width / 2, cur_ypos + initial_height / 2); // center
            vertex(-initial_width, cur_ypos);
            vertex(0, cur_ypos);
            vertex(0, cur_ypos + initial_height);
            vertex(-initial_width, cur_ypos + initial_height);
            vertex(-initial_width, cur_ypos);
            endShape();

            beginShape(TRIANGLE_FAN); // left windows
            vertex(initial_width / 2, cur_ypos + initial_height / 2); // center
            vertex(initial_width, cur_ypos);
            vertex(0, cur_ypos);
            vertex(0, cur_ypos + initial_height);
            vertex(initial_width, cur_ypos + initial_height);
            vertex(initial_width, cur_ypos);
            endShape();

            cur_ypos += initial_height;
            initial_height += increment_height;
            initial_width += increment_width;
        }

        let position_shift = 1.3;
        let x_pos = 0;
        let left_left = -x_pos - initial_width;
        let left_right = -x_pos;
        let right_left = x_pos;
        let right_right = x_pos + initial_width;

        for (let i = 0; i <= 4; i++) {
            beginShape(TRIANGLE_FAN); // left windows
            vertex((left_left+x_pos-position_shift)/2, cur_ypos + initial_height / 2); // center
            vertex(left_left, cur_ypos);
            vertex(left_right, cur_ypos);
            vertex(left_right-position_shift, cur_ypos + initial_height);
            vertex(left_left - position_shift, cur_ypos + initial_height);
            vertex(left_left, cur_ypos);
            endShape();

            beginShape(TRIANGLE_FAN); // left windows
            vertex((right_right+x_pos+position_shift)/2, cur_ypos + initial_height / 2); // center
            vertex(right_left, cur_ypos);
            vertex(right_right, cur_ypos);
            vertex(right_right+position_shift, cur_ypos + initial_height);
            vertex(right_left + position_shift, cur_ypos + initial_height);
            vertex(right_left, cur_ypos);
            endShape();

            cur_ypos += initial_height;

            left_left -= position_shift;
            left_right -= position_shift;
            right_left += position_shift;
            right_right += position_shift;


        }

        translate(0, cur_ypos);
        // creating the 1st level platform
        rect(-30, -1, 60, 6);

        translate(0, 6);
        beginShape(QUAD_STRIP);
        vertex(-33, -1);
        vertex(-28, 7);
        vertex(33, -1);
        vertex(28, 7);
        endShape();

        translate(0, 7);
        let start_width_upper = 10;
        let width_decrement_upper = 0.5;
        let width_lower = 11;
        let width_decrement_lower = 1;
        let height = 12;
        cur_ypos = 0;
        let cur_x_length = 0;
        for (let i = 0; i < 3; i++) {
            beginShape(TRIANGLE_FAN); // left windows
            vertex(-start_width_upper / 2 - cur_x_length, height / 2); // center
            vertex(-start_width_upper - cur_x_length, cur_ypos);
            vertex(-cur_x_length, cur_ypos);
            vertex(-cur_x_length, cur_ypos + height);
            vertex(-cur_x_length - width_lower, cur_ypos + height);
            vertex(-start_width_upper - cur_x_length, cur_ypos);
            endShape();

            beginShape(TRIANGLE_FAN); // right windows
            vertex(start_width_upper / 2 + cur_x_length, height / 2); // center
            vertex(start_width_upper + cur_x_length, cur_ypos);
            vertex(cur_x_length, cur_ypos);
            vertex(cur_x_length, cur_ypos + height);
            vertex(cur_x_length + width_lower, cur_ypos + height);
            vertex(start_width_upper + cur_x_length, cur_ypos);
            endShape();

            start_width_upper -= width_decrement_upper;
            width_lower -= width_decrement_lower;
            cur_x_length += start_width_upper;
        }

        translate(0, height);
        beginShape();
        vertex(-28, 0);
        vertex(-30, 6);
        vertex(30, 6);
        vertex(28, 0);
        endShape(CLOSE);

        translate(0, 6);
        let upper_len = 20;
        let lower_len = 21;
        height = 18;
        x_pos = 10;
        let left_up_right = -x_pos;
        let left_up_left = -x_pos - upper_len;
        let right_up_right = x_pos;
        let right_up_left = x_pos + upper_len;

        cur_ypos = 0;
        position_shift = 2;
        for (let i = 0; i <= 3; i++) {
            beginShape(TRIANGLE_FAN); // right windows
            vertex(-x_pos - upper_len / 2, cur_ypos + height / 2); // center
            vertex(left_up_left, cur_ypos);
            vertex(left_up_right, cur_ypos);
            vertex(left_up_right - position_shift, cur_ypos + height);
            vertex(left_up_left - position_shift, cur_ypos + height);
            vertex(left_up_left, cur_ypos);
            endShape();

            beginShape(TRIANGLE_FAN); // right windows
            vertex(x_pos + upper_len / 2, cur_ypos + height / 2); // center
            vertex(right_up_left, cur_ypos);
            vertex(right_up_right, cur_ypos);
            vertex(right_up_right + position_shift, cur_ypos + height);
            vertex(right_up_left + position_shift, cur_ypos + height);
            vertex(right_up_left, cur_ypos);
            endShape();

            left_up_right = left_up_right - position_shift
            left_up_left = left_up_left - position_shift;
            right_up_right = right_up_right + position_shift;
            right_up_left += position_shift;
            cur_ypos += height;
            x_pos += position_shift;
        }

        pop();


    }


    this.lighting_top = function () {

    }
}