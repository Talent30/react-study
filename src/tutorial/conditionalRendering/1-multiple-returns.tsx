import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        }
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      })
      .then((users) => {
        const { login } = users;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};
export default MultipleReturns;
