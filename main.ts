let Water_Level = 0
basic.showString("Wong Siu Ho")
basic.forever(function () {
    Water_Level = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P1, 1023)
    if (Water_Level >= 502) {
        basic.showLeds(`
            . . . . .
            . . . . #
            # . . # .
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
