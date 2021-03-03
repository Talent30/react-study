import { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = (): JSX.Element => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    // clean up function
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  });

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
