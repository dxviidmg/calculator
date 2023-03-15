
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

import freeCodeCampLogo from './images/freecodecamp-logo.png'
function App() {
  const [value, setValue] = useState('')

  const clear = () => setValue('')

  const add_number = n => {
    setValue(value  + n)
  }

  const calculate = (n) => {
    setValue(eval(value).toString().match(/.{1,15}/))
  }

  
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='Logo de freecodecamp'/>
      </div>
      <div className='contenedor-calculadora'>
      <div className='fila'>
        <Display value={value}></Display>
        </div>
        <div className='fila'>
          <Button onClick={add_number}>7</Button>
          <Button onClick={add_number}>8</Button>
          <Button onClick={add_number}>9</Button>
          <Button onClick={add_number}>/</Button>
        </div>
        <div className='fila'>
        <Button onClick={add_number}>4</Button>
          <Button onClick={add_number}>5</Button>
          <Button onClick={add_number}>6</Button>
          <Button onClick={add_number}>*</Button>
        </div>
        <div className='fila'>
        <Button onClick={add_number}>1</Button>
          <Button onClick={add_number}>2</Button>
          <Button onClick={add_number}>3</Button>
          <Button onClick={add_number}>-</Button>
        </div>
    
        <div className='fila'>
          <Button onClick={add_number}>0</Button>
          <Button onClick={add_number}>.</Button>
          <Button onClick={calculate}>=</Button>
          <Button onClick={add_number}>+</Button>
        </div>
        <div className='fila'>
        <Button onClick={clear}>Clear</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
