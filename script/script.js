const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const background = document.querySelector('.background')
const menu = document.querySelector('#menu')

botao.addEventListener('click', () =>{
    menuLateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')

    if (menu.classList.contains('fa-bars')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-right-from-bracket');
    } else {
        menu.classList.remove('fa-right-from-bracket');
        menu.classList.add('fa-bars');
    }
}
)





