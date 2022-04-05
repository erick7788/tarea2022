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
        if(alea==alea2){
            alea=Math.floor(Math.random()*(99-1))+1;
        }else{
            if(alea==alea3){
                alea=Math.floor(Math.random()*(99-1))+1;
            }
            else{
                if(alea2==alea3){
                    alea2=Math.floor(Math.random()*(99-1))+1;
                }
            }
        }
        alert(alea+" "+alea2+" "+alea3);
}
//pregunta 5

function text(){
    var text=document.getElementById("texto").value;
    const count = text.match(/[aeiou]/gi).length;

    alert(count);
    pregunta5.reset();
}
//pregunta 6
function caden(){
    var cad=document.getElementById("cade").value;
    var tam=cad.length;
    var salida='';
    var veri=0;
    for(var i=0;i<tam;i++){
        if(cad.charAt(i)==")"){
            veri=0;
        }
        if(veri==1){
            salida = salida.concat(cad.charAt(i));
        }
        if(cad.charAt(i)=='('){
            veri=1;
        }
    }
    alert(salida);
    pregunta6.reset();
}
//pregunta7
function rever(){
    var cad=document.getElementById("reversa").value;
    var tam=cad.length;
    var salida="";
    for(var i=tam-1;i>=0;i--){
        salida = salida.concat(cad.charAt(i));
    }
    alert(salida);
    pregunta7.reset();
}
//pregunta 8
function fibbo(){
    var fibon = [];
    fibon[0] = 0;
    fibon[1] = 1;
    for (var i = 2; i < 12; i++) {
        fibon[i] = fibon[i - 2] + fibon[i - 1];
    }
    console.log(fibon);
}
//pregunta 9
function piedrapapel(){
    let eleccion=document.getElementById('eleccion');
    let select=eleccion.value;
    let bot=["piedra","papel","tijera"];
    let alea=Math.floor(Math.random()*(3-0))+0;
    if(select=="piedra"&&bot[alea]=="tijera"){
        alert("Elegiste "+select+" El bot "+ bot[alea]+" YOU WIN");
    }else{
        if(select=="papel"&&bot[alea]=="piedra"){
            alert("Elegiste "+select+" El bot "+ bot[alea]+" YOU WIN");
        }else{
            if(select=="tijera"&&bot[alea]=="papel"){
                alert("Elegiste "+select+" El bot "+ bot[alea]+" YOU WIN");
            }else{
                if(select=="tijera"&&bot[alea]=="piedra"){
                    alert("Elegiste "+select+" El bot "+ bot[alea]+" YOU LOSE");
                }else{
                    if(select=="papel"&&bot[alea]=="tijera"){
                        alert("Elegiste "+select+" El bot "+ bot[alea]+" YOU LOSE");
                    }else{
                        if(select=="tijera"&&bot[alea]=="piedra"){
                            alert("Elegiste "+select+" El bot "+ bot[alea]+" YOU LOSE");
                        }else{
                            alert("Elegiste "+select+" El bot "+ bot[alea]+" YOU LOSE");
                        }
                    }
                }
            }
        }
    }
}
function precioIva(){
    var precio=document.getElementById("precio").value;
    var precioI=parseInt(precio);
    var iva=document.getElementById("iva").value;
    var ivaP=iva/100;
    var ivaA=ivaP*precio;
    var precioTotal=precioI+ivaA;
    alert("El pago Total debera ser: "+precioTotal);
    pregunta10.reset();
}