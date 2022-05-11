// Se debe crear una calculadora para llegar al perimetro y area de las figuras geometricas.

//Cuadrados

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado(12);

function areaCuadrado (lado) {
    return lado * lado;
} 


//Triangulos
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


//Circulos 

function diametroCirculo(radio) {
    return radio * 2
}
const PI = Math.PI;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo (radio);
    return diametro * PI;
}
function areaCirculo (radio){
    return (radio * radio) * PI;
}

//Interaccion con HTML

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById('InputTriangulo1');
    const lado2 = document.getElementById('InputTriangulo2');
    const base = document.getElementById('InputTriangulo3');
    const valueL1 = parseInt(lado1.value);
    const valueL2 = parseInt(lado2.value);
    const valueB = parseInt(base.value);

    const perimetro = perimetroTriangulo(valueL1, valueL2, valueB);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const altura= document.getElementById("InputTriangulo1");
    const base = document.getElementById("InputTriangulo3");
    const valueAltura = parseInt(base.value);
    const valueBase = parseInt(altura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function calcularDiametroCirculo() {
    const radio = document.getElementById('InputCirculo');
    const valueRadio = parseInt(radio.value);

    const diametro = diametroCirculo(valueRadio);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById('InputCirculo');
    const valueRadio = parseInt(radio.value);

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById('InputCirculo');
    const valueRadio = parseInt(radio.value);

    const area = areaCirculo(valueRadio);
    alert(area);
}
