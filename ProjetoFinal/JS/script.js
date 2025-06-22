const API_KEY = "cf5e7b6b231b204ab20a54638b3c1e2a";
let filmes = [];
let idAtual = 0;

function salvarNoLocalStorage() {
  localStorage.setItem("cineList", JSON.stringify(filmes));
}

function carregarDoLocalStorage() {
  const dados = localStorage.getItem("cineList");
  if (dados) {
    filmes = JSON.parse(dados);
    idAtual = filmes.reduce((max, f) => f.id > max ? f.id : max, 0);
  }
}

function renderizarLista(filtrar = "") {
  const lista = document.getElementById("lista-filmes");
  lista.innerHTML = "";

  const filmesFiltrados = filmes.filter(f => f.titulo.toLowerCase().includes(filtrar.toLowerCase()));

  if (filmesFiltrados.length === 0) {
    lista.innerHTML = "<p>Nenhum filme encontrado.</p>";
    return;
  }

  filmesFiltrados.forEach(filme => {
    const div = document.createElement("div");
    div.className = "filme-card";
    div.innerHTML = `
  <img src="${filme.poster ? 'https://image.tmdb.org/t/p/w200' + filme.poster : 'https://via.placeholder.com/100x150?text=Sem+Imagem'}" alt="${filme.titulo}" class="poster">
  <div class="info-filme">
    <h2>${filme.titulo}</h2>
    <p><strong>Diretor:</strong> ${filme.diretor || "N/A"} | <strong>Ano:</strong> ${filme.ano || "N/A"} | <strong>Gênero:</strong> ${filme.genero || "N/A"}</p>
    <p><strong>Duração:</strong> ${filme.duracao || "N/A"} min | <strong>Classificação:</strong> ${filme.classificacao || "N/A"}</p>
    <p><strong>Elenco:</strong> ${filme.elenco || "N/A"}</p>
    <p><strong>Nota:</strong> ${filme.nota || 0}/5</p>
    <button onclick="verDetalhes(${filme.id})" class="btn secundario">Detalhes</button>
    <button onclick="editarFilme(${filme.id})" class="btn secundario">Editar</button>
    <button onclick="excluirFilme(${filme.id})" class="btn secundario">Excluir</button>
  </div>
`;
    lista.appendChild(div);
  });
}

function abrirFormulario() {
  document.getElementById("form-filme").classList.remove("oculto");
  document.getElementById("form-titulo").textContent = "Adicionar Filme";
  document.querySelector("form").reset();
  document.getElementById("idFilme").value = "";
}

function fecharFormulario() {
  document.getElementById("form-filme").classList.add("oculto");
}

function salvarFilme(event) {
  event.preventDefault();
  const id = document.getElementById("idFilme").value;
  const poster = document.getElementById("form-filme").dataset.poster || "";

  const novoFilme = {
    id: id ? Number(id) : ++idAtual,
    titulo: document.getElementById("titulo").value,
    diretor: document.getElementById("diretor").value,
    ano: document.getElementById("ano").value,
    genero: document.getElementById("genero").value,
    duracao: document.getElementById("duracao").value,
    elenco: document.getElementById("elenco").value,
    classificacao: document.getElementById("classificacao").value,
    sinopse: document.getElementById("sinopse").value,
    nota: document.getElementById("nota").value,
    dataAdicao: document.getElementById("dataAdicao").value,
    poster: poster
  };

  if (id) {
    const idx = filmes.findIndex(f => f.id === Number(id));
    filmes[idx] = novoFilme;
  } else {
    filmes.push(novoFilme);
  }

  salvarNoLocalStorage();
  fecharFormulario();
  renderizarLista();
}

function editarFilme(id) {
  const filme = filmes.find(f => f.id === id);
  document.getElementById("form-titulo").textContent = "Editar Filme";
  document.getElementById("form-filme").classList.remove("oculto");

  for (let campo in filme) {
    if (document.getElementById(campo)) {
      document.getElementById(campo).value = filme[campo];
    }
  }
}

function excluirFilme(id) {
  if (confirm("Deseja realmente excluir este filme?")) {
    filmes = filmes.filter(f => f.id !== id);
    salvarNoLocalStorage();
    renderizarLista();
  }
}

document.getElementById("pesquisa").addEventListener("input", e => {
  renderizarLista(e.target.value);
  buscarFilmesNaTMDB(e.target.value);
});

async function buscarFilmesNaTMDB(query) {
  if (query.length < 3) return;

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}`;

  const resposta = await fetch(url);
  const dados = await resposta.json();

  if (dados.results && dados.results.length > 0) {
    const filme = dados.results[0];
    preencherFormularioComTMDB(filme);
  }
}

async function preencherFormularioComTMDB(filme) {
  abrirFormulario();
  document.getElementById("titulo").value = filme.title;
  document.getElementById("ano").value = filme.release_date ? filme.release_date.slice(0, 4) : "";
  document.getElementById("sinopse").value = filme.overview;
  document.getElementById("nota").value = (filme.vote_average / 2).toFixed(1);
  
  document.getElementById("form-filme").dataset.poster = filme.poster_path;

  const detalhes = await fetch(`https://api.themoviedb.org/3/movie/${filme.id}?api_key=${API_KEY}&language=pt-BR`)
    .then(res => res.json());

  if (detalhes.runtime) {
    document.getElementById("duracao").value = detalhes.runtime;
  }

  if (detalhes.genres && detalhes.genres.length > 0) {
    document.getElementById("genero").value = detalhes.genres.map(g => g.name).join(", ");
  }

  const creditos = await fetch(`https://api.themoviedb.org/3/movie/${filme.id}/credits?api_key=${API_KEY}&language=pt-BR`)
    .then(res => res.json());

  const atores = creditos.cast.slice(0, 3).map(a => a.name).join(", ");
  const diretor = creditos.crew.find(p => p.job === "Director");

  document.getElementById("elenco").value = atores;
  document.getElementById("diretor").value = diretor ? diretor.name : "";
}

window.onload = () => {
  carregarDoLocalStorage();
  renderizarLista();
};

function verDetalhes(id) {
  localStorage.setItem("filmeSelecionadoId", id);
  window.location.href = "detalhes.html";
}