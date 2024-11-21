let currentStage = 0;

const stages = [
  {
    title: "Motor do Carro",
    description:
      "O motor transforma combustível em energia. Qual componente é essencial para a ignição?",
    options: [
      { text: "Velas de ignição", correct: true },
      { text: "Filtro de óleo", correct: false },
    ],
  },
  {
    title: "Transmissão do Carro",
    description: "Qual peça conecta o motor às rodas?",
    options: [
      { text: "Embreagem", correct: true },
      { text: "Bateria", correct: false },
    ],
  },
  {
    title: "Parte Elétrica",
    description: "Qual peça recarrega a bateria enquanto o motor está ligado?",
    options: [
      { text: "Alternador", correct: true },
      { text: "Tanque de combustível", correct: false },
    ],
  },
  {
    title: "Sistema de Freios",
    description: "Qual sistema impede o carro de deslizar ao frear?",
    options: [
      { text: "Sistema ABS", correct: true },
      { text: "Filtro de ar", correct: false },
    ],
  },
  {
    title: "Lubrificação",
    description: "Qual fluido é usado para reduzir o atrito no motor?",
    options: [
      { text: "Óleo do motor", correct: true },
      { text: "Água", correct: false },
    ],
  },
  {
    title: "Arrefecimento",
    description:
      "Qual componente é responsável por manter a temperatura do motor ideal?",
    options: [
      { text: "Radiador", correct: true },
      { text: "Velas de ignição", correct: false },
    ],
  },
  {
    title: "Combustível",
    description:
      "Qual peça controla a entrada de combustível no motor de um carro moderno?",
    options: [
      { text: "Injeção eletrônica", correct: true },
      { text: "Carburador", correct: false },
    ],
  },
  {
    title: "Suspensão",
    description: "Qual é a função principal do sistema de suspensão?",
    options: [
      { text: "Amortecer impactos", correct: true },
      { text: "Reduzir consumo de combustível", correct: false },
    ],
  },
  {
    title: "Direção",
    description: "Qual sistema ajuda o motorista a virar o volante com facilidade?",
    options: [
      { text: "Direção hidráulica", correct: true },
      { text: "Sistema de escape", correct: false },
    ],
  },
  {
    title: "Bateria",
    description: "Qual é a função principal da bateria do carro?",
    options: [
      { text: "Fornecer energia para o motor de partida", correct: true },
      { text: "Armazenar combustível", correct: false },
    ],
  },
  {
    title: "Sistema de Escape",
    description: "O que o sistema de escape faz?",
    options: [
      { text: "Reduz poluentes e libera gases do motor", correct: true },
      { text: "Aumenta a potência do motor", correct: false },
    ],
  },
  {
    title: "Airbags",
    description: "Os airbags são ativados em qual situação?",
    options: [
      { text: "Em colisões severas", correct: true },
      { text: "Quando o freio é pressionado", correct: false },
    ],
  },
  {
    title: "Pneus",
    description: "O que é essencial verificar regularmente nos pneus?",
    options: [
      { text: "Pressão de ar", correct: true },
      { text: "Cor do pneu", correct: false },
    ],
  },
  {
    title: "Faróis",
    description: "Qual é a finalidade dos faróis de neblina?",
    options: [
      { text: "Melhorar a visibilidade em neblina", correct: true },
      { text: "Iluminar áreas próximas ao porta-malas", correct: false },
    ],
  },
  {
    title: "Velocímetro",
    description: "O que o velocímetro do carro mede?",
    options: [
      { text: "Velocidade em km/h", correct: true },
      { text: "Quantidade de combustível", correct: false },
    ],
  },
  {
    title: "Palhetas de Limpador",
    description: "O que deve ser usado no reservatório do limpador de para-brisa?",
    options: [
      { text: "Água ou solução de limpeza", correct: true },
      { text: "Óleo do motor", correct: false },
    ],
  },
  {
    title: "Final",
    description:
      "Parabéns! Agora, diga: qual desses itens é mais importante para a segurança do carro?",
    options: [
      { text: "Freios", correct: true },
      { text: "Decoração interna", correct: false },
    ],
  },
];

function loadStage(stageIndex) {
  const stage = stages[stageIndex];
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const options = document.getElementById("options");

  title.textContent = stage.title;
  description.textContent = stage.description;

  options.innerHTML = "";
  stage.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.onclick = () => handleAnswer(stageIndex, index);
    options.appendChild(button);
  });
}

function handleAnswer(stageIndex, optionIndex) {
  const stage = stages[stageIndex];
  if (stage.options[optionIndex].correct) {
    if (stageIndex + 1 < stages.length) {
      loadStage(stageIndex + 1);
    } else {
      endGame(true);
    }
  } else {
    endGame(false);
  }
}

function endGame(won) {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const options = document.getElementById("options");

  if (won) {
    title.textContent = "Você venceu!";
    description.textContent = "Parabéns! Você completou todas as etapas!";
  } else {
    title.textContent = "Você errou!";
    description.textContent = "Infelizmente, você voltou ao início. Tente novamente.";
  }

  options.innerHTML = `<button onclick="restartGame()">Reiniciar</button>`;
}

function restartGame() {
  currentStage = 0;
  loadStage(currentStage);
}

// Inicia o jogo
loadStage(currentStage);
