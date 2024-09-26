const imagemGato = document.getElementById('gato');

function buscarNovaImagem() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(resposta => resposta.json())
    .then(dados => {
      imagemGato.src = dados[0].url;
    })
    .catch(erro => {
      console.error('Erro ao buscar imagem:', erro);
    });
}