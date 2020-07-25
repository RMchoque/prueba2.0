const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const hbs = require('express-hbs');


//configuraciones
app.set('port', process.env.PORT || 8888);

app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main.hbs',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('../src/lib/handlebars')
}));
app.set('view engine','.hbs');



//Middlewares
app.use(morgan('dev'));//muestra las interacciones por consola
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//variable global;
app.use((req, res, next) =>{

  next();
})


//rutas
app.use(require('../src/routes/index'));
app.use(require('../src/routes/autentication'));
app.use('/links', require('../src/routes/links'));



//codigo publico
app.use(express.static(path.join(__dirname, 'public')));



//iniciacion del servidor
app.listen(app.get('port'), () => {
    console.log('Sever on port', app.get('port'));
});

