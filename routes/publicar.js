var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Publicar = require('../models').Publicar;

/* Inserir os posts */
router.post('/inserir', function(req, res, next) {
	console.log('Inserindo um post');
	
	Publicar.create({
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

/* Mostrar os posts */
router.get('/posts', async function(req, res, next) {
	const publicacoes = await Publicar.findAll()

	res.send(publicacoes);
});

/* Mostrar cada publicação */
router.get('/posts/:id', async function(req, res, next) {
	const {id} = req.params;
	const publicacao = await Publicar.findOne({where: {id}});

	res.send(publicacao);
});

module.exports = router;
