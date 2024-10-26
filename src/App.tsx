import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const res = await axios.post('http://localhost:5001/cloud-function-poc-313fd/us-central1/openAiLangChainFunction', {
        prompt: question,
      });

      // Store the response as a string
      setResponse(JSON.stringify(res.data.message.text));
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('An error occurred.');
    }
  };

  return (
    <div>
      <h1>Ask the AI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;


