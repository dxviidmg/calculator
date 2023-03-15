
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

import freeCodeCampLogo from './images/freecodecamp-logo.png'
function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='Logo de freecodecamp'/>
      </div>
      <div className='contenedor-calculadora'>
      <div className='fila'>
        <Display value={0}></Display>
        </div>
        <div className='fila'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </div>
        <div className='fila'>
        <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>*</Button>
        </div>
        <div className='fila'>
        <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>-</Button>
        </div>
    
        <div className='fila'>
          <Button>0</Button>
          <Button>.</Button>
          <Button>=</Button>
          <Button>+</Button>
        </div>
        <div className='fila'>
        <Button>Clear</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
