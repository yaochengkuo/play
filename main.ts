input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.ForeverInBackground)
    拍手次數 += -1
    basic.showNumber(拍手次數)
})
input.onSound(DetectedSound.Loud, function () {
    if (input.soundLevel() > 125) {
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
input.setSoundThreshold(SoundThreshold.Loud, 125)
拍手次數 = 0
