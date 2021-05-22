const Main = {
    init: () => {
        Main.buildPosts();
    },
    getPosts: async () => {
        const response = await fetch("/publicar/posts", {
            method: 'get'
        })
        const posts = await response.json();
        console.log(posts);

        return posts;
    },
    buildPosts: async () => {
        const posts = await Main.getPosts();
        const postContainer = document.querySelector('.posts .container .posts-align');

        posts.forEach(post => {
            postContainer.innerHTML += `
            <div class="posts-align">
                <div class="display-item-post">
                    <div class="item-posts">
                        <div class="img-post" style="background-image: url(${post.imagem})">
                            <a href="publicacao.html?id=${post.id}"><p class="hover-posts">Ver post</p></a>
                        </div>
                        <div class="text-post">
                        <h1>${post.titulo}</h1>
                        <p>${post.conteudo}</p>
                    </div>
                </div>
            </div>`; 
        });
    }
}

window.onload = Main.init; 