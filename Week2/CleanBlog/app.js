// imports
const express = require('express');
const app = express();
const ejs = require('ejs');

const PORT = process.env.PORT || 5000;

// Set static files
app.use(express.static(__dirname + '/public'));

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');

const blog = { id: 1, title: 'Blog title', description: 'Blog description' };

// Send blog post
app.get('/', (req, res) => {
  res.status(200).render('index', {
    blog,
  });
});
// About page
app.get('/about', (req, res) => {
  res.status(200).render('about');
});

// Post page
app.get('/post', (req, res) => {
  res.status(200).render('post');
});
// Create post page
app.get('/add_post', (req, res) => {
  res.status(200).render('add_post');
});

// Server listen
app.listen(PORT, () => {
  console.log(`Server is running by localhost:${PORT}`);
});
