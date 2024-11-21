const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Configurações do jogo
const box = 20; // Tamanho de cada célula
canvas.width = 400;
canvas.height = 400;

// Snake e comida
let snake = [{ x: 5 * box, y: 5 * box }];
let direction = "RIGHT";
let food = {
    x: Math.floor(Math.random() * canvas.width / box) * box,
    y: Math.floor(Math.random() * canvas.height / box) * box
};

// Controle de teclas
document.addEventListener("keydown", event => {
    if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
});

// Função para desenhar a Snake e a comida
function draw() {
    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha a comida
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Desenha a Snake
    ctx.fillStyle = "green";
    for (let part of snake) {
        ctx.fillRect(part.x, part.y, box, box);
    }

    // Posição da cabeça
    let head = { x: snake[0].x, y: snake[0].y };

    // Atualiza a posição da cabeça
    if (direction === "UP") head.y -= box;
    if (direction === "DOWN") head.y += box;
    if (direction === "LEFT") head.x -= box;
    if (direction === "RIGHT") head.x += box;

    // Verifica colisões
    if (
        head.x < 0 || head.x >= canvas.width || 
        head.y < 0 || head.y >= canvas.height || 
        snake.some(part => part.x === head.x && part.y === head.y)
    ) {
        clearInterval(game);
        alert("Game Over!");
        return;
    }

    // Verifica se comeu a comida
    if (head.x === food.x && head.y === food.y) {
        food = {
            x: Math.floor(Math.random() * canvas.width / box) * box,
            y: Math.floor(Math.random() * canvas.height / box) * box
        };
    } else {
        snake.pop(); // Remove o último segmento
    }

    // Adiciona a nova cabeça
    snake.unshift(head);
}

// Atualiza o jogo
let game = setInterval(draw, 100);
