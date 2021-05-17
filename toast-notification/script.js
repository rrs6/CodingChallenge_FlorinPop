const button = document.getElementById('btn');
const container = document.getElementById('container');
button.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notification = document.createElement('div'); //Cria um elemento 'div'.
    notification.classList.add('toast');//Adiciona a classe 'toast' no objeto de notificação.

    notification.innerText = 'This is my Web Dev Journey!';
    container.appendChild(notification);//Nessa parte nós inserimos a notificação como div no container
    setTimeout(()=>{notification.remove();}, 2000);//Aqui o set timout funciona como um "countdown to do", quando o tempo
    //é alcançado, a função realizar a chamada ao handler.
}