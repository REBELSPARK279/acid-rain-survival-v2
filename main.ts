/*
mode directory
1: main menu
2: settings
3: gamemode select
4: 1p server select
5: 1p play
6: 2p server select
7: 2p play host
8: 2p play guest
9: sound control
*/

//FUNCTIONS

function display(type:string) {
    if (type == "back_arrow") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `);
    }
}

function showNum(number: number) {
    if (number == 0) {
        basic.showLeds(`
        .###.
        .#.#.
        .#.#.
        .#.#.
        .###.
        `);
    } else if (number == 1) {
        basic.showLeds(`
        ..#..
        .##..
        ..#..
        ..#..
        .###.
        `);
    } else if (number == 2) {
        basic.showLeds(`
        .###.
        ...#.
        .###.
        .#...
        .###.
        `);
    } else if (number == 3) {
        basic.showLeds(`
        .###.
        ...#.
        .###.
        ...#.
        .###.
        `);
    } else if (number == 4) {
        basic.showLeds(`
        .#.#.
        .#.#.
        .###.
        ...#.
        ...#.
        `);
    } else if (number == 5) {
        basic.showLeds(`
        .###.
        .#...
        .###.
        ...#.
        .###.
        `);
    } else if (number == 6) {
        basic.showLeds(`
        .###.
        .#...
        .###.
        .#.#.
        .###.
        `);
    } else if (number == 7) {
        basic.showLeds(`
        .###.
        .#.#.
        ...#.
        ..#..
        ..#..
        `);
    } else if (number == 8) {
        basic.showLeds(`
        .###.
        .#.#.
        .###.
        .#.#.
        .###.
        `);
    } else if (number == 9) {
        basic.showLeds(`
        .###.
        .#.#.
        .###.
        ...#.
        .###.
        `);
    } else if (number == 10) {
        basic.showLeds(`
        #.###
        #.#.#
        #.#.#
        #.#.#
        #.###
        `);
    }
}

//VARIABLES

let mode = 1;
let page = 2;

basic.forever(function () {
	if (mode == 1) {
        if (page == 1) { 
            basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `);
        } else if (page == 2) {
            basic.showLeds(`
            . # . . .
            . # # . .
            . # # # . 
            . # # . .
            . # . . .
            `);
        } else if (page == 3) {
            basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . . # . .
            . # # # .
            `);
        } else if (page == 4) {
            basic.showLeds(`
            . . . . #
            . . . . #
            . . # . #
            . . # . #
            # . # . #
            `);
        }
    } else if (mode == 2) {
        if (page == 1) {
            display("back_arrow");
        } else if (page == 2) {
            basic.showLeds(`
            . # . # .
            # # . . #
            # # . . #
            # # . . #
            . # . # .
            `);
        }
    } else if (mode == 3) {
        if (page == 1) {
            display("back_arrow");
        } else if (page == 2) {
            showNum(1);
        } else if (page == 3) {
            showNum(2);
        }
    }
});

input.onButtonPressed(Button.A, function() {
    if (((mode == 1) || (mode == 2) || (mode == 3)) && (page != 1)) {
        page--;
    }
});

input.onButtonPressed(Button.B, function () {
    if ((mode == 1) && (page < 4)) {
        page++;
    } else if ((mode == 2) && (page < 2)) {
        page ++;
    } else if ((mode == 3) && (page < 3)) {
        page ++;
    }
});

input.onButtonPressed(Button.AB, function() {
    if (mode == 1) {
        if (page == 1) {
            mode = 2;
            page = 2;
        } else if (page == 2) {
            mode = 3;
        }
    } else if (mode == 2) {
        if (page == 1) {
            mode = 1;
        } else if (page == 2) {
            mode = 9;
        }
    } else if (mode == 3) {
        if (page == 1) {
            mode = 1;
            page = 2;
        } else if (page == 2) {
            mode = 4;
        } else if (page == 3) {
            mode = 6;
        }
    } else if (mode == 4) {
        
    }
});