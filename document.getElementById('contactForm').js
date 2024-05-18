document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
 
    fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
    }).then(response => response.json())
      .then(data => alert(data.message))
      .catch(error => console.error('Error:', error));
 });
 
 const chatInput = document.getElementById('chatInput');
 const chatBody = document.getElementById('chatBody');
 
  chatInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const message = chatInput.value;
    fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    }).then(response =&gt; response.json())
      .then(data =&gt; {
          const newMessage = document.createElement('div');
          newMessage.textContent = data.reply;
          chatBody.appendChild(newMessage);
          chatInput.value = '';
      })
      .catch(error =&gt; console.error('Error:', error));
 Copy
    }
  });