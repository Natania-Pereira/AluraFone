const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTelefone = document.querySelector('input[type=tel]');

for (i = 0; i < listaDeTeclas.length; i++) {

  const tecla = listaDeTeclas[i];

  tecla.onclick = function () {
    inputTelefone.value = inputTelefone.value + tecla.value;
  }
  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }

}

// Primeiro, você precisa criar uma referência para receber a lista com todas as teclas do AluraFone e uma outra para capturar o input Digite seu telefone, que no caso do código foi const listaDeTeclas e const inputTel, respectivamente.

// O segundo passo é criar o laço de repetição for, que vai percorrer a lista de teclas, por esta razão, a condição do for é indice < listaDeTeclas.length, ou seja, enquanto o indice for menor que o tamanho de listaDeTeclas, executa um comando.

// Dentro do for, é necessário que se crie uma referência constante const tecla para que a cada iteração, receba o valor correspondente da tecla listaDeTeclas[indice].

// Após isto, adicione no onclick uma função anônima que receberá o valor do campo Digite seu telefone inputTel.value, e atribua a ela a soma entre o valor do campo Digite seu telefone e o valor da tecla clicada tecla.value, ficando inputTel.value = inputTel.value + tecla.value.