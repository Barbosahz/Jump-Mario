const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

let gameOver = false; // Variável para controlar se o jogo acabou

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseInt(window.getComputedStyle(mario).getPropertyValue('bottom'));

    if (pipePosition <= 80 && pipePosition > 0 && marioPosition <= 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        gameOver = true; // Define a variável gameOver para true quando o jogo acaba
    }
}, 10);

document.addEventListener('keydown', jump);

// Adiciona um event listener para a tecla "R" para recarregar a página após o game over
document.addEventListener('keydown', (event) => {
    if (gameOver && event.key === 'r') {
        window.location.reload();
    }
});