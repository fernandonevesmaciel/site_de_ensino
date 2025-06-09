const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const background = document.querySelector('.background')
const menu = document.querySelector('#menu')
const res = document.querySelector('#res')
const res2 = document.querySelector('#res2')

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


carregar();

function carregar() {
    criarLinha(
        "Lei de Ohm",
        `
        <p>
            🔧 Serve para:<br>
            * Descobrir a Tensão (V), Corrente (I) ou Resistência (R) em qualquer circuito.<br>
            * Muito usada para testar resistências, entender o funcionamento de equipamentos e verificar se os valores estão corretos.<br><br>
        </p>
        
        <div class="operacoes">
            <p>🔢 Informe dois valores para calcular o terceiro:<br></p>
            <div class="cardInputs">
                <input type="number" id="valor1" class="inputs" placeholder="Resistência (Ω)">
                <input type="number" id="valor2" class="inputs" placeholder="Corrente (A)"><br><br>
            </div>
            
            <p>⚙️ Escolha o que deseja calcular:<br></p>
            <select id="opcaoOhms" class="inputs" onchange="atualizarPlaceholdersLeiDeOhms()">
                <option value="V">Tensão (V)</option>
                <option value="I">Corrente (I)</option>
                <option value="R">Resistência (R)</option>
            </select><br><br>
            <button onclick="calcularOhm()" class="botao-calcular">Calcular</button><br><br>
            <p>🧠 Resultado: <span id="resultadoOhm"></span></p>
        </div>
        `,
        `
        <p>
            💡 <strong>Explicação:</strong><br>
            A Lei de Ohm relaciona três grandezas elétricas: Tensão (V), Corrente (I) e Resistência (R).<br><br>
            🔸 Fórmula principal: <strong>V = R × I</strong><br>
            🔸 Para calcular Corrente: <strong>I = V ÷ R</strong><br>
            🔸 Para calcular Resistência: <strong>R = V ÷ I</strong><br><br>
            Essa lei é usada para entender e dimensionar circuitos elétricos, garantindo seu correto funcionamento e segurança.
        </p>
        `
    );

    criarLinha(
         "Potência Elétrica Monofásica",
        `
        <p>
            🔧 Serve para:<br>
            * Calcular a potência de um equipamento residencial ou industrial.<br>
            * Usado para saber quantos watts um chuveiro, uma lâmpada, uma furadeira ou qualquer carga consome.<br><br>
        </p>
        
        <div class="operacoes">
            <p>🔢 Informe dois valores para calcular o terceiro:<br></p>
            <div class="cardInputs">
                <input type="number" id="valorP1" class="inputs" placeholder="Tensão (V)">
                <input type="number" id="valorP2" class="inputs" placeholder="Corrente (A)"><br><br>
            </div>

            
            
            <button onclick="calcularPotencia()" class="botao-calcular">Calcular</button><br><br>
            <p>🧠 Resultado: <span id="resultadoPotencia"></span></p>
        </div>
        `,
        `
        <p>
            💡 <strong>Explicação:</strong><br>
           Se um equipamento puxa 10A em 220V:<br>
           P = 220 x 10 = 2200W

        </p>
        `
    )

    criarLinha(
        "Potência Elétrica Trifásica",
        `
       <p>
            🔧 Serve para:<br>
            * Calcular a potência total de motores, máquinas e equipamentos trifásicos.<br>
            * Essencial para dimensionar disjuntores, cabos, painéis e entender o consumo das cargas trifásicas.<br><br>
        </p>
        
        <div class="operacoes">
            <p>🔢 Informe dois valores para calcular o terceiro:<br></p>
            <div class="card3Inputs">
                <input type="number" id="valorPt1" class="inputs" placeholder="Tensão (V)">
                <input type="number" id="valorPt2" class="inputs" placeholder="Corrente (A)">
                <input type="number" id="valorPt3" class="inputs" placeholder="FP (cos φ)">
            </div>
        
            <button onclick="calcularPotenciaTrifasica()" class="botao-calcular">Calcular</button><br><br>
            <p>🧠 Resultado: <span id="resultadoPotenciaTrifasica"></span></p>
        </div>
        `,
        `
        <p>
            💡 <strong>Explicação:</strong><br>
            Motor trifásico, 380V, 10A, FP 0,92:<br>
            P = 1,732 x 380 x 10 x 0,92 = 6058W
        </p>
        `
    )

    criarLinha(
        "Cálculo de Corrente",`
        <p>
            🔧 Serve para:<br>
            * Saber quantos amperes uma carga consome.<br>
            * Fundamental pra escolher a bitola do fio, disjuntores e proteções.<br><br>
        </p>
        
        <div class="operacoes">
            <p>🔢 Informe dois valores para calcular o terceiro:<br></p>
            <div class="cardInputs">
                <input type="number" id="valorCC1" class="inputs" placeholder="Potência (W)">
                <input type="number" id="valorCC2" class="inputs" placeholder="Tensão (V)"><br><br>
            </div>

            
            
            <button onclick="calcularCorrente()" class="botao-calcular">Calcular</button><br><br>
            <p>🧠 Resultado: <span id="resultadoCorrente"></span></p>
        </div>
        `,
        `
        <p>
            💡 <strong>Explicação:</strong><br>
           Um chuveiro de 5500W em 220V:<br>
           P = 5500 / 10 = 25A

        </p>
        `
    )

    criarLinha(
    "Queda de Tensão — (ΔV)",
    `
    <p>
        🔧 Serve para:<br>
        * Calcular a queda de tensão em circuitos monofásicos.<br>
        * Importante para dimensionamento correto dos cabos e evitar perda de energia.<br><br>
    </p>

    <div class="operacoes">
        <p>🔢 Informe os dados:</p>
        <div>
            <div class="card3Inputs">
                <input type="number" id="comprimento" class="inputs" placeholder="Comprimento (m)">
                <input type="number" id="corrente" class="inputs" placeholder="Corrente (A)">
                <input type="number" id="secao" class="inputs" placeholder="Seção (mm²)"><br><br>
            </div>

            <select id="material" class="inputs">
                <option value="cobre">Cobre</option>
                <option value="aluminio">Alumínio</option>
            </select><br><br>
        </div>
        
        <button onclick="calcularQuedaTensao()" class="botao-calcular">Calcular</button><br><br>
        <p>🧠 Resultado: <span id="resultadoQueda"></span></p>
    </div>
    `,
    `
    <p>
        💡 <strong>Explicação:</strong><br>
        A queda de tensão ocorre devido à resistência dos cabos. A fórmula é:<br><br>

        <strong>ΔV = (2 × L × I × (ρ ÷ S)) ÷ 1000</strong><br><br>

        Onde:<br>
        🔸 <strong>L</strong> = comprimento do cabo em metros (ida e volta)<br>
        🔸 <strong>I</strong> = corrente elétrica em amperes (A)<br>
        🔸 <strong>ρ</strong> = resistividade do material:<br>
        ➝ Cobre = 17,5 Ω·mm²/km<br>
        ➝ Alumínio = 28 Ω·mm²/km<br>
        🔸 <strong>S</strong> = seção do cabo em mm²<br><br>
        O resultado é dado em Volts (V).
    </p>
    `
)
    criarLinha(
        "Energia Consumida",
        `
        <p>
            🔧 Serve para:<br>
            * Saber quantos amperes uma carga consome.<br>
            * Fundamental pra escolher a bitola do fio, disjuntores e proteções.<br><br>
        </p>
        
        <div class="operacoes">
            <p>🔢 Informe dois valores para calcular o terceiro:<br></p>
            <div class="card3Inputs">
                <input type="number" id="valorKh1" class="inputs" placeholder="Potência (W)">
                <input type="number" id="valorKh2" class="inputs" placeholder="Tempo (h)">
                <input type="number" id="valorKh3" class="inputs" placeholder="Valor Kh (R$)">

            </div>

            
            
            <button onclick="calcularKh()" class="botao-calcular">Calcular</button><br><br>
            <p>🧠 Resultado: <span id="resultadoKh"></span></p>
        </div>
        `,
        `
        <p>
            💡 <strong>Explicação:</strong><br>
           <p>Um chuveiro de 5500W ligado 1 hora:<br></p>
           <p>E = 5500 x 1 = 5500 Wh = 5,5 KWh</p>
        <p>Se o kWh custa R$ 1,20, isso dá R$ 6,60.</p>
        </p>
        `
    )

    criarLinha(
        "Cabos para Motores Trifásicos",
        `
        <div class="operacoes">
            <p>🔢 Informe dois valores para calcular o terceiro:<br></p>
            <div class="card3Inputs">
                <input type="number" id="inputcorrente" class="inputs" placeholder="Corrente (A)">
                <input type="number" id="inputdistancia" class="inputs" placeholder="Distância (M)">
                <input type="number" id="inputfase" class="inputs" placeholder="Tensão (v)">

            </div>

            
            
            <button onclick="calcularCabo()" class="botao-calcular">Calcular</button><br><br>
            <p>🧠 Resultado: <span id="resultadoCalcularCabo"></span></p>
        </div>
        `,
        `
        <table>
    <caption>Capacidade de Corrente por Bitola (mm²)</caption>
    <thead>
      <tr>
        <th>Bitola (mm²)</th>
        <th>Corrente (A)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1,5</td><td>15 A</td></tr>
      <tr><td>2,5</td><td>21 A</td></tr>
      <tr><td>4</td><td>28 A</td></tr>
      <tr><td>6</td><td>36 A</td></tr>
      <tr><td>10</td><td>50 A</td></tr>
      <tr><td>16</td><td>68 A</td></tr>
      <tr><td>25</td><td>85 A</td></tr>
      <tr><td>35</td><td>105 A</td></tr>
      <tr><td>50</td><td>125 A</td></tr>
      <tr><td>70</td><td>160 A</td></tr>
      <tr><td>95</td><td>190 A</td></tr>
      <tr><td>120</td><td>215 A</td></tr>
      <tr><td>150</td><td>245 A</td></tr>
      <tr><td>185</td><td>280 A</td></tr>
      <tr><td>240</td><td>325 A</td></tr>
    </tbody>
  </table><br><br>
        📌 Observações:
        <ul>
        <li>Esses valores são aproximados e podem variar conforme:</li>
        <li>Tipo de instalação (bandeja, enterrado, eletroduto, ao ar livre);</li>
        <li>Temperatura ambiente;</li>
        <li>Tipo de isolação (PVC, XLPE, EPR, PP, etc);</li>
        <li>Número de cabos carregados simultaneamente.</li>
        <li>Use os fatores de correção da NBR 5410 para adequar à sua realidade.</li>
        <li>Para motores trifásicos com cabo PP 4 vias, os valores devem considerar a corrente nominal do motor e a queda de tensão admissível (geralmente 4%).</li>
        </ul>













        
        `
    )
}

function calcularOhm() {
    const v1 = parseFloat(document.getElementById('valor1').value);
    const v2 = parseFloat(document.getElementById('valor2').value);
    const opcao = document.getElementById('opcaoOhms').value;
    const resultadoSpan = document.getElementById('resultadoOhm');


    if (isNaN(v1) || isNaN(v2)) {
        resultadoSpan.innerText = 'Preencha os dois valores!';
        return;
    }

    let resultado;
    if (opcao === 'V') {
        resultado = v1 * v2;
        resultadoSpan.innerText = `${resultado.toFixed(2)} Volts (V)`;
    } else if (opcao === 'I') {
        resultado = v1 / v2;
        resultadoSpan.innerText = `${resultado.toFixed(2)} Ampères (A)`;
    } else if (opcao === 'R') {
        resultado = v1 / v2;
        resultadoSpan.innerText = `${resultado.toFixed(2)} Ohms (Ω)`;
    }
}

function calcularPotencia() {
    const v1 = parseFloat(document.getElementById('valorP1').value);
    const v2 = parseFloat(document.getElementById('valorP2').value);
    const resultadoSpan = document.getElementById('resultadoPotencia');


    if (isNaN(v1) || isNaN(v2)) {
        resultadoSpan.innerText = 'Preencha os dois valores!';
        return;
    }

    let resultado = v1 * v2;
    
    resultadoSpan.innerHTML = `${resultado}W`
      
}

function calcularPotenciaTrifasica(){
    const v1 = parseFloat(document.getElementById('valorPt1').value);
    const v2 = parseFloat(document.getElementById('valorPt2').value);
    const v3 = parseFloat(document.getElementById('valorPt3').value);
    const trifasico = Math.sqrt(3);// Raiz de 3 ≈ 1.732 


    const resultadoSpan = document.getElementById('resultadoPotenciaTrifasica');


    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
        resultadoSpan.innerText = 'Preencha os três valores!';
        return;
    }else{
        let resultado = trifasico * v1 * v2 * v3

        resultadoSpan.innerHTML = `Em ${v1} Trifásico, ${resultado.toFixed(2)}W de Potência`
    }

}

function calcularCorrente(){
    const v1 = parseFloat(document.getElementById('valorCC1').value);
    const v2 = parseFloat(document.getElementById('valorCC2').value);
    const resultadoSpan = document.getElementById('resultadoCorrente');


    if (isNaN(v1) || isNaN(v2)) {
        resultadoSpan.innerText = 'Preencha os dois valores!';
        return;
    }

    let resultado = v1 / v2;
    
    resultadoSpan.innerHTML = `${resultado.toFixed(2)}A`
}

function calcularQuedaTensao() {
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const comprimentoTotal = comprimento * 2
    const corrente = parseFloat(document.getElementById('corrente').value);
    const secao = parseFloat(document.getElementById('secao').value);
    const material = document.getElementById('material').value;

    const resultadoSpan = document.getElementById('resultadoQueda');

    if (isNaN(comprimento) || isNaN(corrente) || isNaN(secao)) {
        resultadoSpan.innerText = 'Preencha todos os valores!';
        return;
    }

    const resistividade = material === 'cobre' ? 17.5 : 28;

    const queda = (2 * comprimentoTotal * corrente * (resistividade / secao)) / 1000;

    resultadoSpan.innerHTML = `A queda de tensão é ${queda.toFixed(2)} V`;
}

function atualizarPlaceholdersLeiDeOhms() {
    const opcao = document.getElementById('opcaoOhms').value;
    const input1 = document.getElementById('valor1');
    const input2 = document.getElementById('valor2');

    // Limpa os valores dos inputs
    input1.value = '';
    input2.value = '';

    // Atualiza os placeholders conforme a opção selecionada
    if (opcao === 'V') {
        input1.placeholder = 'Resistência (Ω)';
        input2.placeholder = 'Corrente (A)';
    } else if (opcao === 'I') {
        input1.placeholder = 'Tensão (V)';
        input2.placeholder = 'Resistência (Ω)';
    } else if (opcao === 'R') {
        input1.placeholder = 'Tensão (V)';
        input2.placeholder = 'Corrente (A)';
    }

    // Também limpa o resultado anterior, se quiser
    document.getElementById('resultadoOhms').innerText = '';
}

function calcularKh (){
    const v1 = parseFloat(document.getElementById('valorKh1').value);
    const v2 = parseFloat(document.getElementById('valorKh2').value);
    const v3 = parseFloat(document.getElementById('valorKh3').value);
    const resultadoSpan = document.getElementById('resultadoKh');


    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
        resultadoSpan.innerText = 'Preencha os dois valores!';
        return;
    }

    let resultadokh = (v1 * v2) / 1000;
    let valorGasto = resultadokh * v3

    
    resultadoSpan.innerHTML = `Se o KWh custa R$${v3}, e você gastou ${resultadokh}. Isso dá R$${valorGasto}`
}

function calcularCabo() {
      const corrente = parseFloat(document.getElementById("inputcorrente").value);
      const distancia = parseFloat(document.getElementById("inputdistancia").value);
      const distanciaTotal = distancia * 2
      const tensao = parseFloat(document.getElementById("inputfase").value);
      const resultadoSpan = document.getElementById('resultadoCalcularCabo');
      if (isNaN(corrente) || isNaN(distancia)) {
        resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
      }

      const resistividade = 0.0175; // cobre, em ohm*mm²/km
      const quedaMax = tensao * 0.04; // 4% da tensão
      const bitola = (2 * resistividade * distanciaTotal * corrente) / quedaMax;

      let bitolaAproximada;
      if (bitola <= 2.5) bitolaAproximada = "2,5 mm²";
      else if (bitola <= 4) bitolaAproximada = "4 mm²";
      else if (bitola <= 6) bitolaAproximada = "6 mm²";
      else if (bitola <= 10) bitolaAproximada = "10 mm²";
      else if (bitola <= 16) bitolaAproximada = "16 mm²";
      else if (bitola <= 25) bitolaAproximada = "25 mm²";
      else bitolaAproximada = "+25 mm² (Consultar projeto). Obs: em explicação tem uma tabela com as correntes suportadas";

      resultadoSpan.innerHTML = `✅ Bitola mínima recomendada: <strong>${bitolaAproximada}</strong><br/>
        🔌 Tipo de cabo: <strong>PP 4 vias</strong><br/>
        📏 Distância: <strong>${distancia}m</strong> — ⚡ Corrente: <strong>${corrente}A</strong>`


    }


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




    








