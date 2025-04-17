function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos";
        return;
    }

    const imc = peso / (altura * altura);
    const mensagem = classificarIMC(imc);

    document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)} - ${mensagem}`;
}

function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    else if (imc < 24.9) return "Peso normal";
    else if (imc < 29.9) return "Sobrepeso";
    else if (imc < 34.9) return "Obesidade grau I";
    else if (imc < 39.9) return "Obesidade grau II";
    else return "Obesidade grau III (mórbida)";
  }