const Publicacao = {
    init: () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        Publicacao.buildPost(id);
    },
    getPost: async (id) => {
        const response = await fetch(`publicar/posts/${id}`, {
            method: 'get'
        })
        const post = await response.json();
        console.log(post);

        return post;
    },
    buildPost: async (id) => {
        const post = await Publicacao.getPost(id);

        const postContainer = document.querySelector('.align-publicacao');
        
        postContainer.innerHTML = `
        <div class="container align-publicacao">
            <h1>${post.titulo}</h1>
            <p class="coment-pub">${post.descricao}</p>
            <p class="data-pub">15 de Maio de 2021 às 15h58</p>

            <div class="imagem-pub" style="background-image: url(${post.imagem})"></div>

            <div class="container-pub">
                <p class="text-pub">${post.conteudo}</p>
            </div>
        </div>`;

        // const tituloPost = document.querySelector('.align-publicacao h1');
        // tituloPost.innerHTML = post.titulo;

        // const descricaoPost = document.querySelector('.align-publicacao .coment-pub');
        // descricaoPost.innerHTML = post.descricao;

        // const conteudoPost = document.querySelector('.align-publicacao .container-pub .text-pub');
        // conteudoPost.innerHTML = post.conteudo;

    }
}

window.onload = Publicacao.init; 