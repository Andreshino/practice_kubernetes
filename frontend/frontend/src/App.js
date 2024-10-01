import React, { useEffect, useState } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000')
      .then(response => response.text())
      .then(data => setBackendMessage(data))
      .catch(error => console.error('Error fetching backend:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend Application</h1>
        <p>Message from backend: {backendMessage}</p>
      </header>
    </div>
  );
}

export default App;
