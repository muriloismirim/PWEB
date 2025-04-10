function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
  }
  
function ordenarNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
  }
  
function ehPalindromo(str) {
    const texto = str.toUpperCase().replace(/[^A-Z0-9]/g, '');
    const invertido = texto.split('').reverse().join('');
    return texto === invertido;
  }
  
function tipoTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
      if (a === b && b === c) return "Equilátero";
      else if (a === b || a === c || b === c) return "Isósceles";
      else return "Escaleno";
    } else {
      return "Não forma um triângulo";
    }
  }
  
  // Funções para pegar valores dos inputs e mostrar os resultados
  
function executarMaiorNumero() {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    const c = parseFloat(document.getElementById("num3").value);
    const resultado = maiorNumero(a, b, c);
    document.getElementById("saida1").innerText = `Maior número: ${resultado}`;
  }
  
function executarOrdemCrescente() {
    const a = parseFloat(document.getElementById("ord1").value);
    const b = parseFloat(document.getElementById("ord2").value);
    const c = parseFloat(document.getElementById("ord3").value);
    const ordenado = ordenarNumeros(a, b, c);
    document.getElementById("saida2").innerText = `Ordem crescente: ${ordenado.join(', ')}`;
  }
  
function executarPalindromo() {
    const texto = document.getElementById("texto").value;
    const resultado = ehPalindromo(texto);
    document.getElementById("saida3").innerText = resultado ? "É palíndromo!" : "Não é palíndromo.";
  }
  
function executarTriangulo() {
    const a = parseFloat(document.getElementById("lado1").value);
    const b = parseFloat(document.getElementById("lado2").value);
    const c = parseFloat(document.getElementById("lado3").value);
    const resultado = tipoTriangulo(a, b, c);
    document.getElementById("saida4").innerText = `Resultado: ${resultado}`;
  }
  