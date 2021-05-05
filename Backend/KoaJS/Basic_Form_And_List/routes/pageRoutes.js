// Static array for tutorial - replace with DB connection in real world
const things = ['Football', 'Sports in general', 'Gym', 'Software Engineering'];

// List Things
async function index(context) {
  await context.render('index', {
    title: 'Things I Love',
    things,
  });
}

// Render add page
async function showAdd(context) {
  await context.render('add');
}

// Add a thing - needs to parse request form body so need koa-bodyparser
async function addThing(context) {
  const body = context.request.body;
  things.push(body.thing); // thing is the 'name' attribute of the  input  element sent in req body (we know this)
  context.redirect('/');
}

// Delete Thing
async function deleteThing(context) {
  const id = context.params.id;
  things.splice(id, 1);
}

module.exports = { index, showAdd, addThing, deleteThing };
