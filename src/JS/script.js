document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('form-login');
    const mensagem = document.getElementById('message');
    const video = document.querySelector('.video-container');
    const loginContainer = document.getElementById('login-container');
    const buttonEntrar = document.getElementById('btnEntrar');
    const buttonSair = document.getElementById('btnSair');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Aqui você pode validar o login se quiser

        // Redireciona para a página inicial
        window.location.href = "./src/pages/PaginaInicial.html";
    });
});