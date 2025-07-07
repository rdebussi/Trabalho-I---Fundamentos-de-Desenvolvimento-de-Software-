document.addEventListener('DOMContentLoaded', function() {
    const botaoMensagem = document.getElementById('mensagemBtn');
    const espacoMensagem = document.getElementById('mensagemSaudacao');

    botaoMensagem.addEventListener('click', function() {
        const mensagem = "Que bom ter você por aqui! Explore minha página, não se esqueça de visitar meu github e deixar umas estrelinhas 😁👍";
        espacoMensagem.textContent = mensagem;
        espacoMensagem.classList.add('show');
    });
});