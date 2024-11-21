import {useEffect, useState} from 'react';

export default () => {
  const [name, setName] = useState('york');
  function handleClick() {
    setName('york');
  }
  useEffect(()=>{
    console.log(name)
  },[name])
  return (
    <div>
      {name}
      <div onClick={handleClick}>this is a button</div>
    </div>
  );
};
