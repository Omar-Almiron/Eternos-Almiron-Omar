function ValidacionUsuario(){
    let intentosUsuario = 0
    const maxIntentosUsuario = 3
    for(intentosUsuario = 0; intentosUsuario < maxIntentosUsuario;intentosUsuario++){
        let ingresoUsuario = prompt("Ingresa nombre de usuario");
        let usuario = "azmodan";
        if(ingresoUsuario==usuario){
            alert("Usuario correcto");{
                break;
            }
        }else{
            alert("usuario incorrecto")
        }
    }
}
ValidacionUsuario();

function ValidacionContraseña(){
    let intentosContraseña = 0
    const maxIntentosContraseña = 3
    for(intentosContraseña = 0; intentosContraseña < maxIntentosContraseña;intentosContraseña++){
        let ingrasoContraseña = Number(prompt("ingresa la contraseña"))
        let contraceña = "eternos"
        if(ingrasoContraseña==contraceña){
            alert("contraseña correcta");{
                break;
            }
        }else{
            alert("Contraseña incorrecta")
        }
    }
}
ValidacionContraseña();