//Crear boton que cambie el color de fondo
var boton = document.createElement("input");
boton.setAttribute("onclick","cambiarFondo();")
boton.setAttribute("value","Tema Oscuro/Claro");
boton.setAttribute("type","submit");
document.querySelector('div').appendChild(boton);
function cambiarFondo(){
    if(document.querySelector('div').style.background=="rgb(254, 255, 239)"){
        document.querySelector('div').style.color="rgb(75, 247, 230)"; 
        document.querySelector('div').style.background="rgb(9, 9, 67)";
    }else{
        document.querySelector('div').style.color="black";
        document.querySelector('div').style.background="rgb(254, 255, 239)"; 
    }
}