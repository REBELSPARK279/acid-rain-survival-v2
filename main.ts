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

function dropGraphicProvider(dropX:number) {
    function deathChecker() {
        if (x == dropX) {
            mode = 10;
            drop1x = -1;
            drop2x = -1;
            drop3x = -1;
            drop4x = -1;
            orbitalDropX = -1;
            basic.clearScreen();
            music.stopAllSounds();
            music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.InBackground);
            basic.showIcon(IconNames.Sad);
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
    basic.pause(30);
    led.plotBrightness(dropX, 3, 191);
    led.plotBrightness(dropX, 2, 127);
    led.plotBrightness(dropX, 1, 63);
    led.plotBrightness(dropX, 0, 0);
    deathChecker();
    basic.pause(30);
    led.plotBrightness(dropX, 4, 191);
    led.plotBrightness(dropX, 3, 127);
    led.plotBrightness(dropX, 2, 63);
    led.plotBrightness(dropX, 1, 0);
    deathChecker();
    basic.pause(30);
    led.plotBrightness(dropX, 4, 127);
    led.plotBrightness(dropX, 3, 63);
    led.plotBrightness(dropX, 2, 0);
    deathChecker();
    basic.pause(30);
    led.plotBrightness(dropX, 4, 63);
    led.plotBrightness(dropX, 3, 0);
    deathChecker();
    basic.pause(30);
    led.plotBrightness(dropX, 4, 0);
    deathChecker();
    basic.pause(100);
    score += randint(0, 1);
    if (dropX == drop1x) {
        drop1x = -1;
    } else if (dropX == drop2x) {
        drop2x = -1;
    } else if(dropX == drop3x) {
        drop3x = -1;
    } else if(dropX == drop4x) {
        drop4x = -1;
    }
}


//VARIABLES

let mode = 5;
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
let score = 0;
let orbitalSoundOverride = 0;
let volumeMemory = 10;

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    if (volume == 0) {
        volume = volumeMemory;
    } else {
        volumeMemory = volume;
        volume = 0;
    }
});

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
            if ((drop1x == drop2x) || (drop1x == drop3x) || (drop1x == drop4x) || (drop1x == orbitalDropX)) {
                drop1x = -1;
            } else {
                dropGraphicProvider(drop1x);
            }
        }
    }
});
loops.everyInterval(randint((500 / difficulty) + 250, ((500 / difficulty) + 250) * 12), function () {
    if ((mode == 5) || (mode == 7)) {
        if (drop2x == -1) {
            drop2x = randint(0, 4);
            if ((drop1x == drop2x) || (drop2x == drop3x) || (drop2x == drop4x) || (drop2x == orbitalDropX)) {
                drop2x = -1;
            } else {
                dropGraphicProvider(drop2x);
            }
        }
    }
});
loops.everyInterval(randint((500 / difficulty) + 250, ((500 / difficulty) + 250) * 12), function () {
    if ((mode == 5) || (mode == 7)) {
        if (drop3x == -1) {
            drop3x = randint(0, 4);
            if ((drop1x == drop3x) || (drop2x == drop3x) || (drop3x == drop4x) || (drop3x == orbitalDropX)) {
                drop3x = -1;
            } else {
                dropGraphicProvider(drop3x);
            }
        }
    }
});
loops.everyInterval(randint((500 / difficulty) + 250, ((500 / difficulty) + 250) * 12), function () {
    if ((mode == 5) || (mode == 7)) {
        if (drop4x == -1) {
            drop4x = randint(0, 4);
            if ((drop1x == drop4x) || (drop4x == drop3x) || (drop2x == drop4x) || (drop4x == orbitalDropX)) {
                drop4x = -1;
            } else {
                dropGraphicProvider(drop4x);
            }
        }
    }
});