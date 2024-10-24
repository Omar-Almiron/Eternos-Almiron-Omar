let pregunta1 = prompt("Nombre de usuario"); {
    alert (" bienvenido " + pregunta1);
}

let pregunta2 = Number(prompt("Edad"));

let pregunta3 = prompt("Ingrese un e-mail");

let NumeroRegion = prompt("Elige numero de region: 1 Europa, 2 Asia, 3 EE.UU, 4 Latam");

    if (NumeroRegion == "1") {
        alert ("Region: Europa")
    } else if (NumeroRegion == "2") {
        alert ("Region: Asia")
    } else if (NumeroRegion == "3") {
        alert ("Region: EE.UU")
    } else if (NumeroRegion == "4") {
        alert ("Region: Latam")
    } else 
        alert ("Error")



let respuesta = " Nombre de usuario: " + pregunta1 + " Edad: " + pregunta2 + " E-mail: " + pregunta3 + " Region: " + NumeroRegion
 console.log(respuesta)