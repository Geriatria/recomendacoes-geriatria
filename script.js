const APP_VERSION = "1.1";

const recomendacoes = {

  quedas: {
  area: "Mobilidade",
  titulo: "",
subtitulo: "Prevenção de quedas",

  secoes: [
    {
      titulo: "🏠 Segurança em casa",
      itens: [
        "Retirar tapetes soltos e obstáculos das zonas de passagem.",
        "Manter corredores, escadas e casa de banho bem iluminados.",
        "Manter os objetos de uso frequente facilmente acessíveis.",
        "Evitar fios elétricos e outros objetos nas zonas de passagem."
      ]
    },

    {
      titulo: "👟 Calçado",
      itens: [
        "Usar calçado fechado, bem ajustado ao pé e com sola antiderrapante.",
        "Evitar chinelos abertos ou calçado instável."
      ]
    },

    {
      titulo: "🛁 Casa de banho",
      itens: [
        "Utilizar barras de apoio quando necessário.",
        "Utilizar superfície antiderrapante no banho.",
        "Ter especial cuidado com o piso molhado."
      ]
    },

    {
      titulo: "🚶 Mobilidade",
      itens: [
        "Utilizar bengala, andarilho ou outro auxiliar de marcha, quando indicado.",
        "Levantar-se devagar da cama ou da cadeira.",
        "Pedir ajuda para se deslocar quando não se sentir seguro."
      ]
    },

    {
      titulo: "🚨 Contacte a equipa de saúde se",
      alerta: true,
      itens: [
        "Teve uma queda recente.",
        "Tem quedas repetidas.",
        "Sente tonturas ou desequilíbrio frequentes.",
        "Passou a ter maior dificuldade em andar ou levantar-se."
      ]
    }
  ]
},
delirium: {
  area: "Cognição e comportamento",
  titulo: "Delirium",

  descricaoTitulo: "O que é o delirium?",

  descricao:
    "O delirium é uma alteração aguda e flutuante do estado mental, que pode causar desorientação, dificuldade de atenção, alterações do comportamento ou sonolência. Surge habitualmente de forma súbita e os sintomas podem variar ao longo do dia.",

  subtitulo:
    "Como ajudar a prevenir e reconhecer o delirium",

  secoes: [
    {
      titulo: "🧭 Orientação",
      itens: [
        "Visitar a pessoa regularmente.",
        "Dizer quem é, onde está e ajudá-la a perceber o dia e a hora.",
        "Falar de forma calma, utilizando frases simples.",
        "Manter junto da pessoa objetos pessoais e familiares.",
        "Estimular atividades simples de que goste, como conversar, ouvir música ou ver fotografias."
      ]
    },

    {
      titulo: "👓 Visão e audição",
      itens: [
        "Garantir que utiliza os óculos habituais.",
        "Garantir que utiliza os aparelhos auditivos, quando necessário."
      ]
    },

    {
      titulo: "💧 Hidratação e alimentação",
      itens: [
        "Incentivar a ingestão regular de líquidos, quando indicada.",
        "Incentivar uma alimentação adequada.",
        "Evitar períodos prolongados sem comer ou beber."
      ]
    },

    {
      titulo: "🚶 Mobilidade",
      itens: [
        "Incentivar a levantar-se e a movimentar-se, de acordo com as suas capacidades.",
        "Evitar permanecer desnecessariamente muito tempo na cama.",
        "Garantir ajuda ou supervisão quando existir risco de queda."
      ]
    },

    {
      titulo: "☀️ Sono e ambiente",
      itens: [
        "Favorecer a exposição à luz natural durante o dia.",
        "Evitar sestas prolongadas durante o dia.",
        "Reduzir ruído, luz e interrupções desnecessárias durante a noite.",
        "Procurar manter os horários habituais de sono."
      ]
    },

    {
      titulo: "🦷 Cuidados gerais",
      itens: [
        "Manter as próteses dentárias habituais, quando adequado.",
        "Prevenir a obstipação.",
        "Estar atento à dificuldade ou incapacidade em urinar.",
        "Evitar bebidas com cafeína ou energéticas, sobretudo ao final do dia."
      ]
    },

    {
      titulo: "🚨 Contacte a equipa de saúde se notar uma alteração súbita",
      alerta: true,
      itens: [
        "Ficou mais confuso ou desorientado que o habitual.",
        "Está muito agitado ou, pelo contrário, anormalmente sonolento.",
        "Vê ou ouve coisas que não existem ou apresenta um comportamento muito diferente do habitual.",
        "O estado mental ou comportamento varia significativamente ao longo do dia."
      ]
    },

    {
      titulo: "✅ Até à próxima consulta...",
      checklist: true,
      itens: [
        "Não apresentou alterações súbitas do comportamento ou estado mental."
      ]
    }
  ]
},


  fragilidade: {
    area: "Mobilidade",
    titulo: "Fragilidade",
    itens: [
      "Mantenha atividade física adaptada às suas capacidades.",
      "Evite períodos prolongados sentado ou deitado durante o dia.",
      "Peça ajuda quando tiver dificuldade em realizar uma atividade com segurança."
    ]
  },

  sarcopenia: {
    area: "Mobilidade",
    titulo: "Sarcopenia",
    itens: [
      "Realize exercício de força adaptado às suas capacidades.",
      "Mantenha uma alimentação adequada, incluindo fontes de proteína.",
      "Informe a equipa de saúde se notar perda progressiva de força."
    ]
  },

  nutricao: {
    area: "Nutrição e hidratação",
    titulo: "Risco nutricional",
    itens: [
      "Faça refeições pequenas e frequentes ao longo do dia.",
      "Escolha alimentos nutritivos e adaptados às suas preferências.",
      "Informe a equipa de saúde se existir perda de peso não intencional."
    ]
  },

  "alimentacao-demencia": {
  area: "Nutrição e hidratação",
  titulo: "Alimentação na Demência",

  descricaoTitulo: "O que pode acontecer?",

  descricao:
    "Na demência podem surgir alterações que dificultam a alimentação, como esquecer as refeições, recusar alimentos, ter dificuldade em utilizar os talheres ou em mastigar e engolir.",

  subtitulo:
    "Como ajudar durante as refeições",

  secoes: [

    {
      titulo: "🍴 Organização",
      itens: [
        "Oferecer pequenas refeições várias vezes ao dia.",
        "Servir um prato de cada vez, evitando confusão visual.",
        "Respeitar os gostos e hábitos da pessoa."
      ]
    },

    {
      titulo: "🏠 Ambiente",
      itens: [
        "Reduzir distrações durante a refeição, como televisão ou ruído.",
        "Garantir uma boa iluminação.",
        "Utilizar pratos que contrastem com a mesa ou toalha.",
        "Retirar objetos que possam ser confundidos com alimentos."
      ]
    },

    {
      titulo: "🤲 Durante a refeição",
      itens: [
        "Dar tempo suficiente para comer, sem apressar ou forçar.",
        "Oferecer alimentos que possam ser comidos com as mãos, quando facilitar a alimentação.",
        "Utilizar utensílios adaptados, quando necessário.",
        "Manter a pessoa sentada direita e com apoio nas costas."
      ]
    },

    {
      titulo: "💧 Hidratação",
      itens: [
        "Oferecer líquidos regularmente ao longo do dia."
      ]
    },

    {
      titulo: "🥣 Outros cuidados",
      itens: [
        "Adaptar a apresentação e a textura dos alimentos às necessidades da pessoa.",
        "Manter uma boa higiene da boca."
      ]
    },

    {
      titulo: "🚨 Contacte a equipa de saúde se...",
      alerta: true,
      itens: [
        "Tiver tosse ou engasgamentos frequentes ao comer ou beber.",
        "Ficar frequentemente com comida na boca sem engolir.",
        "Recusar ou esquecer-se frequentemente das refeições.",
        "Apresentar dificuldade crescente em utilizar os talheres ou alimentar-se.",
        "Apresentar perda de peso ou notar que a roupa está mais larga."
      ]
    },

    {
      titulo: "✅ Até à próxima consulta...",
      checklist: true,
      itens: [
        "Teve tosse ou engasgamentos ao comer ou beber.",
        "Ficou com comida na boca sem engolir.",
        "Recusou ou esqueceu-se frequentemente das refeições.",
        "Teve maior dificuldade em alimentar-se.",
        "Notei perda de peso ou roupa mais larga."
      ]
    }

  ]
},

  hidratacao: {
    area: "Nutrição e hidratação",
    titulo: "Hidratação",
    itens: [
      "Beba líquidos regularmente ao longo do dia, mesmo sem sede.",
      "Mantenha água ou outras bebidas adequadas num local acessível.",
      "Distribua a ingestão de líquidos ao longo do dia."
    ]
  },

  obstipacao: {
  area: "Eliminação",
  titulo: "Obstipação",

    descricaoTitulo: "O que é a obstipação?",

    descricao:
      "A obstipação caracteriza-se pela dificuldade em evacuar ou pela diminuição da frequência das dejeções, podendo provocar fezes duras e secas. É frequente nas pessoas idosas e pode afetar significativamente a qualidade de vida.",

    subtitulo:
      "Como ajudar na regulação do trânsito intestinal",

    secoes: [

      {
        titulo: "💧 Hidratação",
        itens: [
          "Beber cerca de 1,5–2 litros de líquidos por dia, quando indicado.",
          "Preferir água.",
          "Evitar bebidas alcoólicas.",
          "Beber mesmo sem sede."
        ]
      },

      {
        titulo: "🚶 Exercício físico",
        itens: [
          "Caminhar cerca de 30 minutos por dia, quando indicado.",
          "Tudo conta: um passeio no quintal, no jardim ou uma ida ao café.",
          "Realizar a atividade com supervisão, quando necessário."
        ]
      },

      {
        titulo: "🥗 Alimentação",
        itens: [
          "Consumir alimentos ricos em fibra, como brócolos, couve-flor, ameixa, kiwi, pêssego, laranja e legumes.",
          "Preferir pão integral.",
          "Consumir com moderação alimentos pobres em fibra, como batatas, massas e pão branco.",
          "Preferir iogurtes probióticos naturais sem açúcar.",
          "Quando recomendado, aumentar a fibra adicionando farelo de trigo, psyllium, sementes de linhaça ou chia aos alimentos."
        ]
      },

      {
        titulo: "🕒 Hábitos intestinais",
        itens: [
          "Criar um horário regular para ir à casa de banho.",
          "Aproveitar o reflexo após o pequeno-almoço.",
          "Utilizar um banco para elevar os pés."
        ]
      },

      {
        titulo: "💊 Medicação",
        itens: [
          "Utilizar medicação SOS apenas quando indicada."
        ]
      },

      {
        titulo: "🚨 Contacte a equipa de saúde se surgir",
        alerta: true,
        itens: [
          "Sangue nas fezes.",
          "Dor abdominal intensa.",
          "Vómitos persistentes.",
          "Perda de peso inexplicada."
        ]
      },

      {
        titulo: "✅ Até à próxima consulta...",
        checklist: true,
        itens: [
          "Bebi água regularmente.",
          "Caminhei ou fiz atividade física.",
          "Comi alimentos ricos em fibra.",
          "Criei um horário regular para evacuar.",
          "Fiz medicação SOS."
        ]
      }

    ]
  },

  sono: {
  area: "Sono",
  titulo: "Alterações do sono",
  subtitulo: "Higiene do sono",

  secoes: [
    {
      titulo: "🌞 Durante o dia",
      itens: [
        "Manter horários regulares para levantar e iniciar o dia.",
        "Procurar exposição à luz natural durante a manhã.",
        "Manter-se ativo durante o dia, de acordo com as suas capacidades.",
        "Evitar permanecer muito tempo na cama durante o dia."
      ]
    },

    {
      titulo: "😴 Sestas",
      itens: [
        "Evitar sestas prolongadas.",
        "Se necessitar de dormir, preferir uma sesta curta e no início da tarde."
      ]
    },

    {
      titulo: "🌙 Ao final do dia",
      itens: [
        "Manter um horário regular para se deitar.",
        "Criar uma rotina tranquila antes de dormir.",
        "Evitar café, chá com cafeína e outras bebidas estimulantes ao final do dia.",
        "Evitar refeições pesadas próximo da hora de deitar.",
        "Reduzir televisão, telemóvel e outros ecrãs antes de dormir."
      ]
    },

    {
      titulo: "🛏️ Ambiente",
      itens: [
        "Manter o quarto tranquilo, escuro e com temperatura confortável."
      ]
    },

    {
      titulo: "🚨 Contacte a equipa de saúde se...",
      alerta: true,
      itens: [
        "Tiver dificuldade em dormir de forma persistente.",
        "Apresentar sonolência excessiva durante o dia.",
        "Notar uma alteração importante ou persistente do padrão habitual de sono."
      ]
    },

    {
      titulo: "✅ Até à próxima consulta...",
      checklist: true,
      itens: [
        "Mantive horários regulares para deitar e levantar.",
        "Evitei sestas prolongadas.",
        "Reduzi café e outras bebidas estimulantes ao final do dia.",
        "Mantive uma rotina tranquila antes de dormir."
      ]
    }
  ]
},

  polimedicacao: {
    area: "Terapêutica",
    titulo: "Polimedicação",
    itens: [
      "Tome a medicação de acordo com as orientações fornecidas.",
      "Não altere nem suspenda medicamentos sem falar com a equipa de saúde.",
      "Mantenha uma lista atualizada dos medicamentos."
    ]
  },

  sobrecarga: {
    area: "Cuidador",
    titulo: "Sobrecarga do cuidador",
    itens: [
      "Partilhe tarefas e aceite ajuda quando possível.",
      "Reserve tempo para descanso e atividades pessoais.",
      "Fale com a equipa de saúde se sentir dificuldade em manter os cuidados."
    ]
  }
};


const botaoGerar =
  document.getElementById("gerar-recomendacoes");

const resultado =
  document.getElementById("resultado");

const conteudo =
  document.getElementById("conteudo-recomendacoes");

const botaoImprimir =
  document.getElementById("imprimir");


function criarLista(itens) {

  return `
    <ul>
      ${itens
        .map(item => `<li>${item}</li>`)
        .join("")
      }
    </ul>
  `;
}


function criarChecklist(itens) {

  return `
    <ul class="lista-checklist">
      ${itens
        .map(
          item =>
            `<li><span class="caixa-check">☐</span>${item}</li>`
        )
        .join("")
      }
    </ul>
  `;
}


function criarTemaSimples(tema) {

  return `
    <div class="bloco-tema">

      <h4>
        ${tema.titulo}
      </h4>

      ${criarLista(tema.itens)}

    </div>
  `;
}


function criarTemaCompleto(tema, modoCompacto = false) {

  let html = `
    <div class="bloco-tema bloco-tema-completo ${modoCompacto ? "tema-compacto" : ""} ${tema.classeExtra || ""}">

      ${tema.titulo ? `
  <h4 class="titulo-tema-principal">
    ${tema.titulo}
  </h4>
` : ""}
  `;


 if (!modoCompacto && tema.descricaoTitulo && tema.descricao) {

    html += `
      <div class="explicacao-tema">

        <strong>
          ${tema.descricaoTitulo}
        </strong>

        <p>
          ${tema.descricao}
        </p>

      </div>
    `;

  }


  html += `
      <h5 class="subtitulo-tema">
        ${tema.subtitulo}
      </h5>
  `;


  tema.secoes.forEach(
    function (secao) {

      const classes = [
        "secao-tema"
      ];


      if (secao.alerta) {
        classes.push("secao-alerta");
      }


      if (secao.checklist) {
        classes.push("secao-checklist");
      }


      const lista =
        secao.checklist
          ? criarChecklist(secao.itens)
          : criarLista(secao.itens);


      html += `
        <div class="${classes.join(" ")}">

          <h5>
            ${secao.titulo}
          </h5>

          ${lista}

        </div>
      `;
    }
  );


  html += `
    </div>
  `;


  return html;
}

function escaparHTML(texto) {
  return texto
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// =========================================
// ESTATÍSTICAS ANÓNIMAS DE UTILIZAÇÃO
// =========================================

function registarUtilizacao(temasSelecionados, temRecomendacaoIndividual) {

  const chave = "geriatria-estatisticas";

  let estatisticas = JSON.parse(
    localStorage.getItem(chave)
  ) || {
    totalDocumentos: 0,
    temas: {},
    recomendacoesIndividualizadas: 0,
    utilizacaoPorDia: {},
    detalhePorDia: {}
  };

  // Compatibilidade com estatísticas já existentes
  if (!estatisticas.detalhePorDia) {
    estatisticas.detalhePorDia = {};
  }

  const hoje = new Date().toISOString().slice(0, 10);


  // =========================================
  // MIGRAÇÃO DOS DADOS DE TESTE JÁ EXISTENTES
  // =========================================

  if (
    Object.keys(estatisticas.detalhePorDia).length === 0 &&
    estatisticas.totalDocumentos > 0
  ) {

    estatisticas.detalhePorDia[hoje] = {
      documentos: estatisticas.totalDocumentos,
      individualizadas: estatisticas.recomendacoesIndividualizadas,
      temas: { ...estatisticas.temas }
    };

  }


  // =========================================
  // TOTAL GLOBAL
  // =========================================

  estatisticas.totalDocumentos += 1;


  // =========================================
  // TEMAS - TOTAL GLOBAL
  // =========================================

  temasSelecionados.forEach(function (tema) {

    if (!estatisticas.temas[tema]) {
      estatisticas.temas[tema] = 0;
    }

    estatisticas.temas[tema] += 1;

  });


  // =========================================
  // RECOMENDAÇÕES INDIVIDUALIZADAS - GLOBAL
  // =========================================

  if (temRecomendacaoIndividual) {
    estatisticas.recomendacoesIndividualizadas += 1;
  }


  // =========================================
  // UTILIZAÇÃO POR DIA
  // =========================================

  if (!estatisticas.utilizacaoPorDia[hoje]) {
    estatisticas.utilizacaoPorDia[hoje] = 0;
  }

  estatisticas.utilizacaoPorDia[hoje] += 1;


  // =========================================
  // DETALHE POR DIA
  // =========================================

  if (!estatisticas.detalhePorDia[hoje]) {

    estatisticas.detalhePorDia[hoje] = {
      documentos: 0,
      individualizadas: 0,
      temas: {}
    };

  }

  const detalheHoje = estatisticas.detalhePorDia[hoje];

  detalheHoje.documentos += 1;


  if (temRecomendacaoIndividual) {
    detalheHoje.individualizadas += 1;
  }


  temasSelecionados.forEach(function (tema) {

    if (!detalheHoje.temas[tema]) {
      detalheHoje.temas[tema] = 0;
    }

    detalheHoje.temas[tema] += 1;

  });


  // =========================================
  // GUARDAR
  // =========================================

  localStorage.setItem(
    chave,
    JSON.stringify(estatisticas)
  );

}

botaoGerar.addEventListener(
  "click",
  function () {

    const recomendacaoIndividual = document
  .getElementById("recomendacao-individual")
  .value
  .trim();


    const selecionados =
      Array.from(
        document.querySelectorAll(
          '.tema-selecao input[type="checkbox"]:checked'
        )
      );

const modoCompacto = selecionados.length >= 2;

const apenasQuedas =
  selecionados.length === 1 &&
  selecionados[0].value === "quedas";

resultado.classList.toggle(
  "impressao-quedas-unica",
  apenasQuedas
);

  

    if (selecionados.length === 0) {

      alert(
        "Selecione pelo menos uma recomendação."
      );

      return;
    }

registarUtilizacao(
  selecionados.map(input => input.value),
  recomendacaoIndividual !== ""
);

    const porArea = {};


    selecionados.forEach(
      function (checkbox) {

        const tema =
          recomendacoes[checkbox.value];


        if (!tema) {
          return;
        }


        if (!porArea[tema.area]) {
          porArea[tema.area] = [];
        }


        porArea[tema.area].push(
          tema
        );

      }
    );


    const dataFormatada =
      new Date().toLocaleDateString(
        "pt-PT",
        {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        }
      );


    let html = `

      <div class="cabecalho-documento">

        <div class="logotipos-documento">

          <img
            src="imagens/geriatria-sem-texto.png"
            alt="Consulta de Geriatria"
            class="logo-consulta-documento"
          >

          <img
            src="imagens/logo-ulsra.jpg"
            alt="ULS Região de Aveiro"
            class="logo-ulsra-documento"
          >

        </div>


        <h2 class="titulo-documento">
          Recomendações da Consulta de Geriatria
        </h2>


        <div class="identificacao-documento">

          <p>
            <strong>
              Consulta de Geriatria
            </strong>

            <br>

            ULS Região de Aveiro
          </p>


          <p>
            <strong>Data:</strong>
            ${dataFormatada}

            <br>

          </p>

        </div>

      </div>
    `;


    Object.entries(porArea).forEach(
      function ([area, temas]) {

        html += `

          <div class="bloco-area ${
  modoCompacto && area === "Eliminação"
    ? "area-eliminacao"
    : modoCompacto && area === "Cognição e comportamento"
      ? "area-cognicao"
      : modoCompacto && area === "Sono"
        ? "area-sono"
        : ""
}">

            <h3>
              ${area}
            </h3>
        `;


        temas.forEach(
          function (tema) {

            html +=
              tema.secoes
                ? criarTemaCompleto(tema, modoCompacto)
                : criarTemaSimples(tema);

          }
        );


        html += `
          </div>
        `;

      }
    );


    html += `

      ${recomendacaoIndividual ? `
  <div class="objetivos-documento">

    <div class="bloco-individualizado">

      <h3>📝 Recomendações individualizadas</h3>

      <div class="texto-individualizado">
        ${recomendacaoIndividual
          .split('\n')
          .filter(linha => linha.trim() !== "")
          .map(linha => `<div>✓ ${escaparHTML(linha)}</div>`)
          .join("")}
      </div>

    </div>

  </div>
` : ""}


      <div class="rodape-documento">

  <div class="rodape-creditos">

    <div class="rodape-documento-topo">
      <strong>
        Consulta de Geriatria — ULS Região de Aveiro
      </strong>
    </div>

    <p>
      Estas recomendações complementam a informação
      prestada durante a consulta e não substituem a
      avaliação clínica individual nem as orientações
      específicas fornecidas pela equipa de saúde.
    </p>

  </div>

  <div class="rodape-qr oculto" id="rodape-qr">

    <div class="qr-texto">
      <strong>Mais informação</strong>
      <span>
        Aceda aos conteúdos digitais da Consulta de Geriatria
      </span>
    </div>

    <div class="qr-code" id="qr-code"></div>

  </div>

</div>
    `;


    conteudo.innerHTML =
      html;


    resultado.classList.remove(
      "oculto"
    );


    resultado.scrollIntoView({
      behavior: "smooth"
    });

  }
);


botaoImprimir.addEventListener(
  "click",
  function () {

    window.print();

  }
);

// ===============================
// NOVA CONSULTA
// ===============================

function iniciarNovaConsulta() {

  document
    .querySelectorAll('input[type="checkbox"]:not(:disabled)')
    .forEach(function (checkbox) {
      checkbox.checked = false;
    });

  const resultado = document.getElementById("resultado");

  if (resultado) {
    resultado.classList.add("oculto");
  }

  const conteudoRecomendacoes =
    document.getElementById("conteudo-recomendacoes");

  if (conteudoRecomendacoes) {
    conteudoRecomendacoes.innerHTML = "";
  }

  // Limpa a pesquisa de temas
if (campoPesquisa) {
  campoPesquisa.value = "";
  campoPesquisa.dispatchEvent(new Event("input"));
}

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


const botaoNovaConsulta =
  document.getElementById("nova-consulta");

if (botaoNovaConsulta) {
  botaoNovaConsulta.addEventListener(
    "click",
    iniciarNovaConsulta
  );
}


const botaoNovaConsultaResultado =
  document.getElementById("nova-consulta-resultado");

if (botaoNovaConsultaResultado) {
  botaoNovaConsultaResultado.addEventListener(
    "click",
    iniciarNovaConsulta
  );
}

// ===============================
// PESQUISA DE TEMAS
// ===============================

const campoPesquisa = document.getElementById("pesquisa-temas");

if (campoPesquisa) {

  campoPesquisa.addEventListener("input", function () {

    const pesquisa = campoPesquisa.value
      .toLowerCase()
      .trim();

    const areas = document.querySelectorAll(".area-selecao");

    areas.forEach(function (area) {

      const temas = area.querySelectorAll(".tema-selecao");
      let temResultado = false;

      temas.forEach(function (tema) {

        const texto = tema.textContent.toLowerCase();

        if (texto.includes(pesquisa)) {
          tema.style.display = "";
          temResultado = true;
        } else {
          tema.style.display = "none";
        }

      });

      // Se nenhum tema desta área corresponder,
      // esconde também a caixa da área
      if (temResultado) {
        area.style.display = "";
      } else {
        area.style.display = "none";
      }

    });

  });

}

// ===============================
// MODO DE VISUALIZAÇÃO
// ===============================

const botaoModoEcra = document.getElementById("modo-ecra");
const botaoModoImpressao = document.getElementById("modo-impressao");

function definirModoVisualizacao(modo) {

  if (modo === "impressao") {

    document.body.classList.add("modo-impressao");

    botaoModoImpressao?.classList.add("modo-ativo");
    botaoModoEcra?.classList.remove("modo-ativo");

  } else {

    document.body.classList.remove("modo-impressao");

    botaoModoEcra?.classList.add("modo-ativo");
    botaoModoImpressao?.classList.remove("modo-ativo");

  }
}

if (botaoModoEcra) {
  botaoModoEcra.addEventListener("click", function () {
    definirModoVisualizacao("ecra");
  });
}

if (botaoModoImpressao) {
  botaoModoImpressao.addEventListener("click", function () {
    definirModoVisualizacao("impressao");
  });
}

// Modo ecrã por defeito
definirModoVisualizacao("ecra");

// =========================================
// PAINEL DE ESTATÍSTICAS
// =========================================

const botaoAbrirEstatisticas =
  document.getElementById("abrir-estatisticas");

const botaoFecharEstatisticas =
  document.getElementById("fechar-estatisticas");

const painelEstatisticas =
  document.getElementById("painel-estatisticas");

function carregarEstatisticas() {

  const dados = JSON.parse(
    localStorage.getItem("geriatria-estatisticas")
  ) || {
    totalDocumentos: 0,
    temas: {},
    recomendacoesIndividualizadas: 0,
    utilizacaoPorDia: {},
    detalhePorDia: {}
  };

  if (!dados.detalhePorDia) {
    dados.detalhePorDia = {};
  }

  const filtro =
    document.getElementById("estat-filtro-periodo").value;

  const agora = new Date();

  const anoAtual = agora.getFullYear();
  const mesAtual = agora.getMonth(); // 0 = janeiro


  // =========================================
  // DEFINIR SE UMA DATA PERTENCE AO PERÍODO
  // =========================================

  function dataPertenceAoPeriodo(dataTexto) {

    const partes = dataTexto.split("-");

    const ano = Number(partes[0]);
    const mes = Number(partes[1]) - 1;

    if (filtro === "total") {
      return true;
    }

    if (filtro === "ano-atual") {
      return ano === anoAtual;
    }

    if (filtro === "mes-atual") {
      return (
        ano === anoAtual &&
        mes === mesAtual
      );
    }

    if (filtro === "mes-anterior") {

      let anoAnterior = anoAtual;
      let mesAnterior = mesAtual - 1;

      if (mesAnterior < 0) {
        mesAnterior = 11;
        anoAnterior -= 1;
      }

      return (
        ano === anoAnterior &&
        mes === mesAnterior
      );
    }

    return false;
  }


  // =========================================
  // CALCULAR DADOS DO PERÍODO
  // =========================================

  let documentosPeriodo = 0;
  let individualizadasPeriodo = 0;
  let diasComUtilizacao = 0;

  const temasPeriodo = {};


  Object.entries(dados.detalhePorDia).forEach(
    function ([data, detalhe]) {

      if (!dataPertenceAoPeriodo(data)) {
        return;
      }

      if (detalhe.documentos > 0) {
        diasComUtilizacao += 1;
      }

      documentosPeriodo +=
        detalhe.documentos || 0;

      individualizadasPeriodo +=
        detalhe.individualizadas || 0;


      Object.entries(detalhe.temas || {}).forEach(
        function ([tema, quantidade]) {

          if (!temasPeriodo[tema]) {
            temasPeriodo[tema] = 0;
          }

          temasPeriodo[tema] += quantidade;

        }
      );

    }
  );


  // =========================================
  // CARTÕES
  // =========================================

  document.getElementById("estat-total").textContent =
    documentosPeriodo;

  document.getElementById("estat-mes").textContent =
    diasComUtilizacao;

  document.getElementById("estat-individualizadas").textContent =
    individualizadasPeriodo;


  // =========================================
  // NOMES DOS TEMAS
  // =========================================

  const nomesTemas = {
    quedas: "Quedas",
    "alimentacao-demencia": "Alimentação na Demência",
    delirium: "Delirium",
    obstipacao: "Obstipação",
    sono: "Alterações do sono"
  };


  // =========================================
  // ORDENAR TEMAS
  // =========================================

  const temasOrdenados =
    Object.entries(temasPeriodo)
      .sort((a, b) => b[1] - a[1]);


  const temaMaisUtilizado =
    temasOrdenados.length > 0
      ? temasOrdenados[0][0]
      : null;


  document.getElementById("estat-tema-top").textContent =
    temaMaisUtilizado
      ? (nomesTemas[temaMaisUtilizado] || temaMaisUtilizado)
      : "—";


  // =========================================
  // RANKING
  // =========================================

  const listaTemas =
    document.getElementById("lista-temas-estatisticas");

  listaTemas.innerHTML = "";


  if (temasOrdenados.length === 0) {

    listaTemas.innerHTML = `
      <p style="color:#6b7e7e; font-size:14px;">
        Sem dados para este período.
      </p>
    `;

    return;
  }


  const maiorQuantidade =
    temasOrdenados[0][1];


  temasOrdenados.forEach(
    function ([tema, quantidade]) {

      const percentagem =
        Math.round(
          (quantidade / maiorQuantidade) * 100
        );

      const linha =
        document.createElement("div");

      linha.className =
        "linha-ranking-estatisticas";

      linha.innerHTML = `
        <div class="ranking-topo">
          <span>${nomesTemas[tema] || tema}</span>
          <strong>${quantidade}</strong>
        </div>

        <div class="barra-ranking">
          <div
            class="barra-ranking-preenchimento"
            style="width: ${percentagem}%"
            aria-hidden="true"
          ></div>
        </div>
      `;

      listaTemas.appendChild(linha);

    }
  );

}

document
  .getElementById("estat-filtro-periodo")
  .addEventListener(
    "change",
    carregarEstatisticas
  );


// Abrir painel
botaoAbrirEstatisticas.addEventListener(
  "click",
  function () {

    carregarEstatisticas();

    painelEstatisticas.classList.remove("oculto");

    painelEstatisticas.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }
);


// Fechar painel
botaoFecharEstatisticas.addEventListener(
  "click",
  function () {

    painelEstatisticas.classList.add("oculto");

  }
);

// ===============================
// SERVICE WORKER / PWA
// ===============================

// ===============================
// SERVICE WORKER / ATUALIZAÇÕES PWA
// ===============================

if ("serviceWorker" in navigator) {

  window.addEventListener("load", async function () {

    try {

      const registration =
        await navigator.serviceWorker.register("./service-worker.js");

      console.log(
        "Service Worker registado:",
        registration.scope
      );

      const avisoAtualizacao =
        document.getElementById("aviso-atualizacao");

      const botaoAtualizar =
        document.getElementById("botao-atualizar-app");


      // --------------------------------
      // Mostrar aviso
      // --------------------------------

      function mostrarAtualizacao(worker) {

        if (!worker) return;

        avisoAtualizacao.classList.remove("oculto");

        botaoAtualizar.onclick = function () {

          worker.postMessage({
            type: "SKIP_WAITING"
          });

        };
      }


      // --------------------------------
      // Já existe atualização à espera
      // --------------------------------

      if (registration.waiting) {
        mostrarAtualizacao(registration.waiting);
      }


      // --------------------------------
      // Detetar nova versão
      // --------------------------------

      registration.addEventListener(
        "updatefound",
        function () {

          const novoWorker = registration.installing;

          if (!novoWorker) return;

          novoWorker.addEventListener(
            "statechange",
            function () {

              if (
                novoWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {

                mostrarAtualizacao(novoWorker);

              }

            }
          );

        }
      );


      // --------------------------------
      // Verificar atualizações
      // --------------------------------

      registration.update();


      // --------------------------------
      // Nova versão assumiu o controlo
      // --------------------------------

      let recarregando = false;

      navigator.serviceWorker.addEventListener(
        "controllerchange",
        function () {

          if (recarregando) return;

          recarregando = true;

          window.location.reload();

        }
      );

    } catch (error) {

      console.error(
        "Erro ao registar Service Worker:",
        error
      );

    }

  });

}

const botaoLimparEstatisticas =
  document.getElementById("limpar-estatisticas");

if (botaoLimparEstatisticas) {

  botaoLimparEstatisticas.addEventListener(
    "click",
    function () {

      const confirmar = confirm(
        "Tem a certeza de que pretende eliminar todas as estatísticas guardadas neste dispositivo?"
      );

      if (!confirmar) {
        return;
      }

      localStorage.removeItem(
        "geriatria-estatisticas"
      );

      carregarEstatisticas();

      alert(
        "As estatísticas deste dispositivo foram eliminadas."
      );

    }
  );

}

const elementoVersao = document.getElementById("versao-app");

if (elementoVersao) {
  elementoVersao.textContent = `Versão ${APP_VERSION}`;
}