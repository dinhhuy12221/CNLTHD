import React, { useState, useRef } from 'react'
import Key from './Key'

export default function Display() {

  const [values, setValues] = useState('');
  const errorRef = useRef(false);

  const handleClick = e => {
    const value = e.target.value;
    update(value);
  }

  function update(value) {
    try {
    if (errorRef.current === true) {
      setValues(v => v = '');
      errorRef.current = false;
    }
      let tempValues = values;
    if (value === 'DEL') {
      tempValues = tempValues.substring(0, tempValues.length - 1);
    } else if (value === "AC") {
      tempValues = '';
    }
    else if (value === '=') {
      tempValues = eval(values);
    } 
    else {
      tempValues += value;
    }
    setValues(v => v = tempValues);
    } catch (error) {
        console.log(error);
        errorRef.current = true;
    }
  }

  console.log(values);

  return (
    <>
      <div className='display'>{values}</div>
      <div className='keys'>
        <Key value={7} handleClick={(e) => handleClick(e)}/>
        <Key value={8} handleClick={(e) => handleClick(e)}/>
        <Key value={9} handleClick={(e) => handleClick(e)}/>
        <Key value={'+'} handleClick={(e) => handleClick(e)}/>
        <Key value={4} handleClick={(e) => handleClick(e)}/>
        <Key value={5} handleClick={(e) => handleClick(e)}/>
        <Key value={6} handleClick={(e) => handleClick(e)}/>
        <Key value='-' handleClick={(e) => handleClick(e)}/>
        <Key value={1} handleClick={(e) => handleClick(e)}/>
        <Key value={2} handleClick={(e) => handleClick(e)}/>
        <Key value={3} handleClick={(e) => handleClick(e)}/>
        <Key value='*' handleClick={(e) => handleClick(e)}/>
        <Key value='DEL' handleClick={(e) => handleClick(e)}/>
        <Key value={0} handleClick={(e) => handleClick(e)}/>
        <Key value='=' handleClick={(e) => handleClick(e)}/>
        <Key value='/' handleClick={(e) => handleClick(e)}/>
        <Key value='AC' handleClick={e => handleClick(e)}></Key>
      </div>
    </>
  )
}
