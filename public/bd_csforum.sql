create database bd_csforum;
use bd_csforum;

create table tb_usuario (
	id_usuario int primary key auto_increment,
    nome_usuario varchar(150) not null,
    email_usuario varchar(100) not null,
    senha_usuario varchar(45) not null,
    fk_admin int,
    foreign key (fk_admin) references tb_usuario(id_usuario)
);

create table tb_post (
    id_post int primary key auto_increment,
    titulo_post varchar(255) not null,
    descricao_post varchar(255) not null,
    data_post datetime not null,
    imagem_post varchar(255) not null,
    categoria_post varchar(30) not null,
    check(categoria_post = 'dicas' or categoria_post = 'curiosidades' or categoria_post = 'novidades'),
    conteudo_post text not null
);

