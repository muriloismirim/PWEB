let alunos = [];
const maxAlunos = 10;

document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const ra = document.getElementById('ra').value.trim();
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);

  // Validações
  if (nome.split(" ").length < 2) {
    alert("O nome completo deve conter pelo menos um nome e um sobrenome.");
    return;
  }

  if (!/^\d{5}$/.test(ra)) {
    alert("O RA deve conter exatamente 5 dígitos numéricos.");
    return;
  }

  if (![nota1, nota2, nota3].every(n => n >= 0 && n <= 10)) {
    alert("Todas as notas devem estar entre 0 e 10.");
    return;
  }

  const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
  alunos.push({ nome, ra, media });

  mostrarAlunos();

  // Limpar formulário
  document.getElementById('formulario').reset();

  // Se atingiu o limite, desabilita
  if (alunos.length >= maxAlunos) {
    document.getElementById('formulario').style.display = 'none';
    mostrarMediaGeral();
  }
});

function mostrarAlunos() {
  const lista = document.getElementById('lista-alunos');
  lista.innerHTML = "<h3>Alunos Registrados:</h3>";
  alunos.forEach(aluno => {
    lista.innerHTML += `<p><strong>${aluno.nome}</strong> | RA: ${aluno.ra} | Média: ${aluno.media}</p>`;
  });
}

function mostrarMediaGeral() {
  const mediaGeral = alunos.reduce((soma, aluno) => soma + parseFloat(aluno.media), 0) / alunos.length;
  document.getElementById('media-geral').innerHTML = `<h3>Média Geral da Turma: ${mediaGeral.toFixed(2)}</h3>`;
}
