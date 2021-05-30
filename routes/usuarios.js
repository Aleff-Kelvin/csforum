var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;

let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/autenticar', function(req, res, next) {
	console.log('Recuperando usuário por login e senha');

	var email_usu = req.body.email_log; 
	var senha_usu = req.body.senha_log;	
	
	let instrucaoSql = `select * from tb_usuario where email_usuario='${email_usu}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.email_usu);
			console.log('sessoes: ',sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('Email e/ou senha inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo email!');
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Cadastrar usuário */
router.post('/cadastrar', async function(req, res, next) {
	console.log('Criando um usuário');

	Usuario.create({
		nome_usuario : req.body.nome_usu,
		email_usuario : req.body.email_usu,
		senha_usuario: req.body.senha_usu,
		fk_admin: 1
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Verificação de usuário */
router.get('/sessao/:login', function(req, res, next) {
	let email = req.params.email_log;
	console.log(`Verificando se o usuário ${email} tem sessão`);
	
	let tem_sessao = false;
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] == email) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${email} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}
	
});

/* Logoff de usuário */
router.get('/sair/:login', function(req, res, next) {
	let email = req.params.email_log;
	console.log(`Finalizando a sessão do usuário ${email}`);
	let nova_sessoes = []
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] != email) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${email} finalizada com sucesso!`);
});

/* Recuperar todos os usuários */
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

module.exports = router;