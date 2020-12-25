const express = require('express');
const router = express.Router(); // allows us to modularizxe routes into separate files to couple together similar business logic

// We bring in our models to particular route files so we can use them of course with
// those routes to do some CRUD, etc.
const Task = require('../../models/Task');

// it is best practice to prefix all our routes with the documentation seen below for ease of use by yourself or your team

/**
 * @route   GET /api/tasks/ <- prefixed in server.js with /api/tasks
 * @desc    Gets all tasks
 * @access  public
 */
router.get('/', async (req, res) => {
  try {
    // get all tasks in the DB (can easily be done by using ModelImported.find({}) where empty object will get all the values in the tasks collection)
    const tasks = await Task.find({}).sort({ date: -1 }); // sort by descending date
    res.json(tasks);
  } catch (error) {
    console.error(error);
  }
});

/**
 * @route   POST /api/tasks
 * @desc    Create a new item and put it in the tasks collection
 * @access  public
 */
router.post('/', async (req, res) => {
  const { name } = req.body;
  const newTask = new Task({
    name,
  });
  try {
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    res.status(500).json(error);
  }
});

/**
 * @route   DELETE /api/tasks/:id
 * @desc    Delete an item by its specific id (passed in the params of this request which is the ID from mongoDB in the UI )
 * @access  public
 */
router.delete('/:id', async (req, res) => {
  try {
    // we can findbyidanddelete and save that item we deleted to a variable and send it back in our json to do some nice UI popup saying "{item} was successfully deleted"
    const taskDeleted = await Task.findByIdAndDelete(req.params.id);
    if (taskDeleted) {
      res.status(200).json({ success: true, taskDeleted });
    } else {
      res.status(404).json({ success: false });
    }
  } catch (error) {
    res.status(404).json({ success: false });
  }
});

module.exports = router;

/**
 * this same design and idea is used in every application. We can define models for our data, and then use different route modules
 * with those models in an api folder and then keep them decoupled from the sevrer.js and only worry about using the endpoints in the
 * app. We use get,post,put and delete mostly in all CRUS REST operations. Notice we have a GET for getting all the tasks,
 * a post to add a new item and a delete route to delete an item by the ID of that item. This is all very straight forward
 *
 * Once we can think in terms of HTTP/REST architecture and the application flow, we can build any API/project we wish using these core conepts
 * learned in this tutorial
 */
