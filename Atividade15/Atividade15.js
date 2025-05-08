function validar(){
    let elementos = document.nomeform.elements;

    let nome = elementos["nome"].value.trim();
    if (nome.length < 10){
        alert("O nome deve ter pelo menos 10 caracteres.");
        return false;
    }

    let email = elementos["email"].value.trim();
    if (!email){
        alert("Digite um email válido.");
        return false;
    }

    let comentario = elementos["comentario"].value.trim();
    if (comentario.length < 20){
        alert("O comentário deve ter pelo menos 20 caracteres.");
        return false;
    }

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          selecionado = true;
          mensagem = radios[i].value === "nao"
            ? "Que bom que você voltou a visitar esta página!"
            : "Volte sempre a esta página!";
          break;
        }
    }
    
    if (!selecionado) {
        alert("Por favor, responda à pergunta da pesquisa.");
        return false;
    }
    
    alert(mensagem);
    return true;
    
}