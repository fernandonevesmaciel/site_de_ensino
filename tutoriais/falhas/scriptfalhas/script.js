// Garante que o script só vai rodar depois que o HTML estiver pronto
document.addEventListener('DOMContentLoaded', () => {

    const botao = document.querySelector('.botao-menu');
    const menuLateral = document.querySelector('.menu-lateral');
    const background = document.querySelector('.background');
    const menuIcon = document.querySelector('#menu');

    // Função para abrir/fechar o menu
    const toggleMenu = () => {
        menuLateral.classList.toggle('ativo');
        botao.classList.toggle('ativo');
        background.classList.toggle('ativo');

        // Troca o ícone de 'barras' para 'fechar' e vice-versa
        if (menuIcon.classList.contains('fa-bars')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark'); // Ícone "X" para fechar
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    };

    // Adiciona o evento de clique ao botão do menu
    botao.addEventListener('click', toggleMenu);

    // Adiciona o evento de clique ao fundo para fechar o menu
    background.addEventListener('click', toggleMenu);

});