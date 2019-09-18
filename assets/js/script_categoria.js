/*
  É muito importante que todo seu código fique dentro deste
  document.addEventListener, pois isso garante que ele vai
  rodar apenas quando toda a página estiver carregada. Isso
  foi explicado no Material Prévio de JavaScript da Aula 9.
*/
document.addEventListener('DOMContentLoaded', function() {

  /*
    Cria uma conexão com o Firebase.
  */

  let db = coDesConnect("https://portfolio-5298e.firebaseio.com/")

  /*
    Captura os parametros enviados para a pagina
  */

  let parametros = coDesExtract()

  /*
    Define a categoria da pagina
  */
  let categoria;

  if (parametros.hasOwnProperty("categoria")) {
    categoria = parametros["categoria"]
  }

  /*
   Muda os valores dentro do html.
  */

  db.download("portfolio", function(data) {

    /*
      Verifica se a data contem a categoria em questão
    */

    if (!data.hasOwnProperty(categoria)) {
      console.log("Erro -> Categoria não idendificada");
      
      categoria = "fisico"
    }
    categoria = categoria.toLowerCase()

    /*
      Muda o titulo da pagina
    */

    window.document.title = categoria.charAt(0).toUpperCase() + categoria.slice(1)

    coDesReplace(".h2_b1", categoria)
    coDesReplace(".texto1", data[categoria])

    document.body.innerHTML = document.body.innerHTML.replace(/qual_categoria/g, categoria)

    coDesReplace(".projetos", data[categoria])
  })
})