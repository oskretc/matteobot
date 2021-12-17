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
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        kitronik_servo_lite.stop()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        kitronik_servo_lite.backward()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        kitronik_servo_lite.stop()
    } else {
    	
    }
})
basic.forever(function () {
	
})
