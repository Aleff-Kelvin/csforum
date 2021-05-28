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

/* Mostrar cada publicação */
router.get('/posts/:id', async function(req, res, next) {
	const {id} = req.params;
	const publicacao = await Publicar.findOne({where: {id}});

	res.send(publicacao);
});

module.exports = router;
