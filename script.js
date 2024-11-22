function Buscar(){
    //Aqui estou criando uma variável com o link da API!
     let url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`;
     fetch(url) //Aqui estou fazendo uma requisição para a API e aguardando a resposta(!)
         .then(response => response.json()) // Eu espero a resposta da API, e transformo ela em Json!
         .then(data => { // Recebo os dados dela!
             let imageURL = data[0].url;  //Pego valor inicial da primeira resposta!
             let gatoDiv = document.getElementById("gato");//Apenas pegando DIV do HTMl, e trazendo pra cá!
             gatoDiv.innerHTML = `<img src="${imageURL}">`; //Estou apenas trocando elemnto DIV de gato pra imagem.
         })
         .catch(error => { //Aqui caso dê algo de errado!
             console.error("Erro ao buscar imagem:", error);
         });
 }
 