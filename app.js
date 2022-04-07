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
//pregunta 10
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
//Pregunta 11
let Users=[{cuenta:'erick'},{contraceña:'erick'}];
function validar(){
    setTimeout(function(){
        Formulario.Rboton.disabled = false;
        Formulario.Rboton.value = "Enviar";
    },1000);
}
function confirmEnviar() {
    Formulario.Rboton.disabled = true; 
    Formulario.Rboton.value = "Enviando...";
    var nombre=document.getElementById("nombre").value;
    var cuenta=document.getElementById("account").value;
    var contraceña=document.getElementById("contraceña").value;
    validar();
    return false;
  }
  Formulario.Rboton.addEventListener("click", function(){ 
      return confirmEnviar();
  }, false);
//pregunta 12
function Mreloj(){
    var actual=new Date();
    var hora=actual.getHours();
    var min=actual.getMinutes();
    var sec=actual.getSeconds();
    var salida= hora + " : "+min+" : "+sec;
    document.Freloj.reloj.value=salida;
    setTimeout("Mreloj()",1000);
}
//pregunta 13
function Cfecha(){
    var fecha=document.getElementById("fecha").value;
    var años="";
    var actual=new Date();
    var añoA=actual.getFullYear();
    var añoT=0;
    for(var i=0;i<4;i++){
        años = años.concat(fecha.charAt(i));
    }
    añoT=añoA-parseInt(años);
    if(añoT==1){
        alert("Paso: "+añoT+" año");
    }
    else{
        alert("Pasaron: "+añoT+" años");
    }
}
//pregunta 14
function Consonante(){
    var text=document.getElementById("Palab").value;
    const count1 = text.match(/[aeiou]/gi).length;
    const count2=text.match(/[bcdfghjklmnpqrstvxyz]/gi).length;
    alert(text+" tiene "+count1+" vocales y "+count2+" consonantes");
    pregunta14.reset();
}
//pregunta 15
let Nuser=["edson","erick","carlos","juan","marco"];
function Vnombre(){
    var nombre=document.getElementById("nombreE").value;
    for(var i=0;i<Nuser.length;i++){
        if(nombre==Nuser[i]){
            alert("Verdadero");
            pregunta15.reset();
            return;
        }
    }
    alert("falso");
    pregunta15.reset();
}
//pregunta 16
let arreglo=[];
var tam=0;
function Earreglo(){
    arreglo[tam]=document.getElementById("Arreglo").value;
    tam++;
    pregunta16.reset();
}
function Oarreglo(){
    for(var i=0;i<arreglo.length;i++){
        var count=0;
        for(var j=0;j<arreglo.length;j++){
            if(arreglo[i]==arreglo[j]){
                count++;
                if(count>1){
                    arreglo.splice(j,1);
                }
            }
        }
    }
    var sali="";
    for(var i=0;i<arreglo.length;i++){
            sali = sali +" "+ arreglo[i];
    }
    document.pregunta16.salidaA.value=sali;
}
//pregunta 17
let arreglo1=[];
var tama=0;
function Earreglo2(){
    arreglo1[tama]=document.getElementById("Arreglo2").value;
    tama++;
    pregunta17.reset();
}
function Oarreglo2(){
    var pares=[];
    var impares=[];
    var posicion1=0;
    var posicion2=0;
    for(var i=0;i<arreglo1.length;i++){
        if(arreglo1[i]%2==0){
            pares[posicion1]=arreglo1[i];
            posicion1++;
        }else{
            impares[posicion2]=arreglo1[i];
            posicion2++;
        }
    }
    var sali1="";
    var sali2="";
    for(var i=0;i<pares.length;i++){
        sali1=sali1+" "+pares[i];
    }
    for(var i=0;i<impares.length;i++){
        sali2=sali2+" "+impares[i];
    }
    document.pregunta17.salidaA1.value=sali1;
    document.pregunta17.salidaA3.value=sali2;
}
//pregunta 18
function listGifts(letter) {
    const arrCarta = letter.split(" ");
    return arrCarta.filter((regalo) => {
      let value = regalo.startsWith("_")
      if (value !== true && regalo !=="") return regalo !== value
    })
    .reduce((contador, regalo) => {
      contador[regalo] = (contador[regalo] || 0) + 1;
      return contador
    }, {});
}
function regalos(){
    const entrada=document.getElementById("regaloA").value;
    const regalo=listGifts(entrada);
    console.log(regalo);
    pregunta18.reset();
}
//pregunta 19
function iterate(obj) {
    let res = [];
    for (let property in obj) {
      const child = obj[property];
      if (typeof child === 'object') {
        res = [...res, ...iterate(child)]
      }
      res.push(child);
    }
    return res;
}
  
function contains(store, product) {
    return iterate(store).some((item) => item === product)
}
const almacen = {
        'estanteria1': {
        'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
        }
    },
        'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta'
        }
    }
}
const otroAlmacen = {
    'baul': {
    'fondo': {
    'objeto': 'cd-rom',
    'otro-objeto': 'disquette',
    'otra-cosa': 'mando'
        }
    }
}
function Resolv(){
    document.pregunta19.regalos1.value=contains(almacen, 'camiseta');
    document.pregunta19.regalos2.value=contains(otroAlmacen, 'gameboy');
    console.log(contains(almacen, 'camiseta'));
    console.log(contains(otroAlmacen, 'gameboy'));
}
//pregunta 20
function missingReindeer(ids) {
    let salida;
    const aux = [...Array(ids.length).keys()];
    const res = ids.sort((a, b) => a - b);
    (JSON.stringify(aux) === JSON.stringify(res))
      ?
        salida = res.at(-1) + 1
      :
      (
        res.forEach((_, index, arr) => {
          if (arr.indexOf(index) === -1) {
            salida = index;
          }
        })
    )
    return salida;
}
function Resol(){
    document.pregunta20.renos1.value=missingReindeer([0, 2, 3]);
    document.pregunta20.renos2.value=missingReindeer([5, 6, 1, 2, 3, 7, 0])
    document.pregunta20.renos3.value=missingReindeer([0,1])
    document.pregunta20.renos4.value=missingReindeer([3,0,1])
    document.pregunta20.renos5.value=missingReindeer([9,2,3,5,6,4,7,0,1])
    document.pregunta20.renos6.value=missingReindeer([0])
    console.log(missingReindeer([0, 2, 3]))
    console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0]))
    console.log(missingReindeer([0,1]))
    console.log(missingReindeer([3,0,1]))
    console.log(missingReindeer([9,2,3,5,6,4,7,0,1]))
    console.log(missingReindeer([0]))
    
}
  