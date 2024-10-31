

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize count state to 0

  return (
    <div className='p-[100px]'>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} className='bg-blue-300 rounded p-2'>Click me</button>
    </div>
  );
}

export default Counter

