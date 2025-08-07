import React from 'react'

const App = () => {

  const name = 'React';
  const x = 10;
  const y = 40;

  // loops
  const names = ["Dad", "Bernard", "Ese"];

  const loggedIn = false;

  const style = {
    color: 'red',
    fontSize: '56px'
  }

  return (
    <>
         <div className='text-5xl'>
          App
        </div>
        <p style={style}>Hello {name}</p>
        <p>The sum of {x} and {y} is {x + y}</p>

        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        {loggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1> }
    </>
   
    
  )
}

export default App