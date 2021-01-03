const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

//const connectDB = require('./config/db.js');

//const Note = require('./models/noteModel');
//const noteRouter = require('./routes/noteRoutes');
///const methodOverride = require('method-override');

// ******* load env vars for dev env  *******
require('dotenv').config();
//connectDB();

// ******* init express app *****************
const app = express();
app.use(express.static('public'));
// ******* MIDDLEWARE ************************
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
///app.use(methodOverride('_method'));
app.use(morgan('dev'));

// *******   ROUTES   ************************
///app.use('/notes', noteRouter);

app.get('/', async (req, res) => {
  //const notes = await Note.find().sort({ createdAt: 'desc' });
  res.render('home', { page_name: 'home', notes: 'notes' });
});
app.get('/blog', async (req, res) => {
  //const notes = await Note.find().sort({ createdAt: 'desc' });
  res.render('blog', { page_name: 'blog', notes: 'notes' });
});
app.get('/about-us', async (req, res) => {
  //const notes = await Note.find().sort({ createdAt: 'desc' });
  res.render('about', { page_name: 'about', notes: 'notes' });
});
app.get('/contact-us', async (req, res) => {
  //const notes = await Note.find().sort({ createdAt: 'desc' });
  res.render('contact', { page_name: 'contact', notes: 'notes' });
});
app.get('/privacy-policy', async (req, res) => {
  //const notes = await Note.find().sort({ createdAt: 'desc' });
  res.render('privacy', { page_name: 'privacy', notes: 'notes' });
});

// *********  listening  *****************
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
