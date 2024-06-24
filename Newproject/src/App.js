import React, { useState } from 'react';
import Login from './Login';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

//code changes
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome!</h1>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

