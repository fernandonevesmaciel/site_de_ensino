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

function carregar(){
    
    res.innerHTML = `<h2>Programações básicas</h2>`

    criarLinha(
        "Gira/para chave seletora",
        `
            <h2> Programando gira/para com chave seletora</h2> <br><br>
            
            <img src="../imagens/gira-para chave seletora.jpg" alt="inversor com chave seletora em modo gira/para" class="imagemProgramacao"> <br>

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
                    <td>Resetar o inversor de Fábrica</td>
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
                    <td>P263</td>
                    <td> 1 </td>
                    <td>GIRA/PARA</td>
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
            Comentario de cada parâmetro e o porque foi usado cada valor nele:<br><br>
            <strong>P000</strong> = conforme explicado na própria tabela esse parâmetro quando já programado, serve para proteger a alteração dos parâmetros só podendo ter acesso aos parâmetros quando digitado corretamente a senha.(essa senha pode ser alterada ou adicionada no parâmetro P200.)<br>
            <strong>P204</strong> = Usado nessa operação para resetar de fábrica as configurações do inversor para que não tenha conflito com as programações já existentes no inversor com as novas a serem feitas.<br>
            <strong>P100</strong> = Rampa de aceleração, esse parâmetro serve para que regule o tempo que o motor irá atingir sua velocidade máxima em Hz conforme estipulado no P134 e por sua referência de velocidade sendo que pode ser manual via HMI ou por potênciometro digital ou análogico.<br>
            <strong>P101</strong> = Rampa de desaceleração, esse parâmetro serve para fazer a desacelaração do motor. Sendo aconselhado para motores que tenha um risco que precise parar de forma rápida deixa-lo o menor tempo possível que não atrapalhe na performanace do motor.<br>
            <strong>P133</strong> = Velocidade mínima em HZ, quando o inversor ligado em operação ele irá partir da velocidade mínima chegando até a máxima ou caso por um potênciometro ou pela tela HMI do inversor irá diminuir até chegar nessa velocidade que foi estipulada nesse parâmetro.<br>
            <strong>P134</strong> = Velocidade máxima em Hz, quando inversor ligado em operação ele irá chegar até a velocidade estipulada por esse parâmetro sendo controlada por potênciometro ou pela tela HMI do inversor.<br>
            <strong>P156</strong> = Corrente 1.1x a nominal do motor, conforme conferido na placa de informação presente no motor para que tenha uma segurança maior para o motor e evitar a queima do mesmo por sobrecarga, a fabricante do inversor aconselha a deixar esse parâmetro em 1.1 vezes a corrente nominal encontrada na placa do motor sendo quando ultrapassar essa corrente o inversor entrará em falha geralmente F0070 (sobrecorrente/curto-circuito) ou F0072 (sobrecarga do motor).<br>
            <strong>P157</strong> = Corrente 1.0x a nominal do motor, ou seja a informação presente na placa do motor informando ao inversor que o motor está rodando com uma corrente de sobrecarga de 50%.<br>
            <strong>P158</strong> = Corrente 0.8x a nominal do motor, ou seja a informação presente na placa do motor vezes 0.8 para informar ao inversor que o motor está rodando com uma corrente de sobrecarga de 5%.<br>
            <strong>P220</strong> = Seleção de LOC/REM, inserido o valor 1 sempre remoto para o inversor ligue e realize outras funções de forma remoto.<br>
            <strong>P222</strong> = Seleção de referência de velocidade, nessa operação iremos controlar a velocidade do inversor de forma manual por sua tela HMI por isso inserido o valor 0 no parâmetro 0 = telacas HMI.<br>
            <strong>P226</strong> = seleção do sentido de giro modo remoto, esse parâmetro serve para definirmos em qual sentido o motor irá rodar de forma remoto, sendo que possa ser alterado quando o motor não rodar para o sentido desejado.<br>
            <strong>P263</strong> = Parâmetro onde defino a função da entrada digital Dl1 do inversor. inserido o valor 1 para o inversor rodar em GIRA/PARA quando acionado e desacionado a chave seletora.<br>
            <strong>P271</strong> = Parâmetro onde defino se as entradas digital serão acionadas de forma PNP (acionada com 24v) NPN (acionada com 0V). Inserido 8 para que todas as entradas digitais sejam acionadas de forma PNP.<br>

        </p>


            </p>
        `
    );

    criarLinha(
        "Liga/desliga por botões",
        `
         <h2> Programando liga e desliga com botões de pulso</h2> <br><br>
            
            <img src="../imagens/liga-desliga botão de pulso.jpg" alt="inversor com botões de pulso" class="imagemProgramacao"> <br>

            <p id="textoTutorial">
                Com os botões de pulso ligados o contato aberto no bornes 1 = dl1, contato fechado no borne 3 = dl2  e os dois contatos em comum no borne 9 = 24v do inversor, estamos a usar o inversor em PNP.
                essa ligação geralmente usada para ligar e desligar o inversor de forma remota a distância ou na porta do painel.<br><br>

                Parâmetros de programação para o LIGA/DESLIGA:<br><br>

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
                    <td>Resetar o inversor de Fábrica</td>
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
                    <td>P263</td>
                    <td> 6 </td>
                    <td>start</td>
                </tr>

                <tr>
                    <td>P264</td>
                    <td> 7 </td>
                    <td>stop</td>
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
            Comentario de cada parâmetro e o porque foi usado cada valor nele:<br><br>
            <strong>P000</strong> = conforme explicado na própria tabela esse parâmetro quando já programado, serve para proteger a alteração dos parâmetros só podendo ter acesso aos parâmetros quando digitado corretamente a senha.(essa senha pode ser alterada ou adicionada no parâmetro P200.)<br>
            <strong>P204</strong> = Usado nessa operação para resetar de fábrica as configurações do inversor para que não tenha conflito com as programações já existentes no inversor com as novas a serem feitas.<br>
            <strong>P100</strong> = Rampa de aceleração, esse parâmetro serve para que regule o tempo que o motor irá atingir sua velocidade máxima em Hz conforme estipulado no P134 e por sua referência de velocidade sendo que pode ser manual via HMI ou por potênciometro digital ou análogico.<br>
            <strong>P101</strong> = Rampa de desaceleração, esse parâmetro serve para fazer a desacelaração do motor. Sendo aconselhado para motores que tenha um risco que precise parar de forma rápida deixa-lo o menor tempo possível que não atrapalhe na performanace do motor.<br>
            <strong>P133</strong> = Velocidade mínima em HZ, quando o inversor ligado em operação ele irá partir da velocidade mínima chegando até a máxima ou caso por um potênciometro ou pela tela HMI do inversor irá diminuir até chegar nessa velocidade que foi estipulada nesse parâmetro.<br>
            <strong>P134</strong> = Velocidade máxima em Hz, quando inversor ligado em operação ele irá chegar até a velocidade estipulada por esse parâmetro sendo controlada por potênciometro ou pela tela HMI do inversor.<br>
            <strong>P156</strong> = Corrente 1.1x a nominal do motor, conforme conferido na placa de informação presente no motor para que tenha uma segurança maior para o motor e evitar a queima do mesmo por sobrecarga, a fabricante do inversor aconselha a deixar esse parâmetro em 1.1 vezes a corrente nominal encontrada na placa do motor sendo quando ultrapassar essa corrente o inversor entrará em falha geralmente F0070 (sobrecorrente/curto-circuito) ou F0072 (sobrecarga do motor).<br>
            <strong>P157</strong> = Corrente 1.0x a nominal do motor, ou seja a informação presente na placa do motor informando ao inversor que o motor está rodando com uma corrente de sobrecarga de 50%.<br>
            <strong>P158</strong> = Corrente 0.8x a nominal do motor, ou seja a informação presente na placa do motor vezes 0.8 para informar ao inversor que o motor está rodando com uma corrente de sobrecarga de 5%.<br>
            <strong>P220</strong> = Seleção de LOC/REM, inserido o valor 1 sempre remoto para o inversor ligue e realize outras funções de forma remoto.<br>
            <strong>P222</strong> = Seleção de referência de velocidade, nessa operação iremos controlar a velocidade do inversor de forma manual por sua tela HMI por isso inserido o valor 0 no parâmetro 0 = telacas HMI.<br>
            <strong>P226</strong> = seleção do sentido de giro modo remoto, esse parâmetro serve para definirmos em qual sentido o motor irá rodar de forma remoto, sendo que possa ser alterado quando o motor não rodar para o sentido desejado.<br>
            <strong>P263</strong> = Parâmetro onde defino a função da entrada digital Dl1 do inversor. Inserido 6 para definir como start ou seja para ligar o inversor deixando em modo RUN. Obs:. ele chegará a sua velocidade máxima P134 conforme o tempo de aceleração definido no P100.<br>
            <strong>P264</strong> = Parâmetro onde defino a função da entrada digital Dl2 do inversor. Inserido 7 para definir como stop ou seja para desligar o inversor. Obs:. ele desligará conforme o tempo de desaceleração definido no P101.<br>
            <strong>P271</strong> = Parâmetro onde defino se as entradas digital serão acionadas de forma PNP (acionada com 24v) NPN (acionada com 0V). Inserido 8 para que todas as entradas digitais sejam acionadas de forma PNP.<br>

        </p>


            </p>

        `
        
    )

    criarLinha(
        "Potênciometro análogico",
        `
        <h2>
            Chave seletora com controle de velocidade por potênciometro análogico.
        </h2>

            <img src="../imagens/gira-para com potênciometro.jpg" alt="inversor com chave seletora em modo gira/para" class="imagemProgramacao"> <br>

            <p id="textoTutorial">
                Com a chave seletora ligada nos bornes 1 = dl1 e no borne 9 = 24v do inversor estamos a usar o inversor em PNP, também ligaremos o potênciometro análogico sendo borne 4 = GND do inversor no Z2 do potênciometro, borne 6 = Al1 do inversor no Z3 do potênciometro, borne 8 = +10v do inversor no Z1 do potênciomento. Obs:. caso esteja invertido quando aumento o potênciometro ele abaixa a velocidade terá que inverter no potênciometro Z1 pelo Z2, seguindo esse esquema de ligação no potênciometro do modelo a cima. Caso seu modelo de potênciometro seja diferente leia o manual antes para verificar onde ligar os seguintes cabos saindo do inversor.<br><br>

                Parâmetros de programação para GIRA/PARA com potênciometro análogico:<br><br>

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
                    <td>Resetar o inversor de Fábrica</td>
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
                    <td> 1 </td>
                    <td>Referência de velocidade Remoto</td>
                </tr>
                 <tr>
                    <td>P226</td>
                    <td> 1 </td>
                    <td>Sentido de giro Remoto</td>
                </tr>

                <tr>
                    <td>P263</td>
                    <td> 1 </td>
                    <td>GIRA/PARA</td>
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
            Comentario de cada parâmetro e o porque foi usado cada valor nele:<br><br>
            <strong>P000</strong> = conforme explicado na própria tabela esse parâmetro quando já programado, serve para proteger a alteração dos parâmetros só podendo ter acesso aos parâmetros quando digitado corretamente a senha.(essa senha pode ser alterada ou adicionada no parâmetro P200.)<br>
            <strong>P204</strong> = Usado nessa operação para resetar de fábrica as configurações do inversor para que não tenha conflito com as programações já existentes no inversor com as novas a serem feitas.<br>
            <strong>P100</strong> = Rampa de aceleração, esse parâmetro serve para que regule o tempo que o motor irá atingir sua velocidade máxima em Hz conforme estipulado no P134 e por sua referência de velocidade sendo que pode ser manual via HMI ou por potênciometro digital ou análogico.<br>
            <strong>P101</strong> = Rampa de desaceleração, esse parâmetro serve para fazer a desacelaração do motor. Sendo aconselhado para motores que tenha um risco que precise parar de forma rápida deixa-lo o menor tempo possível que não atrapalhe na performanace do motor.<br>
            <strong>P133</strong> = Velocidade mínima em HZ, quando o inversor ligado em operação ele irá partir da velocidade mínima chegando até a máxima ou caso por um potênciometro ou pela tela HMI do inversor irá diminuir até chegar nessa velocidade que foi estipulada nesse parâmetro.<br>
            <strong>P134</strong> = Velocidade máxima em Hz, quando inversor ligado em operação ele irá chegar até a velocidade estipulada por esse parâmetro sendo controlada por potênciometro ou pela tela HMI do inversor.<br>
            <strong>P156</strong> = Corrente 1.1x a nominal do motor, conforme conferido na placa de informação presente no motor para que tenha uma segurança maior para o motor e evitar a queima do mesmo por sobrecarga, a fabricante do inversor aconselha a deixar esse parâmetro em 1.1 vezes a corrente nominal encontrada na placa do motor sendo quando ultrapassar essa corrente o inversor entrará em falha geralmente F0070 (sobrecorrente/curto-circuito) ou F0072 (sobrecarga do motor).<br>
            <strong>P157</strong> = Corrente 1.0x a nominal do motor, ou seja a informação presente na placa do motor informando ao inversor que o motor está rodando com uma corrente de sobrecarga de 50%.<br>
            <strong>P158</strong> = Corrente 0.8x a nominal do motor, ou seja a informação presente na placa do motor vezes 0.8 para informar ao inversor que o motor está rodando com uma corrente de sobrecarga de 5%.<br>
            <strong>P220</strong> = Seleção de LOC/REM, inserido o valor 1 sempre remoto para o inversor ligue e realize outras funções de forma remoto.<br>
            <strong>P222</strong> = Seleção de referência de velocidade, inserindo o valor 1 no parâmetro nessa operação iremos controlar a velocidade do inversor de forma remota usando um potênciometro análogico.<br>
            <strong>P226</strong> = seleção do sentido de giro modo remoto, esse parâmetro serve para definirmos em qual sentido o motor irá rodar de forma remoto, sendo que possa ser alterado quando o motor não rodar para o sentido desejado.<br>
            <strong>P263</strong> = Parâmetro onde defino a função da entrada digital Dl1 do inversor. inserido o valor 1 para o inversor rodar em GIRA/PARA quando acionado e desacionado a chave seletora.<br>
            <strong>P271</strong> = Parâmetro onde defino se as entradas digital serão acionadas de forma PNP (acionada com 24v) NPN (acionada com 0V). Inserido 8 para que todas as entradas digitais sejam acionadas de forma PNP.<br>

        </p>


            </p>

            <h2> Programando liga e desliga com botões de pulso e potênciometro análogico</h2> <br><br>
            
            <img src="../imagens/liga-desliga com potênciometro.jpg" alt="inversor com botões de pulso" class="imagemProgramacao"> <br>

            <p id="textoTutorial">
                Com os botões de pulso ligados o contato aberto no bornes 1 = dl1, contato fechado no borne 3 = dl2  e os dois contatos em comum no borne 9 = 24v do inversor, estamos a usar o inversor em PNP.
                Também ligaremos o potênciometro análogico sendo borne 4 = GND do inversor no Z2 do potênciometro, borne 6 = Al1 do inversor no Z3 do potênciometro, borne 8 = +10v do inversor no Z1 do potênciomento. Obs:. caso esteja invertido quando aumento o potênciometro ele abaixa a velocidade terá que inverter no potênciometro Z1 pelo Z2, seguindo esse esquema de ligação no potênciometro do modelo a cima. Caso seu modelo de potênciometro seja diferente leia o manual antes para verificar onde ligar os seguintes cabos saindo do inversor<br><br>

                Parâmetros de programação para o LIGA/DESLIGA:<br><br>

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
                    <td>Resetar o inversor de Fábrica</td>
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
                    <td> 1 </td>
                    <td>Referência de velocidade Remoto</td>
                </tr>
                 <tr>
                    <td>P226</td>
                    <td> 1 </td>
                    <td>Sentido de giro Remoto</td>
                </tr>

                <tr>
                    <td>P263</td>
                    <td> 6 </td>
                    <td>start</td>
                </tr>

                <tr>
                    <td>P264</td>
                    <td> 7 </td>
                    <td>stop</td>
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
            Comentario de cada parâmetro e o porque foi usado cada valor nele:<br><br>
            <strong>P000</strong> = conforme explicado na própria tabela esse parâmetro quando já programado, serve para proteger a alteração dos parâmetros só podendo ter acesso aos parâmetros quando digitado corretamente a senha.(essa senha pode ser alterada ou adicionada no parâmetro P200.)<br>
            <strong>P204</strong> = Usado nessa operação para resetar de fábrica as configurações do inversor para que não tenha conflito com as programações já existentes no inversor com as novas a serem feitas.<br>
            <strong>P100</strong> = Rampa de aceleração, esse parâmetro serve para que regule o tempo que o motor irá atingir sua velocidade máxima em Hz conforme estipulado no P134 e por sua referência de velocidade sendo que pode ser manual via HMI ou por potênciometro digital ou análogico.<br>
            <strong>P101</strong> = Rampa de desaceleração, esse parâmetro serve para fazer a desacelaração do motor. Sendo aconselhado para motores que tenha um risco que precise parar de forma rápida deixa-lo o menor tempo possível que não atrapalhe na performanace do motor.<br>
            <strong>P133</strong> = Velocidade mínima em HZ, quando o inversor ligado em operação ele irá partir da velocidade mínima chegando até a máxima ou caso por um potênciometro ou pela tela HMI do inversor irá diminuir até chegar nessa velocidade que foi estipulada nesse parâmetro.<br>
            <strong>P134</strong> = Velocidade máxima em Hz, quando inversor ligado em operação ele irá chegar até a velocidade estipulada por esse parâmetro sendo controlada por potênciometro ou pela tela HMI do inversor.<br>
            <strong>P156</strong> = Corrente 1.1x a nominal do motor, conforme conferido na placa de informação presente no motor para que tenha uma segurança maior para o motor e evitar a queima do mesmo por sobrecarga, a fabricante do inversor aconselha a deixar esse parâmetro em 1.1 vezes a corrente nominal encontrada na placa do motor sendo quando ultrapassar essa corrente o inversor entrará em falha geralmente F0070 (sobrecorrente/curto-circuito) ou F0072 (sobrecarga do motor).<br>
            <strong>P157</strong> = Corrente 1.0x a nominal do motor, ou seja a informação presente na placa do motor informando ao inversor que o motor está rodando com uma corrente de sobrecarga de 50%.<br>
            <strong>P158</strong> = Corrente 0.8x a nominal do motor, ou seja a informação presente na placa do motor vezes 0.8 para informar ao inversor que o motor está rodando com uma corrente de sobrecarga de 5%.<br>
            <strong>P220</strong> = Seleção de LOC/REM, inserido o valor 1 sempre remoto para o inversor ligue e realize outras funções de forma remoto.<br>
            <strong>P222</strong> = Seleção de referência de velocidade, inserindo o valor 1 no parâmetro nessa operação iremos controlar a velocidade do inversor de forma remota usando um potênciometro análogico.<br>
            <strong>P226</strong> = seleção do sentido de giro modo remoto, esse parâmetro serve para definirmos em qual sentido o motor irá rodar de forma remoto, sendo que possa ser alterado quando o motor não rodar para o sentido desejado.<br>
            <strong>P263</strong> = Parâmetro onde defino a função da entrada digital Dl1 do inversor. Inserido 6 para definir como start ou seja para ligar o inversor deixando em modo RUN. Obs:. ele chegará a sua velocidade máxima P134 conforme o tempo de aceleração definido no P100.<br>
            <strong>P264</strong> = Parâmetro onde defino a função da entrada digital Dl2 do inversor. Inserido 7 para definir como stop ou seja para desligar o inversor. Obs:. ele desligará conforme o tempo de desaceleração definido no P101.<br>
            <strong>P271</strong> = Parâmetro onde defino se as entradas digital serão acionadas de forma PNP (acionada com 24v) NPN (acionada com 0V). Inserido 8 para que todas as entradas digitais sejam acionadas de forma PNP.<br>

        </p>


            </p>
            
        `

    )

    criarLinha(
        "Potênciometro Digital", `
        `
    )

    res2.innerHTML = `<h2>Programação WLP</h2>`
    criarLinha2(
        "Como baixar o software", 
        `
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
    conteudoDiv.style.display = 'none';

    // Adiciona o conteúdo que veio no parâmetro
    const conteudoInterno = document.createElement('div');
    conteudoInterno.innerHTML = conteudoHtml;
    conteudoDiv.appendChild(conteudoInterno);

    // 🔥 Cria o botão de fechar
    const botaoFechar = document.createElement('button');
    botaoFechar.innerText = 'Fechar Janela';
    botaoFechar.classList.add('botao-fechar');
    botaoFechar.style.marginTop = '10px';

    botaoFechar.addEventListener('click', () => {
        conteudoDiv.style.display = 'none';
        botao.innerText = '+';
    });

    // Adiciona o botão de fechar ao conteúdo
    conteudoDiv.appendChild(botaoFechar);

    // Evento do botão principal (abre/fecha)
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
    linha.appendChild(conteudoDiv);

    document.getElementById('res').appendChild(linha);
}

function criarLinha2(titulo, conteudoHtml) {
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

    // Adiciona o conteúdo que veio no parâmetro
    const conteudoInterno = document.createElement('div');
    conteudoInterno.innerHTML = conteudoHtml;
    conteudoDiv.appendChild(conteudoInterno);

    // 🔥 Cria o botão de fechar
    const botaoFechar = document.createElement('button');
    botaoFechar.innerText = 'Fechar Janela';
    botaoFechar.classList.add('botao-fechar');
    botaoFechar.style.marginTop = '10px';

    botaoFechar.addEventListener('click', () => {
        conteudoDiv.style.display = 'none';
        botao.innerText = '+';
    });

    // Adiciona o botão de fechar ao conteúdo
    conteudoDiv.appendChild(botaoFechar);

    // Evento do botão principal (abre/fecha)
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
    linha.appendChild(conteudoDiv);

    document.getElementById('res2').appendChild(linha);
}







