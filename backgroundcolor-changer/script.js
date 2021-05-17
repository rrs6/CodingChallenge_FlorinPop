const button = document.getElementById('button0');

button.addEventListener('click', () => {
    document.body.style.background = randomColor();
});

function randomColor() {
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
}