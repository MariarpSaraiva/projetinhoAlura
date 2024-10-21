function search(){
    let section = document.getElementById('pesquisa')
    

    let campoPesquisa = document.getElementById('campoPesquisa').value

    if(campoPesquisa == ""){
        section.innerHTML = "Nada foi encontrado"
        return
        
    }

    let resultados = "";

    var pesquisa = document.getElementById('pesquisa')
    //o for lista os dados um por um, logo, ele substitui a variável dados
    for(let dado of dados){
        //includes é utilizado para saber se certo elemento está incluso na variável ou parametro escolhido
        if(dado.titulo.includes(campoPesquisa)){

            resultados += `
            <section class="sec3">
                    <h2>${dado.titulo}</h2> <hr>
    
                    <p>${dado.descricao}</p>
    
                        <a href=${dado.link}>Saiba Mais</a>
                </section>
    
        `
        }
        //+= utilizado para adicionar os resultados ao invés de substituir eles

       
    }
    pesquisa.innerHTML = resultados

}







