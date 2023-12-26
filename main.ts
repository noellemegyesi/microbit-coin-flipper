input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Chessboard)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
