const express = require('express');
const router = express.Router();

const Controle = require('./../controllers/userController');
const ControleLogin = require('./../controllers/loginController');

router.get('/', Controle.MostraPaginaInicial);

router.get('/login', ControleLogin.MostraLogin);
router.post('/login', ControleLogin.FazLogin);
router.get('/deslogar', ControleLogin.Deslogar);

router.get('/new-user', ControleLogin.MostraCriarCadastro);
router.post('/new-user-form', ControleLogin.EnviaDadosCadastro);

module.exports = router;