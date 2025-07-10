/*
mode directory
0: animations
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
11: stats server select
12: stats connecting to 1p game
13: stats browser
14: stats viewer
15: 1p server status checker (server empty?)
16: record view
17: host died while in stats
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
    } else if (type == "trophy") {
        basic.showLeds(`
            #####
            .###.
            ..#..
            ..#..
            .###.
        `);
    }
}

function showNum(number:number) {
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
            if (mode == 5) {
                mode = 0;
                basic.pause(35);
                drop1x = -1;
                drop2x = -1;
                drop3x = -1;
                drop4x = -1;
                orbitalDropX = -1;
                basic.clearScreen();
                music.stopAllSounds();
                basic.showIcon(IconNames.Sad);
                if (offline == 0) {
                    radio.sendString("1ply-death");
                }
                music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone);
                basic.pause(500);
                basic.clearScreen();
                mode = 10;
            } else {

            }
        }
    }
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        for (let i = 0; i < 4; i++) {
            if ((mode == 5) || (mode == 7) || (mode == 8)) {
                led.toggle(dropX, 0);
                basic.pause(500 / difficulty);
            }
        }
    }
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        led.plotBrightness(dropX, 0, 255);
        basic.pause(30);
    }
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        led.plotBrightness(dropX, 1, 255);
        basic.pause(30);
    }
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        led.plotBrightness(dropX, 2, 255);
        led.plotBrightness(dropX, 0, 191);
        basic.pause(30);
    }
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        led.plotBrightness(dropX, 3, 255);
        led.plotBrightness(dropX, 1, 191);
        led.plotBrightness(dropX, 0, 127);
        basic.pause(30);
    }
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        led.plotBrightness(dropX, 4, 255);
        led.plotBrightness(dropX, 2, 191);
        led.plotBrightness(dropX, 1, 127);
        led.plotBrightness(dropX, 0, 63);
        deathChecker();
    }
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        if (orbitalSoundOverride == 0) {
            music.play(music.tonePlayable(165, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground);
        }
        basic.pause(30);
        led.plotBrightness(dropX, 3, 191);
        led.plotBrightness(dropX, 2, 127);
        led.plotBrightness(dropX, 1, 63);
        led.plotBrightness(dropX, 0, 0);
        deathChecker();
    }
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        basic.pause(30);
        led.plotBrightness(dropX, 4, 191);
        led.plotBrightness(dropX, 3, 127);
        led.plotBrightness(dropX, 2, 63);
        led.plotBrightness(dropX, 1, 0);
        deathChecker();
    }
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        basic.pause(30);
        led.plotBrightness(dropX, 4, 127);
        led.plotBrightness(dropX, 3, 63);
        led.plotBrightness(dropX, 2, 0);
        deathChecker();
    }
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        basic.pause(30);
        led.plotBrightness(dropX, 4, 63);
        led.plotBrightness(dropX, 3, 0);
        deathChecker();
    }
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        basic.pause(30);
        led.plotBrightness(dropX, 4, 0);
        deathChecker();
    }
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        basic.pause(100);
        score += randint(0, 1);
        difficulty = (0.0279 * score) + 1;
        if ((mode == 5) && (offline == 0)) {
            radio.sendValue("score", score);
        }
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
}

function orbitalDropGraphicsProvider() {
    function orbitalDeathChecker() {
        if (x == orbitalDropX) {
            if (mode == 5) {
                mode = 0;
                basic.pause(35);
                drop1x = -1;
                drop2x = -1;
                drop3x = -1;
                drop4x = -1;
                orbitalDropX = -1;
                basic.clearScreen();
                music.stopAllSounds();
                basic.showIcon(IconNames.Sad);
                if (offline == 0) {
                    radio.sendString("1ply-death");
                }
                music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone);
                basic.pause(500);
                basic.clearScreen();
                mode = 10;
            } else {

            }
        }
    }
    let orbitalCharge = 0;
    for (let i = 0; i < 126; i++) {
        led.plotBrightness(orbitalDropX, 0, orbitalCharge);
        basic.pause(12);
        orbitalCharge += 2;
    }
    for (let ii = 0; ii < 5; ii++) {
        led.plotBrightness(orbitalDropX, ii, 255);
    }
    orbitalSoundOverride = 1;
    music.stopAllSounds();
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground);
    for (let iii = 0; iii < 40; iii++) {
        orbitalDeathChecker();
        basic.pause(25);
        led.plotBrightness(orbitalDropX, 0, 160);
        led.plotBrightness(orbitalDropX, 1, 160);
        led.plotBrightness(orbitalDropX, 2, 160);
        led.plotBrightness(orbitalDropX, 3, 160);
        led.plotBrightness(orbitalDropX, 4, 160);
        orbitalDeathChecker();
        basic.pause(25);
        led.plotBrightness(orbitalDropX, 0, 255);
        led.plotBrightness(orbitalDropX, 1, 255);
        led.plotBrightness(orbitalDropX, 2, 255);
        led.plotBrightness(orbitalDropX, 3, 255);
        led.plotBrightness(orbitalDropX, 4, 255);
    }
    orbitalSoundOverride = 0;
    led.unplot(orbitalDropX, 0);
    led.unplot(orbitalDropX, 1);
    led.unplot(orbitalDropX, 2);
    led.unplot(orbitalDropX, 3);
    led.unplot(orbitalDropX, 4);
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        score++;
        difficulty = (0.0279 * score) + 1;
        if ((mode == 5) && (offline == 0)) {
            radio.sendValue("score", score);
        }
    }
    orbitalDropX = -1;
    orbitalCooldown = 15000;
}

function updateStats(update:string) {
    if (update == "score") {
        radio.sendValue("score", score);
    } else if (update == "cooldown") {
        radio.sendValue("cooldown", dashCD);
    }
}

function errorSound() {
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground);
    basic.pause(200);
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground);
}

function gameoverResetVars() {
    if (score > record) {
        record = score;
    }
    x = 2;
    dashCD = 0;
    difficulty = 1;
    drop1x = -1;
    drop2x = -1;
    drop3x = -1;
    drop4x = -1;
    orbitalDropX = -1;
    score = 0;
    orbitalSoundOverride = 0;
    orbitalCooldown = 15000;
    statsScore = 0;
    statsCD = 0;
    offline = 0;
    emptyServerPingCount1p = 0;
    inactivityCount1p = 0;
    dash = 0;
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
let score = 0;
let orbitalSoundOverride = 0;
let volumeMemory = 10;
let orbitalCooldown = 15000;
let statsScore = 0;
let statsCD = 0;
let offline = 0;
let emptyServerPingCount1p = 0;
let inactivityCount1p = 0;
let dash = 0;
let record = 0;

radio.setGroup(0);
radio.setTransmitPower(7);

//INPUTS

input.onPinPressed(TouchPin.P2, function() {
    if (volume == 0) {
        volume = volumeMemory;
    } else {
        volumeMemory = volume;
        volume = 0;
    }
    music.setVolume(25 * volume);
    led.plotAll();
    basic.pause(100);
    basic.clearScreen();
    if ((mode == 5) || (mode == 7) || (mode == 8)) {
        led.plot(x, 4);
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
    } else if (mode == 4) {
        if (page == 1) {
            display("back_arrow");
        } else if (page == 2) {
            basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `);
        } else {
            showNum(page - 2);
        }
    } else if ((mode == 6) || (mode == 11)) {
        if (page == 1) {
            display("back_arrow");
        } else {
            showNum(page - 1);
        }
    } else if (mode == 9) {
        showNum(volume);
    } else if (mode == 10) {
        showNum(score);
    } else if (mode == 12) {
        basic.showLeds(`
        .....
        .....
        .....
        .....
        #....
        `);
        led.plot(2,4);
        basic.pause(500);
        led.plot(4, 4);
        basic.pause(500);
        radio.sendString("1sts-connecting");
    } else if (mode == 13) {
        if (page == 1) {
            display("back_arrow");
        } else if (page == 2) {
            display("trophy");
        } else if (page == 3) {
            basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `);
        } else if (page == 4) {
            basic.showLeds(`
            ..#..
            .#...
            #####
            ...#.
            ..#..`);
        }
    } else if (mode == 14) {
        if (page == 2) {
            showNum(statsScore);
        } else if (page == 3) {
            showNum(statsCD);
        }
    } else if (mode == 15) {
        basic.showLeds(`
        .....
        .....
        .....
        .....
        #....
        `);
        led.plot(2, 4);
        basic.pause(500);
        led.plot(4, 4);
        basic.pause(500);
        radio.sendString("1ppl-empty");
        if (emptyServerPingCount1p == 1) {
            basic.clearScreen();
            mode = 0;
            music.play(music.stringPlayable("C D E F G A B C5 ", 480), music.PlaybackMode.InBackground);
            basic.showIcon(IconNames.Yes);
            basic.pause(1250);
            music.play(music.tonePlayable(575, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground);
            showNum(3);
            basic.pause(1000);
            music.play(music.tonePlayable(575, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground);
            showNum(2);
            basic.pause(1000);
            music.play(music.tonePlayable(575, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground);
            showNum(1);
            basic.pause(1000);
            basic.clearScreen();
            music.play(music.tonePlayable(850, music.beat(BeatFraction.Breve)), music.PlaybackMode.InBackground);
            music.setTempo(120);
            mode = 5;
            led.plot(2, 4);
            emptyServerPingCount1p = 0;
        } else {
            emptyServerPingCount1p++;
        }
    } else if (mode == 16) {
        showNum(record);
    } else if (mode == 17) {
        showNum(statsScore);
    }
});

radio.onReceivedString(function(receivedString:string) {
    if (mode == 5) {
        if (receivedString == "1sts-connecting") {
            radio.sendString("1ply-connect");
        } else if (receivedString == "1ppl-empty") {
            radio.sendString("1ply-occupied");
        }
    } else if (mode == 12) {
        if (receivedString == "1ply-connect") {
            mode = 0;
            basic.showIcon(IconNames.Yes);
            basic.pause(1000);
            mode = 13;
            page = 2;
        }
    } else if ((mode == 13) || (mode == 14)) {
        if (receivedString == "1ply-death") {
            mode = 0;
            basic.showIcon(IconNames.Sad);
            basic.pause(500);
            basic.clearScreen();
            mode = 17;
        }
    } else if (mode == 15) {
        if (receivedString == "1ply-occupied") {
            mode = 0;
            basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `);
            basic.pause(1500);
            mode = 4;
        }
    }
});

radio.onReceivedValue(function(name:string, value:number) {
    if ((mode == 13) || (mode == 14)) {
        if (name == "score") {
            statsScore = value;
            inactivityCount1p = 0;
        } else if (name == "cooldown") {
            statsCD = value;
            inactivityCount1p = 0;
        }
    }
});

input.onButtonPressed(Button.A, function () {
    if (((mode == 1) || (mode == 2) || (mode == 3)) && (page != 1)) {
        page--;
    } else if (mode == 4) {
        if (page == 1) {
            page = 21;
        } else {
            page--;
        }
    } else if ((mode == 6) || (mode == 11)) {
        if (page == 1) {
            page = 20;
        } else {
            page--;
        }
    } else if ((mode == 5) || (mode == 7) || (mode == 8)) {
        if (dash == 0) {
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
                errorSound();
            }
        } else {
            if (x == 0) {
                errorSound();
            } else if (x == 1) {
                x = 0;
                led.plot(0, 4);
                led.unplot(1, 4);
            } else {
                led.unplot(x, 4);
                x -= 2;
                led.plot(x, 4);
                dashCD = 15;
            }
            dash = 0;
        }
        if ((mode == 5) && (offline == 0)) {
            radio.sendValue("LR", 0);
            radio.sendValue("cooldown", dashCD);
        }
    } else if ((mode == 9) && (volume > 0)) {
        volume--;
        music.setVolume(volume * 25);
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground);
        volumeMemory = volume;
    } else if (mode == 13) {
        if (page > 1) {
            page--;
        }
    }
});

input.onButtonPressed(Button.B, function () {
    if ((mode == 1) && (page < 4)) {
        page++;
    } else if ((mode == 2) && (page < 2)) {
        page++;
    } else if ((mode == 3) && (page < 3)) {
        page++;
    } else if (mode == 4) {
        if (page == 21) {
            page = 1;
        } else {
            page++;
        }
    } else if ((mode == 5) || (mode == 7) || (mode == 8)) {
        if (dash == 0) {
            if (x < 4) {
                x++;
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
                errorSound();
            }
        } else {
            if (x == 4) {
                errorSound();
            } else if (x == 3) {
                x = 4;
                led.plot(4, 4);
                led.unplot(3, 4);
            } else {
                led.unplot(x, 4);
                x += 2;
                led.plot(x, 4);
                dashCD = 15;
            }
            dash = 0;
        }
        if ((mode == 5) && (offline == 0)) {
            radio.sendValue("LR", 1);
            radio.sendValue("cooldown", dashCD);
        }
    } else if ((mode == 6) || (mode == 11)) {
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
        volumeMemory = volume;
    } else if (mode == 13) {
        if (page < 4) {
            page++;
        }
    }
});

input.onButtonPressed(Button.AB, function () {
    if (mode == 1) {
        if (page == 1) {
            mode = 2;
            page = 2;
        } else if (page == 2) {
            mode = 3;
        } else if (page == 3) {
            mode = 16;
        } else if (page == 4) {
            mode = 11;
            page = 2;
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
            mode = 0;
            basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `);
            basic.pause(250);
            basic.clearScreen();
            mode = 4;
        } else if (page == 3) {
            mode = 0;
            page = 2;
            basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `);
            basic.pause(250);
            basic.clearScreen();
            mode = 6;
        }
    } else if (mode == 4) {
        if (page == 1) {
            mode = 3;
            page = 2;
        } else if (page == 2) {
            basic.clearScreen();
            mode = 5;
            offline = 1;
            led.plot(2, 4);
        } else {
            basic.clearScreen();
            mode = 15;
            radio.setGroup(page - 2);
        }
    } else if ((mode == 5) || (mode == 7) || (mode == 8)) {
        if (dash == 0) {
            if (dashCD == 0) {
                music.play(music.tonePlayable(785, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground);
                dash = 1;
            } else {
                errorSound();
            }
        } else {
            dash = 0;
            led.plot(x, 4);
            music.play(music.tonePlayable(525, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground);
        }
    } else if (mode == 9) {
        mode = 2;
    } else if ((mode == 10) || (mode == 17)) {
        basic.clearScreen();
        gameoverResetVars();
        mode = 1;
        page = 2;
    } else if (mode == 11) {
        if (page == 1) {
            mode = 1;
            page = 4;
        } else {
            radio.setGroup(page - 1);
            mode = 12;
            statsScore = 0;
            statsCD = 0;
        }
    } else if (mode == 13) {
        if (page == 1) {
            mode = 11;
            page = 2;
            inactivityCount1p = 0;
        } else {
            mode = 14;
        }
    } else if (mode == 14) {
        mode = 13;
    } else if (mode == 16) {
        mode = 1;
    }
});

loops.everyInterval(1000, function() {
    if ((mode == 13) || (mode == 14)) {
        inactivityCount1p++;
        if (inactivityCount1p >= 10) {
            mode = 0;
            for (let i = 0; i < 2; i++) {
                basic.clearScreen();
                basic.showLeds(`
                # # # # #
                . # # # .
                . . # . .
                . # # # .
                # # # # #
                `);
                basic.pause(750);
                basic.clearScreen();
                basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `);
                basic.pause(750);
            }
            basic.pause(500);
            page = 2;
            mode = 11;
            inactivityCount1p = 0;
        }
    }
});

loops.everyInterval(randint(500 / difficulty + 250, (500 / difficulty + 250) * 12), function () {
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
loops.everyInterval(randint(500 / difficulty + 250, (500 / difficulty + 250) * 12), function () {
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
loops.everyInterval(randint(500 / difficulty + 250, (500 / difficulty + 250) * 12), function () {
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
loops.everyInterval(randint(500 / difficulty + 250, (500 / difficulty + 250) * 12), function () {
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
loops.everyInterval(randint(orbitalCooldown / 2, orbitalCooldown), function() {
    if ((mode == 5) || (mode == 7)) {
        if (orbitalDropX == -1) {
            orbitalDropX = randint(0, 4);
            if ((orbitalDropX == drop1x) || (orbitalDropX == drop2x) || (orbitalDropX == drop3x) || (orbitalDropX == drop4x)) {
                orbitalDropX = -1;
                orbitalCooldown = 6000;
            } else {
                orbitalDropGraphicsProvider();
            }
        }
    }
});
loops.everyInterval(100, function() {
    if (((mode == 5) || (mode == 7) || (mode == 8)) && (dash == 1)) {
        led.toggle(x, 4);
    }
});