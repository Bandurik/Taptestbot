let score = 0;
let level = 1;

const scoreElement = document.getElementById('score');
const clickArea = document.getElementById('clickArea');
const clickImage = document.getElementById('clickImage');
const body = document.body;
const levelUpMessage = document.getElementById('levelUpMessage');

clickArea.addEventListener('click', () => {
    score++;
    scoreElement.textContent = `Score: ${score}`;

    if (score === 20 && level === 1) {
        levelUp();
    }
});

function levelUp() {
    level++;
    scoreElement.textContent = `Level Up! Score: ${score}`;

    // Показать сообщение о повышении уровня
    levelUpMessage.style.display = 'block';

    // Скрыть сообщение через 2 секунды
    setTimeout(() => {
        levelUpMessage.style.display = 'none';
    }, 2000);

    // Меняем фон и изображение
    body.style.backgroundImage = "url('cool_background.jpg')";
    clickImage.src = 'fan_old.png';

    // Обновляем анимацию для вентилятора
    clickImage.style.animation = 'fanAnimation 0.2s ease-in-out infinite alternate';
}
