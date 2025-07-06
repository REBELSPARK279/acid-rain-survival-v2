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
10: gameover 1p
*/

//FUNCTIONS

function display(type: string) {
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
    } else if (number == 11) {
        basic.showLeds(`
        #..#.
        #..#.
        #..#.
        #..#.
        #..#.
        `);
    } else if (number == 12) {
        basic.showLeds(`
        #.###
        #...#
        #.###
        #.#..
        #.###
        `);
    } else if (number == 13) {
        basic.showLeds(`
        #.###
        #...#
        #.###
        #...#
        #.###
        `);
    } else if (number == 14) {
        basic.showLeds(`
        #.#.#
        #.#.#
        #.###
        #...#
        #...#
        `);
    } else if (number == 15) {
        basic.showLeds(`
        #.###
        #.#..
        #.###
        #...#
        #.###
        `);
    } else if (number == 16) {
        basic.showLeds(`
        #.###
        #.#..
        #.###
        #.#.#
        #.###
        `);
    } else if (number == 17) {
        basic.showLeds(`
        #.###
        #.#.#
        #...#
        #...#
        #...#
        `);
    } else if (number == 18) {
        basic.showLeds(`
        #.###
        #.#.#
        #.###
        #.#.#
        #.###
        `);
    } else if (number == 19) {
        basic.showLeds(`
        #.###
        #.#.#
        #.###
        #...#
        #.###
        `);
    } else {
        basic.showNumber(number);
    }
}

function dropGraphicProvider(dropX: number) {
    function deathChecker() {
        if (x == dropX) {
            mode = 10;
        }
    }
    for (let i = 0; i < 4; i++) {
        led.toggle(dropX, 0);
        basic.pause(500 / difficulty);
    }
    led.plotBrightness(dropX, 0, 255);
    basic.pause(30);
    led.plotBrightness(dropX, 1, 255);
    basic.pause(30);
    led.plotBrightness(dropX, 2, 255);
    led.plotBrightness(dropX, 0, 191);
    basic.pause(30);
    led.plotBrightness(dropX, 3, 255);
    led.plotBrightness(dropX, 1, 191);
    led.plotBrightness(dropX, 0, 127);
    basic.pause(30);
    led.plotBrightness(dropX, 4, 255);
    led.plotBrightness(dropX, 2, 191);
    led.plotBrightness(dropX, 1, 127);
    led.plotBrightness(dropX, 0, 63);
    deathChecker();
    if (((mode == 5) || (mode == 7) || (mode == 8)) && (orbitalSoundOverride == 0)) {
        music.play(music.tonePlayable(165, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground);
    }
}

//VARIABLES

let mode = 1;
let page = 2;
let volume = 10;
let x = 2;
let dashCD = 0;
let difficulty = 1;
let drop1x = -1;
let drop2x = -1;
let drop3x = -1;
let drop4x = -1;
let orbitalDropX = -1;
let orbitalSoundOverride = 0;

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
    } else if ((mode == 4) || (mode == 6)) {
        if (page == 1) {
            display("back_arrow");
        } else {
            showNum(page - 1);
        }
    } else if (mode == 9) {
        showNum(volume);
    }
});

input.onButtonPressed(Button.A, function () {
    if (((mode == 1) || (mode == 2) || (mode == 3)) && (page != 1)) {
        page--;
    } else if ((mode == 4) || (mode == 6)) {
        if (page == 1) {
            page = 20;
        } else {
            page--;
        }
    } else if ((mode == 5) || (mode == 7) || (mode == 8)) {
        if (x > 0) {
            x--;
            for (let i = 0; i < 5; i++) {
                if (x != i) {
                    led.unplot(i, 4)
                } else {
                    led.plot(i, 4);
                }
            }
            if (dashCD != 0) {
                dashCD--;
            }
        } else {

        }
    } else if ((mode == 9) && (volume > 0)) {
        volume--;
        music.setVolume(volume * 25);
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground);
    }
});

input.onButtonPressed(Button.B, function () {
    if ((mode == 1) && (page < 4)) {
        page++;
    } else if ((mode == 2) && (page < 2)) {
        page++;
    } else if ((mode == 3) && (page < 3)) {
        page++;
    } else if ((mode == 4) || (mode == 6)) {
        if (page == 20) {
            page = 1;
        } else {
            page++;
        }
    } else if (mode == 9) {
        if (volume < 10) {
            volume++;
        }
        music.setVolume(volume * 25);
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground);
    }
});

input.onButtonPressed(Button.AB, function () {
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
            basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `);
            basic.pause(250);
            mode = 4;
        } else if (page == 3) {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `);
            basic.pause(250);
            mode = 6;
        }
    } else if (mode == 4) {

    } else if (mode == 9) {
        mode = 2;
    }
});

loops.everyInterval(randint((500 / difficulty) + 250, ((500 / difficulty) + 250) * 12), function () {
    if ((mode == 5) || (mode == 7)) {
        if (drop1x == -1) {
            drop1x = randint(0, 4);

        }
    }
});