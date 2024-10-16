
/* foi nescessário incluir comentários para essas constantes e funções 
para o aprendizado e entender o que cada etapa faz com a ajuda da Aluri.

Explicação Passo a Passo

imagensCertificados.forEach((imagem) => { ... }):

Aqui, imagensCertificados é uma NodeList (ou seja, uma lista de elementos) que
 contém todas as imagens de certificados selecionadas anteriormente com 
 document.querySelectorAll('.meusCertificados img').
O método .forEach() é utilizado para iterar sobre cada elemento dessa lista. 
Para cada imagem, uma função anônima é chamada, onde imagem é a referência 
para a imagem atual na iteração.


imagem.addEventListener('click', () => { ... }):

Para cada imagem, um evento de clique (click) é adicionado. Isso significa
 que sempre que a imagem for clicada, a função dentro do
  addEventListener será executada.


janelaSpan.style.display = 'flex';:

Quando a imagem é clicada, o código altera o estilo do modal (neste caso, janelaSpan)
 para que ele seja exibido. A propriedade display: flex faz com que o modal se 
 torne visível na tela. Sem essa linha, o modal permaneceria oculto.


imagemJanelaSpan.src = imagem.src;:

Esta linha define a fonte (src) da imagem exibida no modal (imagemJanelaSpan)
 para ser igual à da imagem que foi clicada. Isso permite que o modal mostre
  a imagem correspondente ao certificado que o usuário clicou.
*/

// cada constante recebe o id do elemento HTML chamado de janelaSpan
const janelaSpan = document.getElementById('janelaSpan');

const imagemJanelaSpan = document.getElementById('imagemJanelaSpan');

const fechar = document.querySelector('.fechar');

const botaoTopoPagina = document.getElementById('btnTop');



// essa constante recebe todas as imagens de certificados
const imagensCertificados = document.querySelectorAll('.meusCertificados img');

// essa função faz com que  cada imagem adiciona um evento de clique em cada uma.
// esse forEach percorre todas as imagens de certificados 
//e atribui um evento de clique a cada uma delas.

imagensCertificados.forEach((imagem) => {
  imagem.addEventListener('click', () => {
    janelaSpan.style.display = 'flex'; 
    imagemJanelaSpan.src = imagem.src; 
  });
});

// essa função fecha a janela  ao clicar no "X"

fechar.addEventListener('click', () => {
  janelaSpan.style.display = 'none';
});

// essa função fecha a janela  ao clicar fora da imagem 

janelaSpan.addEventListener('click', (e) => {
  if (e.target === janelaSpan) {
    janelaSpan.style.display = 'none';
  }
});

// essa função mostra o botão quando rolar para baixo
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      botaoTopoPagina.style.display = "block";
  } else {
      botaoTopoPagina.style.display = "none";
  }
};

// essa função volta ao topo ao clicar no botão
botaoTopoPagina.onclick = function() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
};


