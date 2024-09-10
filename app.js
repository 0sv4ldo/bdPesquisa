function pesquisar() {
    //Obtem a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //console.log(campoPesquisa);

    if (!campoPesquisa){
        section.innerHTML="<p> Nada foi encontrato!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

// inicializa uma tring vazia para armazenar os resultados
let resultados ="";
let titulo = "";
let descricao = "";
let tags = "";

// Itera sobrer cada dado da lista de dados
for(let dado of dados) {

    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      
 resultados +=  `

 <div class="item-resultado">
 
 <h3><a href="#" target="_blank">${dado.titulo}</a></h3>
 
 <P class="descricao-meta">${dado.descricao}</P>
 <a href="${dado.link}" target="_blank">Ler mais...</a>
 </div>
 
 `;

    }

}

if(!resultados){

    resultados = "<p> Nada foi encontrado! </p>"

}

section.innerHTML = resultados


}



