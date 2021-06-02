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

        const postContainer = document.querySelector('#postContainer');
        
        postContainer.innerHTML = `
        <div class="container align-publicacao">
            <h1>${post.titulo}</h1>
            <p class="coment-pub">${post.descricao}</p>

            <div class="imagem-pub" style="background-image: url(${post.imagem})"></div>

            <div class="container-pub">
                <p class="text-pub" style="text-align: justify; white-space: normal;">${post.conteudo}</p>
            </div>
        </div>`;
    }
}

window.onload = Publicacao.init; 