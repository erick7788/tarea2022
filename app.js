//pregunta 1
function VerificarEdad(){
    var EdadD=document.getElementById("Edad").value;
    if(EdadD>18){
        alert("Ya puede conducir");
    }else{
        alert("Aun no puede conducir");
    }
    pregunta1.reset();
}
//pregunta 2
var Sum=0;
function SumarNum(){
    var numero=document.getElementById("Numeros").value;
    var b=Number(numero);
    if(b){
        Sum= Sum + b;

    }else{
        alert("Ese no es un numero");
    }
    pregunta2.reset();
}
function Cancelar(){
    alert("el valor total es "+ Sum);
    Sum=0;
}
//pregunta 3
function Person(){
    let Personas=[
        {nombre:document.getElementById("nombre1").value, 
        edad:document.getElementById("edad1").value},
        {nombre:document.getElementById("nombre2").value,
        edad:document.getElementById("edad2").value},
        {nombre:document.getElementById("nombre3").value,
        edad:document.getElementById("edad3").value},
    ];
    var mayor=0;
    var nombre="";
    for(var i=0; i<3; i++){
        if(mayor<Personas[i].edad){
            mayor=Personas[i].edad;
            nombre=Personas[i].nombre;
        }
    }
    alert("el mayor es "+nombre+" con "+mayor+" años");
}
//pregunta 4
function aleat(){
        var alea= Math.floor(Math.random()*(99-1))+1;
        var alea2= Math.floor(Math.random()*(99-1))+1;
        var alea3= Math.floor(Math.random()*(99-1))+1;
        alert(alea+" "+alea2+" "+alea3);
}
