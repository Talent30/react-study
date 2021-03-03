import { useState } from 'react';

const UseStateObject:React.FunctionComponent = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });
  const changeMessage = () => {
    setPerson({ ...person, message: 'hello world' });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type="button" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
