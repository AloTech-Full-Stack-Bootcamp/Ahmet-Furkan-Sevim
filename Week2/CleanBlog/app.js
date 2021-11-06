const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const blog = { id: 1, title: 'Blog title', description: 'Blog description' };

// Send blog post
app.get('/', (req, res) => {
  res.status(200).send(blog);
});

app.listen(PORT, () => {
  console.log(`Server is running by localhost:${PORT}`);
});
