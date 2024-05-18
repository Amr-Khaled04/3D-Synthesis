
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
// Here you would handle the contact form submission,
// e.g., save it to a database or send an email.

res.json({ message: 'Thank you for contacting us!' });
Copy
});

app.post('/api/chat', (req, res) => {
    const { message } = req.body;
// Here you would handle the chat messages,
// e.g., integrate with a chatbot API or save to a database.

res.json({ reply: `You said "${message}"` });
Copy
});

app.listen(port, () => console.log(`Server running on port ${port}`));