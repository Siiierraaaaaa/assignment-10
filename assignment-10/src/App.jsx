import { useState } from 'react';
import axios from 'axios';
import FactForm from './components/FactForm/factform-component';
import FactDisplay from './components/FactDisplay/factdisplay-component';

function App() {
  const [fact, setFact] = useState('');
  const [error, setError] = useState(null);

  const fetchFact = async () => {
    setFact('');
    setError(null);

    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
    } catch  {
      setError('Error fetching cat fact. Please try again.');
    }
  };

  return (
    <div>
      <h1>Cat Fact Finder</h1>

      <FactForm onFetch={fetchFact} />

      <FactDisplay fact={fact} error={error} />
    </div>
  );
}

export default App;