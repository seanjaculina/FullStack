import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1'; //<-- fetches one todo
//const URL = 'https://jsonplaceholder.typicode.com/todos'; // <-- fetches ALL todos

/**
 * Defines an interface : the structure of some object we are going to model / define
 * In this case, we know the jsonplaceholder API returns an object that has properties
 * called title, id and completed of specific types , so we built an interface that defines
 * the exact same properties and what it means to be a todo such that we can safeguard our API
 * response to strictly be a Todo and if we extract things from the todo which is aliased as an
 * interface, then we would see errors in the code. Cool!
 */
interface Todo {
  title: string;
  id: number;
  completed: boolean;
}

axios.get(URL).then((res) => {
  const todo = res.data as Todo; // res.data (from the axios response) is aliased as a Todo interface

  const todoTitle = todo.title;
  const todoId = todo.id;
  const isCompleted = todo.completed;
  logTodo(todoId, todoTitle, isCompleted);
});

// notice we pass strict types in the function pparams. This is JUST like java or C++! No crazy things here
// we are just telling our funtion that we want to take in some arguments that have those types and of course,
// a parameter can be whatever we want to name it!
const logTodo = (todoId: number, todoTitle: string, isCompleted: boolean) => {
  console.log(
    `Todo Title: ${todoTitle} and its ID: ${todoId}. Status = ${isCompleted}`,
  );
};

// we can se ts-node to compile and then run the compiled js file in one go
// so -> ts-node index.ts

/**
 * Notice how we need to be very specific on the naming of the properties
 * we are pulling off the todo object. When we code in JS, we just assume things are correct
 * until errors show up. So if you changed todo.title to todo.Title, this would fail BUT
 * you would not know this till after running the file. This is a headache. So, this is where
 * TypeScript comes into play. To safeguard us during development and before compilation for safe type checking, error handling, etc
 */

/**
 * TS Types: (very much like Java or C++ types)
 * String
 * Number
 * Boolean
 * Any
 * etc.
 */
