// Importa el paquete de express
let express = require('express');
// Obtiene una instancia de express
let app = express();
var path = require('path');
// Importa el modulo para leer el input del usuario
let bodyParser = require('body-parser');

let appRoutes = require('./routes/app')

let appConfig = require('./configs/app')

app.use(bodyParser.urlencoded({ extended: true }));

// Sobreescribe el método de envío
let methodOverride = require('method-override')

// sobreescribe el método POST
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')));

// Definir que router se usará para las rutas:
app.use('/', appRoutes)




// Configuraciones de las vistas
let exphbs = require('express-handlebars');
// Define la extensión que se va a utilizar para los archivos que representan
// las vistas
const extNameHbs = 'hbs';
// Crea una instancia de hbs con las conifugraciones definidas
let hbs = exphbs.create({extname: extNameHbs});
// Establece el uso de handlebars dentro de express.js
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);



// Comienza el servidor en el puerto 3000 de localhost
// para ver el sistema 
app.listen(appConfig.express_port,() => {
  console.log(`App listening on port ${appConfig.express_port}! (http://localhost:${appConfig.express_port})`);
});