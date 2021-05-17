function createHeart() {
    const heart = document.createElement('div');// Cria uma div dinamicamente
    heart.innerText = "💜"; //Preenche a o texto da div como 'heart-symbol'
    heart.style.left = Math.random()*100 +"vw"; // Define um range de instanciamento dos corações (0vw-100vw)
    heart.style.animationDuration = (Math.random() * 2) + 3 + "s"; //Altera o tempo de animação do coração. Isso faz com que cada coração, tenha seu timing
    heart.classList.add('heart'); //Adiciona a classe 'heart' no objeto.
    document.body.appendChild(heart); //Adiciona o objeto ao body

    //O setTimout foi colocado para remover os corações quando bater o tempo limite de '5s'.
    setTimout(() => {
        heart.remove();
    }, 5000);
}
//Aqui chamamos a função de criar o coração a cada '0.1s';
setInterval(createHeart, 100);