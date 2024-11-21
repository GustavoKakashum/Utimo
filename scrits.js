function chooseOption(choice) {
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const options = document.getElementById('options');

  if (choice === 'explorar') {
    title.textContent = 'Você encontrou uma porta!';
    description.textContent = 'Deseja abrir a porta ou voltar para explorar mais?';
    options.innerHTML = `
      <button onclick="chooseOption('abrir')">Abrir a Porta</button>
      <button onclick="chooseOption('voltar')">Voltar</button>
    `;
  } else if (choice === 'esperar') {
    title.textContent = 'Nada aconteceu.';
    description.textContent = 'Você decide explorar a sala.';
    options.innerHTML = `
      <button onclick="chooseOption('explorar')">Explorar</button>
    `;
  } else if (choice === 'abrir') {
    title.textContent = 'Parabéns!';
    description.textContent = 'Você conquistou o prêmio... que é nada!';
    options.innerHTML = `
      <button onclick="chooseOption('reiniciar')">Jogar Novamente</button>
    `;
  } else if (choice === 'voltar') {
    title.textContent = 'Você está de volta à sala inicial.';
    description.textContent = 'O que deseja fazer?';
    options.innerHTML = `
      <button onclick="chooseOption('explorar')">Explorar</button>
      <button onclick="chooseOption('esperar')">Esperar</button>
    `;
  } else if (choice === 'reiniciar') {
    title.textContent = 'Bem-vindo ao Jogo!';
    description.textContent = 'Você está em uma sala escura. O que deseja fazer?';
    options.innerHTML = `
      <button onclick="chooseOption('explorar')">Explorar</button>
      <button onclick="chooseOption('esperar')">Esperar</button>
    `;
  }
}
