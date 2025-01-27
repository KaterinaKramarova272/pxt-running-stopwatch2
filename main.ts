
radio.setGroup(69)
let ready = true

input.onButtonPressed(Button.A, function () {
    Sensors.SetLightLevel()
}
)

Sensors.OnLightDrop(function () {
    if (ready === true)
        radio.sendNumber(0)
        ready = false
})

radio.onReceivedValue(function(name: string, value: number) {
    if (name === "cas") 
        basic.showNumber (value)
})