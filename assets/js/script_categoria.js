/*
  É muito importante que todo seu código fique dentro deste
  document.addEventListener, pois isso garante que ele vai
  rodar apenas quando toda a página estiver carregada. Isso
  foi explicado no Material Prévio de JavaScript da Aula 9.
*/
document.addEventListener('DOMContentLoaded', function() {

  /*
    A função coDesConnect cria uma conexão com o Firebase.
  */

  let db = coDesConnect("https://portfolio-5298e.firebaseio.com/")
  /*
   CAPTURAS DOS DADOS
  */

  db.download("portfolio", function(data) {
    coDesReplace(".descricao_categoria", data["fisico"])
    coDesReplace(".projetos", data["fisico"])
  })
})