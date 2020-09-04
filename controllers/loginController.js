
const  db = require('../database');

exports.MostraLogin = (req, res) => {
     
    res.render('login', {pageTitle: "Joguinho",
        logado: req.session.loggedIn,
        user : req.session.user,
    })

}


exports.Deslogar = (req, res) => {

    req.session.destroy();
    res.redirect('/');

}


exports.FazLogin = (req, res) => {

    const email = req.body.email;
    const senha = req.body.senha;

    let query = `SELECT * FROM users 
        WHERE email = '${email}' AND senha = '${senha}'`;

    db.execute(query)
    .then(result => {
        if (result[0].length > 0) {
            req.session.user = result[0][0];
            req.session.loggedIn = true;
            if (result[0][0].isadmin) {
                req.session.isadmin = true;
                res.redirect('/');  
            } else {
                res.redirect('/');
            }

        } else {
            res.render('login', {pageTitle: "Joguinho - Login",
            logado: req.session.loggedIn,
            user : req.session.user,
            erro: "Dados não conferem"
        });
        }
    })
    .catch(erro => {
        console.log(erro);
        res.write(JSON.stringify(erro));
        res.end();
    });

}

exports.MostraCriarCadastro = (req, res) => {
    res.render('formulario-cadastro', 
        {
            pageTitle: "Novo Usuário",
            user: req.session.user
        });
}

exports.EnviaDadosCadastro = (req, res) => {

    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const datanasc = req.body.datanasc;
    const isadmin = 0;


    let novoUser = new classeUser(nome, email, senha, datanasc, isadmin);
    novoUser.addUser().then(result => {
        
        let query1 = `SELECT * FROM users 
            WHERE email = '${email}' AND senha = '${senha}'`;

            db.execute(query1)
            .then(result => {
                if (result[0].length > 0) {
                    req.session.user = result[0][0];
                    req.session.loggedIn = true;
                    if (result[0][0].isadmin) {
                        req.session.isadmin = true;
                        res.redirect('/');  
                    } else {
                        res.redirect('/');
                    }

                } else {
                    res.render('login', {pageTitle: "Joguinho - Login",
                    logado: req.session.loggedIn,
                    user : req.session.user,
                    erro: "Dados não conferem"
                });
                }
            })
            .catch(erro => {
                console.log(erro);
                res.write(JSON.stringify(erro));
                res.end();
            });
    })
    .catch(erro => {
        console.log(erro);
        res.write(JSON.stringify(erro));
        res.end();
    });
}