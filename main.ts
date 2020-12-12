input.onButtonPressed(Button.A, function () {
    if (0 < spelerX) {
        spelerX += -1
        Draw()
    }
})
input.onButtonPressed(Button.B, function () {
    if (spelerX < 4) {
        spelerX += 1
        Draw()
    }
})
function Draw () {
    basic.clearScreen()
    led.plot(spelerX, spelerY)
    led.plot(objectX, objectY)
}
let objectY = 0
let objectX = 0
let spelerX = 0
let spelerY = 0
spelerY = 4
basic.forever(function () {
    objectX = randint(0, 4)
    objectY = 0
    Draw()
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        objectY += 1
        Draw()
    }
    if (spelerX != objectX) {
        basic.showString("Game over")
    }
})
