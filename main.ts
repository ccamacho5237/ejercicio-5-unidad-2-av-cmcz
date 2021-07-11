input.onButtonPressed(Button.A, function () {
    aumentar_o_disminuir(variable_a_configurar, -1)
})
function aumentar_o_disminuir (texto: string, núm: number) {
    if (texto == "Y") {
        coordenada_Y += núm
        basic.showNumber(coordenada_Y)
        basic.pause(2000)
        movimientos += 1
    } else {
        coordenada_X += núm
        basic.showNumber(coordenada_X)
        basic.pause(2000)
        movimientos += 1
    }
}
input.onGesture(Gesture.Shake, function () {
    if (vuelos < 5) {
        if (vuelos < 9) {
            if (!(validar_coordenadas())) {
                basic.showIcon(IconNames.No)
            }
        } else {
            basic.showString("+9 mov.")
        }
    } else {
        basic.showString("V. completos")
        basic.pause(2000)
    }
    movimientos = 0
    coordenada_X = 0
    coordenada_Y = 0
})
function validar_coordenadas () {
    if (coordenada_X >= 0 && coordenada_X <= 4 && (coordenada_Y >= 0 && coordenada_Y <= 4)) {
        vuelos += 1
        basic.showString("V:" + vuelos)
        coordenadas = game.createSprite(coordenada_X, coordenada_Y)
        coordenada_X = 0
        coordenada_Y = 0
        return true
    } else {
        basic.showString("Hello!")
        movimientos = 0
        movimientos = 0
        return false
    }
}
input.onButtonPressed(Button.AB, function () {
    if (variable_a_configurar == "X") {
        variable_a_configurar = "Y"
    } else {
        variable_a_configurar = "X"
    }
    basic.showString(variable_a_configurar)
})
input.onButtonPressed(Button.B, function () {
    aumentar_o_disminuir(variable_a_configurar, 1)
})
let coordenadas: game.LedSprite = null
let vuelos = 0
let movimientos = 0
let coordenada_Y = 0
let coordenada_X = 0
let variable_a_configurar = ""
variable_a_configurar = "Y"
coordenada_X = 0
coordenada_Y = 0
