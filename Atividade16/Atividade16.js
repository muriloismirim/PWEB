const cursosInfo = {
    ads: `Análise e Desenvolvimento de Sistemas\n
  Carga Horária: 2.800 hrs\n
  Duração: 6 ou 8 semestres\n
  Período: Diurno ou Noturno\n
  Tipo de Curso: Curso Superior de Tecnologia - Presencial\n
  Eixo Tecnológico: Informação e Comunicação`,
  
    eletronica: `Eletrônica Automotiva\n
  Carga Horária: 2.800 hrs\n
  Duração: 6 semestres\n
  Período: Noturno\n
  Tipo de Curso: Curso Superior de Tecnologia - Presencial\n
  Eixo Tecnológico: Controle e Processos Industriais`,
  
    fabrica: `Fabricação Mecânica\n
  Carga Horária: 2.800 hrs\n
  Duração: 6 semestres\n
  Período: Diurno ou Noturno\n
  Tipo de Curso: Curso Superior de Tecnologia - Presencial\n
  Eixo Tecnológico: Produção Industrial`,
  
    qualidade: `Gestão de Qualidade\n
  Carga Horária: 2.800 hrs\n
  Duração: 6 semestres\n
  Período: Diurno\n
  Tipo de Curso: Curso Superior de Tecnologia - Presencial\n
  Eixo Tecnológico: Gestão e Negócios`,
  
    logistica: `Logística\n
  Carga Horária: 2.800 hrs\n
  Duração: 6 semestres\n
  Período: Tarde\n
  Tipo de Curso: Curso Superior de Tecnologia - Presencial\n
  Eixo Tecnológico: Gestão e Negócios`,
  
    manufatura: `Manufatura Avançada\n
  Carga Horária: 2.800 hrs\n
  Duração: 6 semestres\n
  Período: Diurno\n
  Tipo de Curso: Curso Superior de Tecnologia - Presencial\n
  Eixo Tecnológico: Controle e Processos Industriais`,
  
    aeronaves: `Manutenção de Aeronaves\n
  Carga Horária: 2.800 hrs\n
  Duração: 6 semestres\n
  Período: Diurno\n
  Tipo de Curso: Curso Superior de Tecnologia - Presencial\n
  Eixo Tecnológico: Controle e Processos Industriais`,
  
    polimeros: `Polímeros\n
  Carga Horária: 2.800 hrs\n
  Duração: 6 semestres\n
  Período: Noturno com aulas aos sábados de manhã\n
  Tipo de Curso: Curso Superior de Tecnologia - Presencial\n
  Eixo Tecnológico: Produção Industrial`,
  
    metalurgia: `Processos Metalúrgicos\n
  Carga Horária: 2.800 hrs\n
  Duração: 6 semestres\n
  Período: 1º ao 4º diurno e 5º e 6º noturno\n
  Tipo de Curso: Curso Superior de Tecnologia - Presencial\n
  Eixo Tecnológico: Controle e Processos Industriais`,
  
    projetos: `Projetos Mecânicos\n
  Carga Horária: 2.800 hrs\n
  Duração: 6 semestres\n
  Período: Diurno ou Noturno\n
  Tipo de Curso: Curso Superior de Tecnologia - Presencial\n
  Eixo Tecnológico: Produção Industrial`,
  
    biomedicos: `Sistemas Biomédicos\n
  Carga Horária: 2.800 hrs\n
  Duração: 6 semestres\n
  Período: Matutino\n
  Tipo de Curso: Curso Superior de Tecnologia - Presencial\n
  Eixo Tecnológico: Ambiente e Saúde`
  };
  
  function abrirCurso() {
    const select = document.getElementById("cursos");
    const valor = select.value;
  
    if (!valor) return;
  
    const confirmacao = confirm("Deseja abrir as informações sobre o curso selecionado?");
    if (confirmacao) {
      const texto = cursosInfo[valor].replace(/\n/g, "<br>");
      const novaJanela = window.open("", "", "width=600,height=300");
      novaJanela.document.write(`<html><head><title>Informações do Curso</title></head><body><p>${texto}</p></body></html>`);
    }
  }
  