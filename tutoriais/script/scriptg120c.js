const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const background = document.querySelector('.background')
const menu = document.querySelector('#menu')
const res = document.querySelector('#res')


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
    res.innerHTML = '<h2>Algumas informações importantes sobre o inversor de frequência Siemens G120:</h2>';
           criarLinha(
            "Manual do inversor ",
            `
            <p>📘 Manual do inversor G120 disponível para download abaixo:</p>
            <br>
            <a class="botao-download" href="https://drive.google.com/file/d/1Kl1z_Qw_OyfQjBbwgZPqMleRUB5JLRXi/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            <br>
            <br>
            <iframe src="https://drive.google.com/file/d/1Kl1z_Qw_OyfQjBbwgZPqMleRUB5JLRXi/preview" width="300" height="400"></iframe>
            `
        );

        criarLinha(
            "Manual de falhas",
            `
            <p>📘 Manual de Falhas do inversor G120 disponível para download abaixo:</p>
            <br>
            <a class="botao-download" href="https://drive.google.com/file/d/1s1SRsK0_jB_ikSdcKxSiKmQKKk9PQY8P/view?usp=sharing" target="_blank">Clique aqui para baixar</a>
            <br>
            <br>
            <iframe src="https://drive.google.com/file/d/1s1SRsK0_jB_ikSdcKxSiKmQKKk9PQY8P/preview" width="300" height="400"></iframe>
            `
        );
        criarLinha(
            "Principais Parâmetros",
            `
            <table>
        <thead>
            <tr>
                <th>Parâmetros</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>P100</td>
                <td>2= referente inversor em 60Hz</td>
            </tr>
            <tr>
                <td>P304</td>
                <td>Tensão do motor</td>
            </tr>
            <tr>
                <td>P305</td>
                <td>corrente do motor</td>
            </tr>
             <tr>
                <td>P307</td>
                <td>potência do motor</td>
            </tr>
             <tr>
                <td>P308</td>
                <td>fator de potência</td>
            </tr>
            <tr>
                <td>P310</td>
                <td>frequência do inversor</td>
                
            </tr>
             <tr>
                <td>P311</td>
                <td>Velocidade em RPM do motor</td>
            </tr>
             <tr>
                <td>P640</td>
                <td>Limite de corrente em Amperes</td>
            </tr>
             <tr>
                <td>P1080</td>
                <td>Velocidade minima em RPM</td>
            </tr>
             <tr>
                <td>P1082</td>
                <td>Velocidade máxima em RPM</td>
            </tr>
             <tr>
                <td>P1120</td>
                <td>Rampa de aceleração</td>
            </tr>
             <tr>
                <td>P1121</td>
                <td>Rampa de desaceleração</td>
            </tr>
        </tbody>
    </table>

    <p>Com base nesses parâmetros acesse o manual.</p>
            `
        );

        criarLinha(
            "Comissionamento para novos motores",
            `
            <p> Para fazer o comissionamento coloque o inversor em modo manual (Hand on), faz as alterações dos parâmetros, complete o comissionamento. Depois volte o inversor para modo Remoto.
            </p>
            <table>
        <thead>
            <tr>
                <th>Parâmetros</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>P10</td>
                <td>1 =  para colocar em comissionameto</td>
            </tr>
            <tr>
                <td>P305</td>
                <td>Corrente do motor</td>
            </tr>
             <tr>
                <td>P307</td>
                <td>Potência do motor</td>
            </tr>
             <tr>
                <td>P311</td>
                <td>Velocidade em RPM do motor</td>
            </tr>
             <tr>
                <td>P1900</td>
                <td>2 = identificar o motor</td>
            </tr>
             <tr>
                <td>P3900</td>
                <td>0 = Salvar e completar o comissionamento</td>
            </tr>
        </tbody>
    </table>

    <p>Com base nesses parâmetros acesse o manual.</p>
            `
        );


}

carregar();




function criarLinha(titulo, conteudoHtml, textoExplicativoHtml) {
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
    conteudoDiv.style.display = 'none';

    const conteudoInterno = document.createElement('div');
    conteudoInterno.innerHTML = conteudoHtml;
    conteudoDiv.appendChild(conteudoInterno);

    // 🔥 Cria o botão Mostrar Explicação
    const botaoExplicacao = document.createElement('button');
    botaoExplicacao.innerText = 'Mostrar Explicação';
    botaoExplicacao.classList.add('botao-explicacao');
    botaoExplicacao.style.marginTop = '10px';

    const explicacaoDiv = document.createElement('div');
    explicacaoDiv.classList.add('explicacao');
    explicacaoDiv.style.display = 'none';
    explicacaoDiv.innerHTML = textoExplicativoHtml;

    botaoExplicacao.addEventListener('click', () => {
        if (explicacaoDiv.style.display === 'none') {
            explicacaoDiv.style.display = 'block';
            botaoExplicacao.innerText = 'Ocultar Explicação';
        } else {
            explicacaoDiv.style.display = 'none';
            botaoExplicacao.innerText = 'Mostrar Explicação';
        }
    });

    // 🔥 Cria botão de fechar janela principal
    const botaoFechar = document.createElement('button');
    botaoFechar.innerText = 'Fechar Janela';
    botaoFechar.classList.add('botao-fechar');
    botaoFechar.style.marginTop = '10px';

    botaoFechar.addEventListener('click', () => {
        conteudoDiv.style.display = 'none';
        botao.innerText = '+';
    });

    // Eventos de abrir/fechar linha principal
    botao.addEventListener('click', () => {
        if (conteudoDiv.style.display === 'none') {
            conteudoDiv.style.display = 'block';
            botao.innerText = '-';
        } else {
            conteudoDiv.style.display = 'none';
            botao.innerText = '+';
        }
    });

    // Montagem dos elementos
    linha.appendChild(texto);
    linha.appendChild(botao);
    conteudoDiv.appendChild(botaoExplicacao);
    conteudoDiv.appendChild(explicacaoDiv);
    conteudoDiv.appendChild(botaoFechar);
    linha.appendChild(conteudoDiv);

    document.getElementById('res').appendChild(linha);
}

function criarLinha2(titulo, conteudoHtml, textoExplicativoHtml) {
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
    conteudoDiv.style.display = 'none';

    const conteudoInterno = document.createElement('div');
    conteudoInterno.innerHTML = conteudoHtml;
    conteudoDiv.appendChild(conteudoInterno);

    // 🔥 Cria o botão Mostrar Explicação
    const botaoExplicacao = document.createElement('button');
    botaoExplicacao.innerText = 'Mostrar Explicação';
    botaoExplicacao.classList.add('botao-explicacao');
    botaoExplicacao.style.marginTop = '10px';

    const explicacaoDiv = document.createElement('div');
    explicacaoDiv.classList.add('explicacao');
    explicacaoDiv.style.display = 'none';
    explicacaoDiv.innerHTML = textoExplicativoHtml;

    botaoExplicacao.addEventListener('click', () => {
        if (explicacaoDiv.style.display === 'none') {
            explicacaoDiv.style.display = 'block';
            botaoExplicacao.innerText = 'Ocultar Explicação';
        } else {
            explicacaoDiv.style.display = 'none';
            botaoExplicacao.innerText = 'Mostrar Explicação';
        }
    });

    // 🔥 Cria botão de fechar janela principal
    const botaoFechar = document.createElement('button');
    botaoFechar.innerText = 'Fechar Janela';
    botaoFechar.classList.add('botao-fechar');
    botaoFechar.style.marginTop = '10px';

    botaoFechar.addEventListener('click', () => {
        conteudoDiv.style.display = 'none';
        botao.innerText = '+';
    });

    // Eventos de abrir/fechar linha principal
    botao.addEventListener('click', () => {
        if (conteudoDiv.style.display === 'none') {
            conteudoDiv.style.display = 'block';
            botao.innerText = '-';
        } else {
            conteudoDiv.style.display = 'none';
            botao.innerText = '+';
        }
    });

    // Montagem dos elementos
    linha.appendChild(texto);
    linha.appendChild(botao);
    conteudoDiv.appendChild(botaoExplicacao);
    conteudoDiv.appendChild(explicacaoDiv);
    conteudoDiv.appendChild(botaoFechar);
    linha.appendChild(conteudoDiv);

    document.getElementById('res2').appendChild(linha);
}







