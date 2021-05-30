var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Publicar = require('../models').Publicar;

/* Inserir os posts */
router.post('/inserir', async function(req, res, next) {
	console.log('Inserindo um post');
	
	var publicar = await Publicar.create({
		titulo : req.body.titulo,
		descricao : req.body.descricao,
		imagem: req.body.imagem,
		categoria: req.body.categoria,
		conteudo: req.body.conteudo

	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Atualizar um post */
router.post('/atualizar', async function(req, res, next) {
	console.log('\nAtualizar um post');
	
	var idPost = req.body.id;
	var campo = req.body.campo;
	var valorCampo;

	if (req.body.titulo != '') {valorCampo = req.body.titulo}
	if (req.body.descricao != '') {valorCampo = req.body.descricao}
	if (req.body.imagem != '') {valorCampo = req.body.imagem}
	if (req.body.categoria != '') {valorCampo = req.body.categoria}
	if (req.body.conteudo != '') {valorCampo = req.body.conteudo}

	let atualizarPost = await Publicar.update({ [campo]: [valorCampo] }, {
		where: {id_post: [idPost]}
	}).then(resultado => {
		console.log(`Registro alterado: ${resultado}`);
		console.log(`\nid do post: ${idPost},\nnome do campo: ${campo},\nalteração: ${valorCampo}\n`);

        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});

	// let atualizarPost = `update tb_post set ${campo}_post = '${valorCampo}' where id_post = ${idPost};`;
	// console.log(atualizarPost);

	// sequelize.query(atualizarPost, {
	// 	model: Publicar

	// }).then(resultado => {
	// 	console.log(`Registro alterado: ${resultado}`)
    //     res.send(resultado);
    // }).catch(erro => {
	// 	console.error(erro);
	// 	res.status(500).send(erro.message);
  	// });

});

/* Mostrar os posts recentes */
router.get('/postsRecents', async function(req, res, next) {
	const ultimasPublicacoes = await Publicar.findAll({
		order: [["id_post","DESC"]], 
    	limit: 3,
	});

	res.send(ultimasPublicacoes);
});

/* Mostrar os posts */
router.get('/posts', async function(req, res, next) {
	const publicacoes = await Publicar.findAll({order: [["id_post","DESC"]]});

	res.send(publicacoes);
});

router.get('/posts', async function(req, res, next) {
	const publicacoes = await Publicar.findAll({order: [["id_post","DESC"]]});

	res.send(publicacoes);
});

/* Mostrar cada publicação */
router.get('/posts/:id', async function(req, res, next) {
	const {id} = req.params;
	const publicacao = await Publicar.findOne({where: {id}});

	res.send(publicacao);
});

module.exports = router;
