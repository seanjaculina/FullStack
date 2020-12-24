const express = require('express');
const router = express.Router(); // allows us to modularizxe routes into separate files to couple together similar business logic

// We bring in our models to particular route files so we can use them of course with
// those routes to do some CRUD, etc.
const Item = require('../../models/Item');

// it is best practice to prefix all our routes with the documentation seen below for ease of use by yourself or your team

/**
 * @route   GET /api/items/ <- prefixed in server.js with /api/items
 * @desc    Gets all items
 * @access  public
 */
router.get('/', async (req, res) => {
  try {
    // get all items in the DB (can easily be done by using ModelImported.find({}) where empty object will get all the values in the items collection)
    const items = await Item.find({}).sort({ date: -1 }); // sort by descending date
    res.json(items);
  } catch (error) {
    console.error(error);
  }
});

/**
 * @route   POST /api/items
 * @desc    Create a new item and put it in the items collection
 * @access  public
 */
router.post('/', async (req, res) => {
  const { name } = req.body;
  const newItem = new Item({
    name,
  });
  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).json(error);
  }
});

/**
 * @route   DELETE /api/items/:id
 * @desc    Delete an item by its specific id (passed in the params of this request which is the ID from mongoDB in the UI )
 * @access  public
 */
router.delete('/:id', async (req, res) => {
  try {
    // we can findbyidanddelete and save that item we deleted to a variable and send it back in our json to do some nice UI popup saying "{item} was successfully deleted"
    const itemDeleted = await Item.findByIdAndDelete(req.params.id);
    if (itemDeleted) {
      res.status(200).json({ success: true, itemDeleted });
    } else {
      res.status(404).json({ success: false });
    }
  } catch (error) {
    res.status(404).json({ success: false });
  }
});

module.exports = router;
