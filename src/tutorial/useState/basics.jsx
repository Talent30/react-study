import { useState } from 'react';

const ErrorExample = () => {
  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button type="button" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default ErrorExample;
