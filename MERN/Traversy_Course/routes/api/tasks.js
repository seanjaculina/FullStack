const express = require('express');
const router = express.Router(); // allows us to modularizxe routes into separate files to couple together similar business logic
const auth = require('../../middleware/auth'); // to authenticate routes for creating tasks, etc

const Task = require('../../models/Task');
const User = require('../../models/User');

/**
 * @route   GET /api/tasks/
 * @desc    Gets all tasks for specific user
 * @access  private
 */
router.get('/', auth, async (req, res) => {
  try {
    // Get the user that is attached to this request in the headers (auth middleware) and get the id
    const user = await User.findById(req.user._id);

    // Get all the tasks that are associated with this user
    const currentTaskList = user.tasks;

    res.status(200).json({ success: true, taskList: currentTaskList });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

/**
 * @route   POST /api/tasks
 * @desc    Create a new item and put it in the tasks collection
 * @access  private (need JWT send in the request)
 */
router.post('/', auth, async (req, res) => {
  const { name } = req.body;

  // Get the user trying to add this task
  const currentUser = await User.findById(req.user.id);

  // Add content via the text editor here
  const newTask = new Task({
    name,
  });
  try {
    const savedTask = await newTask.save();
    currentUser.tasks.push(savedTask);
    currentUser.save();
    res.status(200).json({ success: true, task: savedTask });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

/**
 * @route   DELETE /api/tasks/:id
 * @desc    Delete an item by its specific id (passed in the params of this request which is the ID from mongoDB in the UI )
 * @access  public
 */
router.delete('/:id', auth, async (req, res) => {
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
