function calcularAreaTriangulo(base, altura) {
    if (typeof base !== 'number' || typeof altura !== 'number') {
      return 'La base y la altura deben ser números.';
    }
  
    const area = (base * altura) / 2;
    return area;
  }
  
  // Ejemplo de uso
  const base = 3;
  const altura = 98;
  const areaTriangulo = calcularAreaTriangulo(base, altura);
  console.log(`El área del triángulo es: ${areaTriangulo}`);

  

// Función para leer dos números por teclado y sumarlos
function sumarDosNumeros(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
      return 'Debes ingresar dos números.';
    }
  
    const suma = (numero1 + numero2);
    return suma;
  }
  
  // Ejemplo de uso
  const numero1 = 9;
  const numero2 = 19;
  const resultado = sumarDosNumeros(numero1,numero2);
  console.log(`La suma de los dos números es: ${resultado}`);

  function cuadradoDeNumero(numeroa) {
    if (typeof numeroa !== 'number') {
      return 'Debes ingresar un números.';
    }
  
    const cuadrado = (numeroa*numeroa);
    return cuadrado;
  }
  
  // Ejemplo de uso
  const numeroa = 7;
  const resultados = cuadradoDeNumero(numeroa);
  console.log(`El cuadrado del número es: ${resultados}`);

  // Función para convertir euros a dólares
function convertirEurosADolares(euros) {
    if (typeof euros !== 'number') {
      return 'Debes ingresar un número.';
    }
  
    const tasaDeCambio = 1.09; // 1 euro equivale a 1.18 dólares
    const dolares = euros * tasaDeCambio;
    return dolares;
  }
  
  // Ejemplo de uso
  const euros = 20;
  const dolares = convertirEurosADolares(euros);
  console.log(`${euros} euros equivalen a ${dolares} dólares.`);

  // Función para calcular el área y el perímetro de un cuadrado
function calcularAreaYPerimetroCuadrado(lado) {

    if (typeof lado !== 'number') {
      return 'Debes ingresar un número.';
    }
  
    const area = lado*lado;
    const perimetro = 4 + lado;
  
    return {
      area,
      perimetro
    };
  }
  
  // Ejemplo de uso
  const lado = 2;
  const resultado2 = calcularAreaYPerimetroCuadrado(lado);
  console.log(`El área del cuadrado es: ${resultado2.area}`);
  console.log(`El perímetro del cuadrado es: ${resultado2.perimetro}`);