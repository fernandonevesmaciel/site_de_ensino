const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const background = document.querySelector('.background')

botao.addEventListener('click', () =>{
    menuLateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')
})
