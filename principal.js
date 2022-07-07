var tela = document.querySelector('tela');
var clique = document.querySelector('button');

function sorteiaFrase(){
    var frases = ['Passou a vez', 'Você bebe :)', 'Escolha alguém para beber', 
    'A pessoa a sua direita bebe', 'A pessoa a sua esquerda bebe', 'A pessoa a sua frente bebe',
    'Todo mundo bebe menos você', 'Só as mulheres bebem', 'Só os homens bebem', 
    'Escolha alguém para beber com você', 'Beba e rode novamente'];

    var fraseEscolhida = frases[Math.ceil(Math.random() * (frases.length - 1))];
    var mostra = document.getElementById('tela').value = fraseEscolhida;
}

tela = clique.onclick = sorteiaFrase;