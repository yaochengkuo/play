input.onButtonPressed(Button.A, function () {
    拍手次數 = -1
})
input.onSound(DetectedSound.Loud, function () {
    if (input.soundLevel() > 245) {
        拍手次數 += 1
        basic.showLeds(`
            . . . . #
            . # . . #
            # # # . #
            . # . . #
            . . . . #
            `)
        basic.showNumber(拍手次數)
    }
})
let 拍手次數 = 0
input.setSoundThreshold(SoundThreshold.Loud, 245)
拍手次數 = 0
let 減去 = 0
