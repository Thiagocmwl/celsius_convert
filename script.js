function conveterF(c) {
    let f = (c * 9 / 5) + 32

    return f.toFixed(2)
}


function converterK(c) {
    let k = c + 273.15

    return k.toFixed(2)
}


function retornarTemperatura() {
    let c = document.getElementById('c').value
    if (!(c.indexOf(',') == -1)) {
        c = c.replace(',', '.')
    }
    c = parseFloat(c)

    let f = conveterF(c).toString().replace('.', ',')
    let k = converterK(c).toString().replace('.', ',')

    if (isFinite(c)) {
        document.getElementById('f').innerHTML = 'Farehnheit: ' + f + ' °F'
        document.getElementById('k').innerHTML = 'Kelvin: ' + k + ' K'
    } else {
        document.getElementById('f').innerHTML = 'Farehnheit:'
        document.getElementById('k').innerHTML = 'Kelvin:'
    }
    

    window.requestAnimationFrame(retornarTemperatura)
}


retornarTemperatura()