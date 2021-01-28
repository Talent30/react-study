import { useState } from 'react';
import './styles.css';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        You clicked me
        {' '}
        {count}
        {' '}
        times
      </p>
      <button className="bg-red-500 " type="button" onClick={() => setCount(count + 4)}>
        Click me
      </button>
    </div>
  );
}

export default App;
