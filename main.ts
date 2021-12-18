bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Confused)
    kitronik_servo_lite.stop()
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        kitronik_servo_lite.forward()
        basic.showIcon(IconNames.Pitchfork)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        kitronik_servo_lite.stop()
        basic.clearScreen()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        kitronik_servo_lite.backward()
        basic.showIcon(IconNames.Sword)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        kitronik_servo_lite.stop()
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
basic.forever(function () {
	
})
