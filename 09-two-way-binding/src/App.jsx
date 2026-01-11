import { useState } from 'react';
import './index.css';

const App = () => {
  const [name, setName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted by", name);
    setName('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default App;
