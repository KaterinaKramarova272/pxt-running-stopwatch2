
radio.setGroup(69)
let ready = true

reset ()

radio.setTransmitPower (7)

function reset() {
    Sensors.SetLightLevel()
    basic.showNumber(1)
    ready = true
}

input.onButtonPressed (Button.A, function (){
    Sensors.SetLightLevel ()
})

Sensors.OnLightDrop(function () {
    if (ready === true) {
            radio.sendNumber(0)
            music.playTone (320, 250)
            basic.showNumber(2)
        ready = false
    }
})

radio.onReceivedValue(function(name: string, value: number) {
    if (name == "elapsedT") {
        music.playTone(320, 250)
        basic.showNumber (value)
    }
input.onButtonPressed(Button.B, function () {
        basic.showNumber(value)
    })
})

radio.onReceivedString(function(receivedString: string) {
    if (receivedString == "resetuj") {
        reset ()
    }
})

input.onLogoEvent (TouchButtonEvent.Pressed, function (){
    radio.sendString("resetuj2")
    reset ()
})
