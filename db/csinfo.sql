create database csinfo;
use csinfo;
drop database csinfo;

create table usuario(
	id_usuario int primary key auto_increment,
    nome_usuario varchar(150) not null,
    login_usuario varchar(100) not null,
    email_usuario varchar(100) not null,
    senha_usuario varchar(45) not null,
    fk_admin int,
    foreign key (fk_admin) references usuario(id_usuario)
);

insert into usuario values
	(null, 'admin', 'admin', 'admin@admin.com', 'admin', null);

create table post (
    id_post int primary key auto_increment,
    titulo_post text not null,
    descricao_post varchar(255) not null,
    imagem_post text not null,
    categoria_post varchar(30) not null,
    check(categoria_post = 'dicas' or categoria_post = 'curiosidades' or categoria_post = 'novidades'),
    conteudo_post text not null
);

insert into post values
	(null, 'CS:GO: FURIA anuncia tacitus como técnico assistente', 'Brasileiro ex-Triumph irá compor a comissão ao lado de Nicholas "guerri"',
    'https://s2.glbimg.com/clfX_OCXqx6N4i9vpKtEUsfYDkk=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/J/6/ja5I9HSpCGbp3c6AnHcA/tacitus-triumph.jpeg',
    'novidades', 'A FURIA anunciou Marcos "tacitus" como seu novo técnico assistente para a equipe de CS:GO. tacitus chega para compor a comissão técnica ao lado de Nicholas "guerri", tentando agregar o máximo possível ao lado tático da equipe. O próximo desafio da FURIA e a possível estreia de tacitus está marcada apenas para o começo de julho, no IEM Cologne, mas é provável que outros compromissos surjam entre esse período.'),
    (null, 'CS:GO: coldzera confirma saída por opção própria', 'Jogador afirmou que tempo na equipe está acabando e que vai analisar novas propostas',
    'https://s2.glbimg.com/rorco9DQ9lOA2Gt55JcDSrhYik4=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/N/H/i8vuBpTw2IbA2hCWoNMg/faze-jogadores-comemoram.jpg',
    'novidades', 'Marcelo "coldzera" confirmou que não faz mais parte do time titular de Counter-Strike: Global Offensive da FaZe Clan. No início da tarde desta terça-feira, o jogador afirmou que está deixando a equipe por opção própria.- Depois dos resultados que tivemos recentemente e também com o pouco tempo que ainda me resta dentro do FaZe, optei por ir para o banco de reservas e analisar uma nova proposta para o futuro - escreveu o jogador no Twitter. - Queria agradecer ao FaZe e a todos os fãs e jogadores - completou.'),
    (null, 'CS:GO: lista de todas as armas do FPS', 'Entre pistolas, carabinas, rifles, metralhadoras, e submetralhadoras, são 34 armas de fogo no FPS da Valve',
    'https://s2.glbimg.com/rPy7A1d3xGNXhEBkFeymDy45rl4=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/s/W/rPsLN6SyAp4q7AcIBYTQ/1541419312747-tr-2-wallpaper.png',
    'curiosidades', 'Ao todo, são dez pistolas, quatro escopetas, duas metralhadoras, sete submetralhadoras e onze rifles diferentes para serem usados. Das 34 armas disponíveis, 16 podem ser usadas pelas duas classes; oito são de uso exclusivo do lado TR; e dez são de uso exclusivo do lado CT. É uma variedade que abrange desde a AWP, rifle de precisão usado para abates de longa distância (e a arma preferida de Gabriel "FalleN") até a USP-S, muito eficiente no combate frente a frente (uma das preferidas de Fernando "fer").'),
    (null, 'CS:GO: as melhores binds para usar no jogo', 'Teclas de atalhos permitem que jogadores executem jogadas com mais facilidade e dinamismo',
    'https://s2.glbimg.com/hqCzcZno9N5FTlXD8CP8OU1DPAY=/0x0:984x738/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/P/4/10mVhZRTCDSr7qEcbS4g/crosshair4.jpg',
    'dicas', 'O desempenho durante uma partida competitiva de Counter-Strike: Global Offensive (CS:GO) pode se tornar ainda mais dinâmico se o jogador explorar as opções que o jogo oferece. Por isso, o ge preparou uma lista de binds – teclas de atalho do game – que podem ser utilizadas durante as partidas. Muitas delas são amplamente usadas dentro do FPS da Valve.Para usar uma bind, é preciso setar diferentes botões do teclado ou do mouse para que elas façam a função desejada. Um dos melhores exemplos é o atalho para pular e arremessar uma granada simultaneamente. Manualmente, uma fração de milissegundos pode fazer com que a granada caia no lugar errado, causando uma brecha na smoke que fará com que o seu time perca o round. No entanto, com o jump throw ativado, ele fará isso de maneira automática. Passo 1: Antes de mais nada, no entanto, é preciso ativar a função do console no jogo. Para isso, vá em configurações e certifique-se que é possível abri-lo. Por padrão, os jogadores conseguem utilizar esta função na tecla  do teclado.'),
    (null, 'CBCS Elite: Paquetá vence Bravos e fica com terceiro lugar', 'Equipe conseguiu excelente reação no segundo mapa e fechou a partida em 2x0',
    'https://s2.glbimg.com/RLZr36G4_ORKCfxY-FDtPa6AWyE=/0x0:640x454/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/w/8/3qB6KfQqC4ofqZgSyyDw/paqueta-cbcs.jpg',
    'novidades', 'A Paquetá garantiu a terceira colocação do CBCS Elite, vencendo a Bravos por 2x0. A equipe leva 1400 pontos para o circuito RMR, enquanto a Bravos fica com 1300; a premiação em dinheiro, curiosamente, é a mesma para ambas equipes, que ficam com R$ 7 mil.Apesar do placar de 2x0, a série foi extremamente equilibrada: a Bravos saiu na frente na Nuke, abrindo 9x6 do lado CT. A Paquetá conseguiu encaixar uma defesa muito sólida e garantiu o primeiro mapa no detalhe, fechando em 16x14.'); 
    
update post set imagem_post = 'https://gamerspace.com.br/wp-content/uploads/2017/03/Rifles.png' where id_post = 3;   
    
select * from post;
select * from usuario;

