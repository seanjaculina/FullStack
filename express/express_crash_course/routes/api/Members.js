const express = require('express');
const uuid = require('uuid');
const members = require('../../members'); //include the js to be used for the rest api
const router = express.Router();                //include express router for routes

// //right now no routes exist, so lets create one -> see routes -> api for routes to send user data from get requests 
// router.get('/', (req, res) => {
//     // res.send('<h1>Hello world</h1>'); //send a response (hence the res) to the broswer [not used much, we use other responses]
//     res.sendFile(path.join(__dirname, 'public', 'index.html')); //send a whole file as a response(current dir (node thing), folder to look at, file to send) must use path.join() with these params such that join will join all the strings togerther into one full path! cool!!
// });



//lets make a simple rest api. Lets make a route first

//step 1: we need data. In this case, we made the data as an array of js obnjects that will mimick json, I placed it in a file, exported it as a module and required it above

//Step 2: make a route and send a response (go to the port on postmn to see the data sent)

//route: its a get() member that handles a GET request that will send a response when requested (hence the callback (req,res))
//the first param as a string is the route path. if its '/' it is just a match to requests from root, for anything else, like our code below, it will handle requests to '/api/members' and send a response from this path: in this case, we are sending response from members array and this sends ALL members
router.get('/', (req, res) => {
    res.json(members); //lets send a json response (members is a js obnject, but this method will handle it like json)
});


//get one member from member.json : get request req will be the request put in the browser, response is up to the dev
router.get('/:id', (req, res) => {

    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        //if id's match in the request, return a json object of the user
        res.json(members.filter(member => {
            member.id === parseInt(req.params.id);
        }));
    } else {
        //status 200 is good response, 400 is bad
        res.status(400).json({ msg: `member not found with ID of ${req.params.id}` });
    }
});



//create member: this is with post request (when user maybe submits a form, you would use this)
//we can use the same route if they are different methods (get and post)
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,    //given in the post request data passed in
        email: req.body.email,  //same
        status: 'active'
    };

    //if a username or email is not added
    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and email' });
    }

    members.push(newMember);    //push this new member to the object array (acting like our json data)

    //res.json(members);          //show the new json [for the handlebars rendering stuff we are doing, we would actually route to another page or update the list adding this new member]
    res.redirect('/');              //redirect back to self (state, etc, changes this stuff with react)
});


//update a member: put request for this typucally
router.put('/:id', (req, res) => {

    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const upMmeber = req.body;  //get the name and email from the request body

        //loop through members to see if the id requested exists, and if it does, we update it with the data passed
        members.forEach(member => {
            //if this is the member to update, update it
            if (member.id === parseInt(req.params.id)) {
                member.name = upMmeber.name ? upMmeber.name : member.name;
                member.email = upMmeber.email ? upMmeber.email : member.email;

                res.json({ msg: 'Member updated', member });

            }
        });

        res.json(members.filter(member => {
            member.id === parseInt(req.params.id);
        }));
    } else {
        //status 200 is good response, 400 is bad
        res.status(400).json({ msg: `member not found with ID of ${req.params.id}` });
    }
});



//delete a user
router.delete('/:id', (req, res) => {

    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        //send a json response : a msg and a list of the members after deletion
        res.json({
            msg: 'Member deleted',
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    } else {
        //status 200 is good response, 400 is bad
        res.status(400).json({ msg: `member not found with ID of ${req.params.id}` });
    }
});



module.exports = router;