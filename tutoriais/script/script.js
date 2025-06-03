const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const background = document.querySelector('.background')
const menu = document.querySelector('#menu')

botao.addEventListener('click', () =>{
    menuLateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    background.classList.toggle('ativo')

    if (menu.classList.contains('fa-bars')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-right-from-bracket');
    } else {
        menu.classList.remove('fa-right-from-bracket');
        menu.classList.add('fa-bars');
    }
}
)

background.addEventListener('click',() =>{

    menuLateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    background.classList.toggle('ativo')

    if (menu.classList.contains('fa-bars')) {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-right-from-bracket');
    } else {
        menu.classList.remove('fa-right-from-bracket');
        menu.classList.add('fa-bars');
    }

} )

function carregar(){
    criarLinha(
        "Manual do inversor", `
        <h2> Manual completo do inversor </h2> <br>
        <iframe src="https://drive.google.com/file/d/1KdryQ02OayUDnwhxcIJkyVJsrmcdvsnT/preview" width="300" height="400" style="border:1px solid #ccc; border-radius:5px;"></iframe> <br><br>

        <a href="https://drive.google.com/uc?export=download&id=1KdryQ02OayUDnwhxcIJkyVJsrmcdvsnT" target="_blank" class="botao-download">Clique aqui para baixar</a><br><br>

        <h2> Manual contendo somente as falhas do inversor</h2><br>

        <iframe src="https://drive.google.com/file/d/1KnfXvqmRlTM79CxOt_Hq88E6Dh_nSk27/preview" width="300" height="400"></iframe> <br><br>

        <a href="https://drive.google.com/uc?export=download&id=1KnfXvqmRlTM79CxOt_Hq88E6Dh_nSk27" target="_blank" class="botao-download">Clique aqui para baixar</a>
        `
    )

}

carregar();





function criarLinha(titulo, conteudoHtml) {
        const linha = document.createElement('div');
        linha.classList.add('linha');
    
        const texto = document.createElement('span');
        texto.innerText = titulo;
        texto.classList.add('titulo');
    
        const botao = document.createElement('button');
        botao.innerText = '+';
        botao.classList.add('botao-toggle');
    
        const conteudoDiv = document.createElement('div');
        conteudoDiv.classList.add('conteudo');
        conteudoDiv.innerHTML = conteudoHtml;
        conteudoDiv.style.display = 'none'; // apenas isso pode ficar no JS (ou usar classe CSS se quiser)
    
        botao.addEventListener('click', () => {
            if (conteudoDiv.style.display === 'none') {
                conteudoDiv.style.display = 'block';
                botao.innerText = '-';
            } else {
                conteudoDiv.style.display = 'none';
                botao.innerText = '+';
            }
        });
    
        linha.appendChild(texto);
        linha.appendChild(botao);
        linha.appendChild(conteudoDiv);
        document.getElementById('res').appendChild(linha);
    }






