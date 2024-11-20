import {useState} from 'react';

export default () => {
  const [name, setName] = useState('york');
  function handleClick() {
    setName('york1');
    setName('york2');
    setName('york3');
  }
  return (
    <div>
      {name}
      <div onClick={handleClick}>this is a button</div>
    </div>
  );
};
