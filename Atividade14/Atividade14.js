function transformarTexto() {
    const texto = document.getElementById("campoTexto").value;
    const radioMaiuscula = document.getElementById("maiuscula").checked;
    const radioMinuscula = document.getElementById("minuscula").checked;

    if (radioMaiuscula) {
        document.getElementById("campoTexto").value = texto.toUpperCase();
    } else if (radioMinuscula) {
        document.getElementById("campoTexto").value = texto.toLowerCase();
    }
}
