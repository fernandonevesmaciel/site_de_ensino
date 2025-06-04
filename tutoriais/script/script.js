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

    criarLinha(
        "Programações do inversor",
        `
            <h2> Programando gira/para com chave seccionadora</h2> <br><br>
            
            <img src="../imagens/gira-para chave seletora.jpg" alt="inversor com chave seletora em modo gira/para" class="imagemTutorial"> <br>

            <p id="textoTutorial">
                Com a chave seletora ligada nos bornes 1 = dl1 e no borne 9 = 24v do inversor, estamos a usar o inversor em PNP.
                essa ligação geralmente usada para esteiras ou funcionalidades onde o inversor tem o objetivo de rodar somente quando a chave seletora estiver acionada ou seja caso desacione o inversor irá parar conforme a rampa programada.<br><br>

                Parâmetros de programação para GIRA/PARA:<br><br>

                   <table>
            <thead>
                <tr>
                    <th>Parâmetros</th>
                    <th>Valor usado</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>P000</td>
                    <td>5</td>
                    <td>Senha de acesso para modificar parâmetros</td>
                </tr>
                <tr>
                    <td>P204</td>
                    <td>5</td>
                    <td>Reseta o inversor de Fábrica</td>
                </tr>
                <tr>
                    <td>P100</td>
                    <td>1.0</td>
                    <td>Rampa de aceleração</td>
                </tr>
                <tr>
                    <td>P101</td>
                    <td>0.5</td>
                    <td>Rampa de desaceleração</td>
                </tr>
                 <tr>
                    <td>P133</td>
                    <td>0.0</td>
                    <td>Frequência minima</td>
                </tr>
                 <tr>
                    <td>P134</td>
                    <td>60.0</td>
                    <td>Frequência máxima</td>
                </tr>
                <tr>
                    <td>P156</td>
                    <td>1.87</td>
                    <td>Corrente 1.1x a nominal do motor</td>
                    
                </tr>
                 <tr>
                    <td>P157</td>
                    <td>1.75</td>
                    <td>Corrente 1x a nominal do motor</td>
                </tr>
                 <tr>
                    <td>P158</td>
                    <td>1.46</td>
                    <td>Corrente 0.8x a nominal do motor</td>
                </tr>
                 
                 <tr>
                    <td>P220</td>
                    <td> 1 </td>
                    <td>Seleciona acesso Remoto ou Local</td>
                </tr>
                 <tr>
                    <td>P222</td>
                    <td> 0 </td>
                    <td>Referência de velocidade Remoto</td>
                </tr>
                 <tr>
                    <td>P226</td>
                    <td> 1 </td>
                    <td>Sentido de giro Remoto</td>
                </tr>
                 <tr>
                    <td>P271</td>
                    <td> 8 </td>
                    <td>Sinal das entradas digitais</td>
                </tr>
            </tbody>
        </table>

        <br><br>

        <p id="textoTutorial">
            Comentario de cada parâmetro e o porque foi usado cada valor nele:<br>
            P000 = conforme explicado na própria tabela esse parâmetro quando já programado, serve para proteger a alteração dos parâmetros só podendo ter acesso aos parâmetros quando digitado corretamente a senha.(essa senha pode ser alterada ou adicionada no parâmetro P200.)<br>
            P204 =
        </p>


            </p>
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






