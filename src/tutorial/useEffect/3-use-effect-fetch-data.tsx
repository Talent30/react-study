import { useState, useEffect } from 'react';

interface User {
  id: number;
  login: string;
  avatarUrl: string;
  htmlUrl: string;
}

const url = 'https://api.github.com/users';

const UseEffectFetchData = (): JSX.Element => {
  const [users, setUsers] = useState([] as User[]);
  const getUsers = async () => {
    const response = await fetch(url);
    const userList:User[] = await response.json();
    setUsers(userList);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Github Users</h1>
      <ul>
        {users.map((user) => {
          const { id, login, avatarUrl, htmlUrl } = user;
          return (
            <li key={id}>
              <img src={avatarUrl} alt={login} />
              <h4>{login}</h4>
              <a href={htmlUrl}>profile</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
