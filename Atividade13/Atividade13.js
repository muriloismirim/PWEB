const janela = document.getElementById('janela');
const status = document.getElementById('status');

function abrirJanela() {
        janela.src = 'JanelaAberta.jpg'; 
        status.textContent = 'Janela Aberta';
}
   
function fecharJanela() {
        janela.src = "JanelaFechada.jpg"; 
        status.textContent = 'Janela Fechada';
}
   
function quebrarJanela() {
        janela.src = 'JanelaQuebrada.jpg'; 
        status.textContent = 'Janela Quebrada';
}

janela.addEventListener('mouseover', abrirJanela);
janela.addEventListener('mouseout', fecharJanela);
janela.addEventListener('click', quebrarJanela);