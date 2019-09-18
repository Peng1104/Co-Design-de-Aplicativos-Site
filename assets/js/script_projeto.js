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
    Define o projeto a ser abordado
  */

  let projeto;

  if (parametros.hasOwnProperty("projeto")) {
    projeto = parametros["projeto"]
  }

  /*
   Muda os valores dentro do html.
  */

  db.download("portfolio", function(data) {

    /*
      Verifica se a data contem a categoria e o projeto em questão
    */

    if (!data.hasOwnProperty(categoria)) {
      console.log("Erro -> Categoria não idendificada");

      categoria = "fisico";
      projeto = "meteorologico";
    }
    if (!data[categoria]["projetos"].hasOwnProperty(projeto)) {
      console.log("Erro -> Projeto não idendificado");

      categoria = "fisico";
      projeto = "meteorologico";
    }
    categoria = categoria.toLowerCase()

    document.body.innerHTML = document.body.innerHTML.replace(/qual_categoria/g, categoria)

    /*
      Muda o titulo da pagina
    */

    window.document.title = projeto.charAt(0).toUpperCase() + projeto.slice(1)

    coDesReplace(".subbloco1", data[categoria]["projetos"][projeto])
    coDesReplace(".subbloco2", projeto)
    coDesReplace(".bloco2", data[categoria]["projetos"][projeto])
  })
})