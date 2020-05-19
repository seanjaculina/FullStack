/**
 * 
 * THIS FILE DOES NOT RUN: I DID NOT WANT TO NPM INSTALL REDUX.. THIS RUNS IN CODEPEN, THOUGH
 * 
 * 
 */

// Action creator: Create Policy action - if a user comes in wanting to signup for the company, this action would be the form (action to do) that they tell the dispatcher for the reducers to work with
const createPolicy = (name, amount) => {
  //this is an action {type,payload{...}}
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount,
    },
  };
};

//action creator: delete customer policy: person comes with a action (form) to get off the policy. this action is returned from the action creator (the user wants to delete their policy (that is the action creator) and the action is returned for the dispatch/reducers to use (the actual name of the user to search and delete in the reduce stage))
const deletePolicy = name => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name,
    },
  };
};

//action creator to create a new claim for an existing customer: person comes to file a new claim
//action creators return an action! Action = what_to_do
const createClaim = (name, moneyAmount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      moneyAmount: moneyAmount,
    },
  };
};

//the desired action is sent to the dispatcher: we do not write this code..its implemnented into redux for us, so,
//we write our reducers (the determiners of the fate for this action, if you will) and just pass the action to the Redux stores dispatch method

//the reducer should always take in the most recent state of data this action refers to (state of list of claims that exist , state holding balances for customers, and so on. in order for the reducer to be able to pass on to state, if it decides so, we need to account for the current state and update it in that reducer so that the central repository of all data for each department the managers want, will always be updated and exist (think of this repo as a central state for a whole app))

//see analogy or Notion notes i made, with diagrams, to understand

//3 reducers in our analogy case: claim department , accounting department, policy deparment

//reducer takes in the old state and the action returned from our action creator
/*
NOTE :

   whenever we have state, in the intial phase we always have strings as null, arrays as [] , etc. until its updated. Duh! 
   So, what would happen if we are passed an action to make a new claim for a user, and take in an array of the current claims we need? Well, that array would actually be undefined as no claims exist in the first intiial phase. We do not want to take in an undefined array and try returning it with rest. This procuces bug. So, we use default arguments for any state 
   
   if its an array, set it to  []
   string = ''
   etc.
   
   always do this with reducers! and checking for the action type for determining what to do
*/
const claims = (currentClaimList = [], action) => {
  //reducer should decide whether to create a new claim and add this claim to our history, or ignore it and just return the same list

  //this check is super intuitive! Look how literal it is!! We check the action type -> if create, create else, just return the list
  if (action.type === 'CREATE_CLAIM') {
    //return the current state of claims list and a new claim which is the payload of the action as a new array to use to update the central repo
    //... spread operator: takes the REST of the current state list, and passes it into this new array
    //could have used push() but that only adds to the array and modifies the existing, WE SHOULD NEVER DO THIS
    //but we actually want to return a whole new array to completely change the list and return a whole new version of it       //to make a nice fresh, accurate and updated list
    return [...currentClaimList, action.payload];
  }

  //else, if we arent creating a new claim, our department does not care: lets just send back the array
  return currentClaimList;
};

//accounting reducer:
/*
In our analogy, accounting deals with the money requested for claims or deposited when signing up for a new policy
So, we care about the companies bank account current balance (the total money we have as a company) and the action returned from our customer (the form (action) stating the type of thing they wish to do, and the payload association)

So, say we had a customer come in wanting to file a claim for $5000 to repair a cars rear end. The action type here is 'CREATE_CLAIM' and the payload is their name, and the money they wish to get

In order for accounting to know how much money our company has, we must grab the bank accounts most current balance (the current state of our bank (STATE STATE STATE... GET IT?) and hand 5000 to our customer and then return the new state of our account which changes -5000 dollars)

We of course coult have the action type be no claim, but they possibly are coming in to actually sign up for our insurance company or not.. if they are signing up, well, we already have the bank account state(currentBankAccountBalance) so, we have access to the state, thus, lets go ahead and take X amount of dollars our company requires when signing up, and return the new bank account baalance (will be the current pot + payload amount the person sent) 

easy enough to understant! The reducer takes in the pertaining state, and an action and then depending on our architecture (what we want to accomplish) [in this case access our bank account and the users requested action and info] and then determine what to do with it

the last case is if they just came in and were interested but didnt sign up.. if thats the case, simply just return the bank account state: no changes (else clause you can say)
*/

//always default state to some value
const accounting = (currentBankAccountBalance = 100, action) => {
  //logic path 1: chack if they requested to create a claim, if so, withdraw this users action claim amount from the state of our account
  if (action.type === 'CREATE_CLAIM') {
    //returns the current state of our account - their claim amount
    return currentBankAccountBalance - action.payload.moneyAmount;
  } else if (action.type === 'CREATE_POLICY') {
    //logic path 2: check if they wanted to create a policy instead: this means they want to sign up for our service
    //so we return new state out our bank account + the amount it costs for a new policy holder to join our company (could be a known, global constant)
    return currentBankAccountBalance + action.payload.amount;
  }
  //else, they did not file nor wanted to sign up afterall, so they left. In this case, we just return our state back up and need not worry anymore
  return currentBankAccountBalance;
};

//policies reducer: takes in the state list of poolicies (remember we always need to take in the state that refers to what we need/want to do in the reducer) and the action (the action we know cames from the action creator)

/*
this function will add a new person to the state array of policies if the actions type is to create a policy for them,
else if 
*/
const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    //find the user by their name and remove them (filter returns a new array without the filtering mechanism we want, in this case, will return a new state without this person in it anymore. suPER COOOL)
    return listOfPolicies.filter (name => name !== action.payload.name);
  }
  //else, we do the default: send back the state we get passed: in this case, we send back the state we get
  return listOfPolicies;
};

//use redux library
const {createStore, combineReducers} = Redux;

//combineReducdrs({key/val}) takes in your reducers as a key/val pair: key is the name of the property of the state of the store state, and the value is the reducer itslef which is wired up by redux for us and invoked via their code base (its abstracted for us)
const ourDepartmentReducers = combineReducers ({
  claims: claims,
  accounting: accounting,
  policies: policies,
});

//create a store: stores all our reducers and how they handle the state of anything
const store = createStore (ourDepartmentReducers);

//lets create a same action to send to a dispatcher to see what happens (we can also just pass the function itself to the dispatch)
const action = createPolicy ('Tanner', 20); //creates an policy action and returns it so the dispatcher can handle it

//we have a dispatch method: as we know, the dispather simply takes an action thats returned from some action creator and sends off that action to each reducer in the store (in this case, a customer (Action creator) takes a form (the action:type and payload) and hands it to the dispatcher: think of this as the middle man, or the receptionist if you will. That dispatcher will then say hey, i will copy this form (Action) and send it to each department (reducer) in our company that way the department(reducer) can decide what they want to do with this form (setting updated state))
store.dispatch (action);

//lets send some more dispatcher
store.dispatch (createClaim ('Hayden', 300)); //the stores claims state should be length 1 now
store.dispatch (createPolicy ('Bob', 5000)); //policy array will be 2
//store.dispatch(deletePolicy('Tanner'))  //policies goes back to 1 as we found tanner and deleted him

console.log (store.getState ()); //we can get the current state of our massive store like this (the store is like the global repo we made in the analogy)

/*has access to the whole repository of data as we are handling (the money in the company, policies of customers, and claims as we know from the example) [this would be the whole state of an app we make! Action creators can be determined from user selections on a page like wanting to sign up for a service, in which that action created will return an action with a type of, say, 'CREATE_PROFILE' and the payload of whatever our backend would reruqire]

the global state (redux store) can keep track of this, and of course the action must be dispatched - the dispatch method in redux sends an action to our redux store - the redux store is created by passing it an object we make with the combineReducers method which will house all our reducers. The flow is fairly simple

   1) create our action creators 
   2) Create reducers that will handle different actions that should affect the state of our program
   3) Once this logic is built, we can use redux explicitly by:
         - const {createStore, combineReducers} = Redux;   <- gets the methods we need to combine the reducers into a global repo (global state so to speak)
         - create a variable to store the returned object from combineReducers() which takes in all the reducers we made so that our global store can have its state changed whenever a dispatch is sent -> combineReducers takes in an object where the key is the name of the reducer and the value is the reducers we made itself (see above code)
         - From there, we need to establish in memory an actual global state (the repository idea from the example in the class)
         - we do this for example like const store = createStore(variableNameFromCombineReducerStage) <- this returns a redux store object which is represented by 'store' and from here, we can invoke state changes by usign store.dispatch(someAction) as we know dispatch takes an action to pass to the app reducers (ALL REDUCERS GET AN ACTION THAT WAY EVERY REDUCER CAN DO SOMETHING WITH THAT ACTION : if a user comes in to file a claim, for example, the accounting reducer will see that the action type of this action was create_claim, therefore it will invoke its logic to deduct x amount of money from the current account baalance, and likewise, the claims department will get this action and see that the type was create_claim, thus, their job is to add this claim to their list of claims ever made! ACTIONS define what to do and what data to pass when its done in the reduce. DISPATCH simply sends that action to ALL REDUCER and the REDUCER will use an action (aagain...all reducers get the action!) and detemrine how to modify the state depending on the logic we implement in our design and functionality (See the analogy of the reducer phase) and then the reducer will return an updated state for whaetver the action required to change that state in every reducer)
         - this will change state everywhere. To confirm it, we did multiple dispatches, and logged out results to see the          state change
         
         State is always updated whenever we dispatch because reducers always take in the current state and update it by            returning a new instance of it
*/
/*
Reducer roles:
   
   - do not directly modify array state in reducers: use the rest operator to extract the old state and add a new action payload to it in the specific state
   - always use default values for received state in reducers
   - Always architect your redux system deeply and concise before coding: this helps a lot (of course we need our react code and architecture to be good and make sense as well when dealing with state and component hierarchy and how props are sent/callbacks are invoked down in children)

*/

/*
Redux:

   Notice a lot of this code is normal JS nd just a way of handling data. We are not using any part of the redux library! Redux specific library methods are only used at certain times, and most oftenly used for a redux store: see in code above reducer notes




*/
