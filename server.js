import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import fetch from 'node-fetch';
// ******* load env vars for dev env  *******
import 'dotenv/config';

// ******* init express app *****************
const app = express();
app.use(express.json());
app.use(express.static('public'));
// ******* MIDDLEWARE ************************
app.use(morgan('dev'));
app.set('view engine', 'ejs');
///app.use(methodOverride('_method'));

// *******   ROUTES   ************************

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
app.post('/subscribe', async (req, res) => {
  if (!req.body || !req.body.email) return res.status(201).json({ success: false });
  let config = {
    method: 'POST',
    body: JSON.stringify({ email: req.body.email, list: 'coding-books' }),
    headers: { 'Content-Type': 'application/json' }
  };
  const response = await fetch('https://my-mail-chimp.herokuapp.com/api/v1/subscribes', config);
  if (!response.ok) return res.status(500).json({ success: false });
  //throw new Error(`unexpected response ${response.statusText}`);
  return res.status(201).json({ success: true });
});

// *********  listening  *****************
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
