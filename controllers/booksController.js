const Note = require('../models/noteModel');

// @desc create new note
// @route GET /new
// @access private
const newNote = async (req, res) => {
  res.render('notes/new', { note: new Note() });
};

// @desc edit a note
// @route GET /edit/:id
// @access private
const editNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.render('notes/edit', { note });
};

// @desc edit a note
// @route GET /:id
// @access private
const openNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note == null) res.redirect('/');
  res.render('notes/show', { note });
};
// @desc save a note
// @route POST /
// @access private
const saveNote = async (req, res, next) => {
  let note = new Note();
  note.title = req.body.title;
  note.description = req.body.description;
  note.markdown = req.body.markdown;
  try {
    note = await note.save();
    res.redirect(`/notes/${note._id}`);
  } catch (e) {
    res.render(`notes/${path}`, { note });
  }
};

// @desc update a note
// @route post /:id
// @access private
const updateNote = async (req, res, next) => {
  let note = await Note.findById(req.params.id);
  note.title = req.body.title;
  note.description = req.body.description;
  note.markdown = req.body.markdown;

  try {
    note = await note.save();
    res.redirect(`/notes/${note.id}`);
  } catch (e) {
    res.render(`notes/edit`, { note });
  }
};

module.exports = { newNote, editNote, openNote, saveNote, updateNote };
