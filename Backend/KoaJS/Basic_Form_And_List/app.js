const koa = require('koa');
const koarouter = require('koa-router');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const routes = require('./routes/pageRoutes');

const app = new koa();
const router = new koarouter();

// Middlewares
// Prettify  JSON response
app.use(json());
// Bodyparser middleware
app.use(bodyParser());
// Router middleware - routers not native in koa
app.use(router.routes()).use(router.allowedMethods());

// Set up template engine
render(app, {
  root: path.join(__dirname, 'views'), // look in this directory for the views folder
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false,
});

// Routes
router.get('/', routes.index);
router.get('/add', routes.showAdd);
router.post('/add', routes.addThing);
router.get('/:id', routes.deleteThing);

app.listen(3000, console.log('Server running on port 3000'));

// Example with  JSON api
// router.get('/', (context) => {
//   const m = {
//     msg: 'Hello',
//   };
//   context.body = JSON.stringify(m);
// });

/**
 * The context argument to every  route contains all properties from http req/res, etc.
 */
