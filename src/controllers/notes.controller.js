const notesCrtl = {};

const Note = require('../models/Note');

notesCrtl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

notesCrtl.createNewNote = async (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({ title, description });
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Note Added Succesfully');
    res.redirect('/notes');
};

notesCrtl.renderNotes = async (req, res) => {
    const notes = await Note.find({ user: req.user.id }).lean();
    //if (note.user != req.user.id ) {
      //  return res.redirect('/notes');
    //}
    res.render('notes/all-notes', { notes });
};

notesCrtl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    res.render('notes/edit-notes', { note });
};

notesCrtl.updateNote = async (req, res) => {
    const { title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description});
    req.flash('success_msg','Note Update Succesfully');
    res.redirect('/notes');
};

notesCrtl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Note Deleted Succesfully');
    res.redirect('/notes');
};

module.exports = notesCrtl;