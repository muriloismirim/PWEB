let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));


if (isNaN(num1) || isNaN(num2)) {
    alert("Erro: Certifique-se de digitar apenas números.");
} else {
    
    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let produto = num1 * num2;
    let divisao = num2 !== 0 ? num1 / num2 : "Indefinido (divisão por zero)";
    let resto = num2 !== 0 ? num1 % num2 : "Indefinido (divisão por zero)";

    
    alert(
        `Resultados:\n` +
        `Soma: ${soma}\n` +
        `Subtração: ${subtracao}\n` +
        `Produto: ${produto}\n` +
        `Divisão: ${divisao}\n` +
        `Resto da divisão: ${resto}`
    );

    
    let refazer = confirm("Deseja calcular novamente?");
    if (refazer) {
        location.reload(); 
    }
}