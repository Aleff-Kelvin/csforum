create database bd_csforum;
use bd_csforum;

create table tb_post (
    id_post int primary key auto_increment,
    titulo_post varchar(255) not null,
    descricao_post varchar(255) not null,
    data_post datetime not null,
    imagem_post varchar(255) not null,
    categoria_post varchar(30) not null,
    conteudo_post text not null
);

-- create table tb_usuario (
--     id_usuario int primary key auto_increment,
--     nome_usuario varchar(100) not null,
--     email_usuario varchar(50) not null,
--     senha_usuario varchar(20) not null
-- );

-- create table tb_adm (
--     id_adm int primary key auto_increment,
--     nome_adm varchar(100) not null,
--     senha_adm varchar(20) not null
-- );