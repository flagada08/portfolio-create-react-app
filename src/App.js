import React, { useState, useEffect } from 'react';
import Pages from './pages';

function App() {
  const [user, setUser] = useState(null);
  // const [error, setError] = useState(null)
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/flagada08')
    .then(res => res.json())
    .then(user => {
      setUser(user);
    })
    // .catch(error => {
    //   setError(error)
    // });
  }, []);

  if (!user) {
    return <div />;
  }

  // if (error) { 
  //   return <Pages user={user} />;
  // }

  return <Pages user={user} />;
}

export default App;
