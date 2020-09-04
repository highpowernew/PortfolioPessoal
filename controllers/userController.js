const inimigo = require('../models/classeInimigo');
const User = require('../models/classeUser');
const db = require('../database');

exports.MostraPaginaInicial = (req, res) => {
    
    console.log(req.session);

    res.render('pag-inicial', {
        pageTitle: "Pagina Inicial"
    });

        // let query = `SELECT * FROM aulas`;
    
        // db.execute(query)
        // .then(result => {
        //     res.render('todos', {
        //         pageTitle: "Escola Particular",
        //         prods: result[0],
        //         logado: req.session.loggedIn,
        //         user : req.session.user})
        // })
        // .catch(erro => {
        //     console.log(erro);
        //     res.write(JSON.stringify(erro));
        //     res.end();
        // });

}



