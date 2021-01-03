const express = require('express');
const Note = require('../models/noteModel');
const noteController = require('../controllers/noteController');
const router = express.Router();

router.get('/new', noteController.newNote);
router.get('/edit/:id', noteController.editNote);
router.get('/:id', noteController.openNote);
router.post('/', noteController.saveNote);
router.post('/:id', noteController.updateNote);

router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
