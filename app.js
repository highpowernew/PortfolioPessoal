const express = require('express');
const bodyparser = require('body-parser');  
const cookieparser = require('cookie-parser');
const session = require('express-session');
const app = express();


app.use(session({
    secret: 'IUESAHDSDFUNASDINAFOISNFF1@$#!#¨$&$&$@%#%#3218746149816491873468',
    resave: false,
    saveUninitialized: false
}));


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieparser());

app.use(express.static('public'));
app.use('/data', express.static('data'));
app.use('/uploads', express.static('uploads'));

const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);

const isAdmin = (req, res, next) => {
    console.log("Verificando se é admin...")
    if(req.session.isadmin){
        next();
    } else {
        res.redirect('/login');
    } 
}

const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', isAdmin, adminRoutes);

app.use((req, res) => {
    res.status(404);
    res.write("Pagina não existe!");
    res.end();
});

app.listen(3000, function(){
    console.log("Servidor rodando na url htttp://localhost:3000");
});