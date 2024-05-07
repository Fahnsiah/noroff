import React, { useState } from 'react';

function Greeting() {
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && country) {
      setMessage(`Greeting from ${country}! Welcome ${username}.`);
    } else {
      setMessage('Please enter both username and country.');
    }
  };

  return (
    <div>
      <h2>Greeting App</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <button type="submit">Greet</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Greeting;
