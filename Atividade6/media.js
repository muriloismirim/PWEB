let nome = prompt("Digite o nome do aluno:");


let nota1 = parseFloat(prompt("Digite a 1ª nota:"));
let nota2 = parseFloat(prompt("Digite a 2ª nota:"));
let nota3 = parseFloat(prompt("Digite a 3ª nota:"));
let nota4 = parseFloat(prompt("Digite a 4ª nota:"));


let media = (nota1 + nota2 + nota3 + nota4) / 4;


if (isNaN(media)) {
    alert("Erro: Certifique-se de digitar apenas números nas notas.");
} else {
    
    let resultado = media >= 7 ? "Aprovado" : "Reprovado";

    alert(`Aluno: ${nome}\nMédia: ${media.toFixed(2)}\nStatus: ${resultado}`);
    
    
    let refazer = confirm("Deseja calcular a média para outro aluno?");
    if (refazer) {
        location.reload(); 
    }
}