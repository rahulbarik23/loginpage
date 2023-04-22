import { useState, useEffect } from 'react';
import './App.css';

function Login() {
  const [usernameState, setUsernameState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [errorState, setErrorState] = useState(null);

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: usernameState,
        password: passwordState,
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    })
    .then(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data.id);
      window.location.href = '/profile';
    })
    .catch(error => {
      setErrorState(error.message);
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input type="text" value={usernameState} onChange={(e) => setUsernameState(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={passwordState} onChange={(e) => setPasswordState(e.target.value)} />
      </div>
      {errorState && <div>{errorState}</div>}
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}

function Profile() {
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem('id');
    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUserState(data);
      });
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {userState &&
        <div>
          <p>Username: {userState.username}</p>
          <p>Name: {userState.firstName}</p>
          <p>LName: {userState.lastName}</p>
          <p>Age: {userState.age}</p>
          <p>Email: {userState.email}</p>
          <p>Phone: {userState.phone}</p>
        </div>
      }
    </div>
  );
}

function App() {
  return (
    <div>
      <Login />
      <hr />
      <Profile />
    </div>
  );
}

export default App;
