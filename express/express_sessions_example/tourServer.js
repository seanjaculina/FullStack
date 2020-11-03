const express = require('express');
const users = require('./secUsers.json');
const tours = require('./tours.json');
const session = require('express-session');
const bcrypt = require('bcryptjs');

let app = express(); // Can't use const if exporting

const cookieName = "SessionID"; // Session ID cookie name, use this to delete cookies too. - THIS IS SAVED AS THE COOKIE IN THE BROWSER
/**
 * In the specified cookie name property, using this middleware, a unique session ID will be assigned to the cookie in the client. This is what the 
 * express-sessions middleware offers automatically when called. See the browser for the unique ID for proof
 */
app.use(session({
	secret: "xDH!89$$()",
	resave: false,
	saveUninitialized: false,
	name: cookieName 					// Sets the name of the cookie used by the session middleware**important!!**
}));
app.use(express.json())

// This initializes session state
function setUpSessionMiddleware(req, res, next) {
	console.log(`\nsession object: ${JSON.stringify(req.session)}`);
	console.log(`session id: ${req.session.id}`);

	// the initial navigation to  '/' route will not contain a user in the session object. So, we check against that 
	// here. When we see that, we add a user with a role of guest initially as everyone is a guest on a site before loggin in
	// if it already exists, then we just move to the next middleware - see logging output for what this user object is
	// and what a sessiion object completely looks like
	if (!req.session.user) {
		req.session.user = {role: "guest"};
	};
	next();
};

app.use(setUpSessionMiddleware); // use for the whole app (Server)

// Use this middleware to restrict paths to only logged in users
function checkCustomerMiddleware(req, res, next) {
	if (req.session.user.role === "guest") {
		res.status(401).json({error: "Not permitted"});;
	} else {
		next();
	}
};

// User this middlewave to restrict paths only to admins
function checkAdminMiddleware(req, res, next) {
	if (req.session.user.role !== "admin") {
		res.status(401).json({error: "Not permitted"});;
	} else {
		next();
	}
};

app.get('/', (req, res) => {
	res.send('<h1>Hello from root!</h1>')
})

// Available to all visitors
app.get('/tours', function (req, res) {
    res.json(tours.virtTours);
});

// Only available to admin, returns updated tour list.
app.post('/addTour', checkAdminMiddleware, (req, res) => {
	const {name, date} = req.body;
	// Note need to check input here to prevent injection attacks
	const event = {
		name,
		date
	};
	tours.virtTours.push(event);
	res.json(tours.virtTours);
});

// Available to all visitors, returns user info if successful
app.post('/login', (req, res) => {
	const {email, password} = req.body;
	// Find user in the 'db'
	let auser = users.find(function (user) {
		return user.email === email
	});

	if (!auser) {
		res.status(401).json({error: true, message: "User/Password error"});
		return;
	}

	let verified = bcrypt.compareSync(password, auser.passHash);
	if (verified) {
		// Upgrade in priveledge, should generate new session id
		// Save old session information if any, create a new session
		let oldInfo = req.session.user;
		req.session.regenerate(function (err) {
			if (err) {
				console.log(err);
			}
			let newUserInfo = Object.assign(oldInfo, auser);
			delete newUserInfo.passHash;
			req.session.user = newUserInfo;
			res.json(newUserInfo);
		});
	} else {
		res.status(401).json({error: true, message: "User/Password error"});
	}
});

app.get('/logout', (req, res) =>{
	let options = req.session.cookie;
	req.session.destroy((err) =>{
		if (err) {
			console.log(err);
		}

		// Clear the cookie in the browser - remember this is done via a header in the response object
		res.clearCookie(cookieName, options);
		res.json({message: "Session CLEARED"});
	})
});

module.exports = app;

