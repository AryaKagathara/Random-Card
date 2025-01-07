import React, { useState, useEffect } from 'react';
import './App.css';
import buttonImage from './buttonImage.svg'; // Replace with the path to your button image
import copyImage from './copyImage.svg'; // Replace with the path to your copy image
import data from './data.json'; // JSON file with the Title and Description list

function App() {
  const [text, setText] = useState({ title: '', description: '' });

  // Function to get a random text from the JSON file
  const getRandomText = () => {
    console.log('Generate button clicked');
    const randomIndex = Math.floor(Math.random() * data.length);
    setText(data[randomIndex]);
  };

  // Copy text to clipboard
  const copyToClipboard = () => {
    const formattedText = `${text.title.toUpperCase()}:\n${text.description}`;
    console.log('Copy button clicked', formattedText);
    navigator.clipboard
      .writeText(formattedText)
      .then(() => console.log('Text copied!'))
      .catch((err) => console.error('Failed to copy text', err));
  };

  // Load a random text on component mount
  useEffect(() => {
    getRandomText();
  }, []);

  return (
    <div className="App">
      <div className="card-container">
        <div className="title-text">Truth & Dare</div>
        <div className="card">
          <div className="card-image">{text.title}</div>
          <div className="description-text">{text.description}</div>
        </div>
      </div>

      <div className="actions">
        <img
          src={buttonImage}
          alt="Generate Button"
          className="action-button"
          onClick={getRandomText}
        />
        <img
          src={copyImage}
          alt="Copy Button"
          className="action-button"
          onClick={copyToClipboard}
        />
      </div>
    </div>
  );
}

export default App;