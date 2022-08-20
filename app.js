let i = 2;
let numero = prompt("Elegir un número entero");


/*  CODIGO FALLIDO
for (i; i <= numero / 2; i++) {
    if (numero % i == 0) {
        alert("EL número no es primo");
        break;
    } else if (j > numero / 2 && numero % i != 0) {
        j++;
    } else {
        alert("El número es primo");
        break;
    }
}
*/

// ejemplo de numeros primos grandes = 104677 104681 104683 104693 104701 104707 104711 104717 104723 104729
if (numero % 1 == 0) {
    while (numero % i != 0 && i <= numero / 2) {
        i++;
    }
    if (i > numero / 2 && numero != 1) {
        alert("El numero es primo");
    }else{
        alert("El número no es primo");
    }
} else {
    alert("El numero ingresado no es entero");
}


