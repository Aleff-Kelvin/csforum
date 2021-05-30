// const { response } = require("express");

const Main = {
    init: () => {
        Main.buildPosts();
    },
    getPosts: async () => {
        const response = await fetch("/publicar/posts", {
            method: 'get'
        });
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

const News = {
    init: () => {
        News.buildPosts();
    },
    getPosts: async () => {
        const teste = await fetch("publicar/postsRecents", {
            method: 'get'
        });
        const posts = await teste.json();
        console.log(posts);

        return posts;
    },
    buildPosts: async () => {
        const posts = await News.getPosts();
         
        const postsContainerImg = document.querySelector('.principais-posts .container #p_posts_aligni');
        const postsContainerText = document.querySelector('.principais-posts .container #p_posts_alignt');

        posts.forEach(imgPost => {
            postsContainerImg.innerHTML += `
            <div class="item-p-posts" style="background-image: url(${imgPost.imagem})">
                <a href="publicacao.html?id=${imgPost.id}"><p class="hover-posts">Ver post</p></a>
            </div>`;
        });

        posts.forEach(textPost => {
            postsContainerText.innerHTML += `
            <div class="item-info-posts">
                <h3>${textPost.titulo}</h3>
                <p>${textPost.conteudo}</p>
            </div>`;
        });
    }
}

window.onload = () => {
    Main.init();
    News.init();
}