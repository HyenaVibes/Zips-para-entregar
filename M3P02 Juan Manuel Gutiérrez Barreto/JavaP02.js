let radio = parseFloat(prompt("Radio:"))
let VolumenEsfera = (4/3*Math.PI*radio*radio*radio)
let resultado = VolumenEsfera
document.write("El volumen de la Esfera se calcula con la formula: (4/3 * PI * radio * radio * radio)"+"Una esfera con el radio" + radio + "tiene un volumen de" + resultado + "cm cubicos")
