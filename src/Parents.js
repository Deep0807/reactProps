import { useState } from 'react';
import Child from './Child';

function Parents() {
  const [data, setData] = useState('');

  return (
    <>
      <h1>Parent Component </h1>
      <button onClick={()=>{setData('props from parents')}}>Get Data</button>
      <h2>
        Child Component <Child data={data} />
      </h2>
    </>
  );
}

export default Parents;