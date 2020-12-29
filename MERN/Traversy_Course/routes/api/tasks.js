const express = require('express');
const router = express.Router(); // allows us to modularizxe routes into separate files to couple together similar business logic
const auth = require('../../middleware/auth'); // to authenticate routes for creating tasks, etc

const Task = require('../../models/Task');

/**
 * @route   GET /api/tasks/
 * @desc    Gets all tasks for specific user
 * @access  private
 */
router.get('/', auth, async (req, res) => {
  try {
    // Find the posts with the req.user._id that matches the createdBy field in the Task model
    const tasks = await Task.find({ addedBy: req.user._id });
    res.status(200).json({ success: true, taskList: tasks });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

/**
 * @route   POST /api/tasks
 * @desc    Create a new item and put it in the tasks collection for the user adding the item
 * @access  private (need JWT send in the request)
 */
router.post('/', auth, async (req, res) => {
  const { name } = req.body;
  try {
    // Add content via the text editor here
    const newTask = new Task({
      name,
      addedBy: req.user._id, // the user trying to add the task is the addedBy reference
    });
    newTask.save();
    res.status(200).json({ success: true, task: newTask });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

/**
 * @route   DELETE /api/tasks/:id
 * @desc    Delete an item by its specific id (passed in the params of this request which is the ID from mongoDB in the UI )
 * @access  private
 */
router.delete('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete({ _id: req.params.id }); // get the items ID from the params (we are deleting a task by ID NOT THE USERS ID - we have a relationshp (one user -> many tasks))
    task.save();
    if (task) {
      res.status(200).json({ success: true, taskDeleted: task });
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
