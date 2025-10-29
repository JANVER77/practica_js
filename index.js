//1. Variable y Tipos de Datos

    // Ejercicio 1:

let nombre = "Edward";
let edad;42;
let esEstudiante = true;

    // Ejercicio 2:
let sinValor;
let valor = null;

console.log("Una variable sin indefinida se muestra: ", sinValor, "Una variable null se muestra asi ", valor);



//2. Ingreso de Datos por Teclado
const input = require("prompt-sync")();
country = input("ingresa un pais: ");

console.log("El pais que escribiste fue :", country);

    //Ejercicio 1:

    let birthYear = input("Ingrese su año de nacimiento \n");
    let currentYear = new Date().getFullYear();
    let edad2 = currentYear - birthYear
    console.log("Tienes ",edad2, "años");

    //Ejercicio 2:
    let num1 = parseInt(input("Ingrese el primer numero: "));
    let num2 = parseInt(input("Ingrese el segundo numero: "))
    console.log("La suma de ", num1 , " mas " , num2, " es ", num1 + num2);

//3. Condicional If

    // Ejercicio 1:
    let edad3 = parseInt(input("Ingrese su edad :\n"));
    if (edad3 >= 18) {
        console.log("Puedes entrar");}
    else if (0 > edad3 >= 18) {
        console.log("No puedes entrar");
    }
    else{
        console.log("No valido");
    }
    
    // Ejercicio 2:
    let num3 = parseInt(input("Ingrese un numero"));
    if (num > 0){
        console.log("Es positivo");
    }else if(num < 0){
        console.log("Es negatvio");
    }
    else{
        console.log("Es cero");
    }


//4. Bucle while

    //Ejercicio 1:
    let num4 = parseInt(input("Ingrese un numero"));
    let cont = 0;
    while (cont > num4){
        console.log(cont);
        cont++;
    }

    //Ejercicio 2:
    let pass = "1234";
    let inPass = "";
    while (inPass === pass){
        inPass = input("Ingrese su contraseña :\n");
    }

//5. Bucle for
    // Ejercicio 1:
    