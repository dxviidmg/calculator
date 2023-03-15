import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

import freeCodeCampLogo from "./images/freecodecamp-logo.png";
function App() {
  const [value, setValue] = useState("");

  const addNumber = (n) => {
    setValue(value + n);
  };

  const calculate = (n) => {
    setValue(
      eval(value)
        .toString()
        .match(/.{1,15}/)
    );
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <div className="fila">
          <Display value={value}></Display>
        </div>
        <div className="fila">
          <Button onClick={addNumber}>7</Button>
          <Button onClick={addNumber}>8</Button>
          <Button onClick={addNumber}>9</Button>
          <Button onClick={addNumber}>/</Button>
        </div>
        <div className="fila">
          <Button onClick={addNumber}>4</Button>
          <Button onClick={addNumber}>5</Button>
          <Button onClick={addNumber}>6</Button>
          <Button onClick={addNumber}>*</Button>
        </div>
        <div className="fila">
          <Button onClick={addNumber}>1</Button>
          <Button onClick={addNumber}>2</Button>
          <Button onClick={addNumber}>3</Button>
          <Button onClick={addNumber}>-</Button>
        </div>

        <div className="fila">
          <Button onClick={addNumber}>0</Button>
          <Button onClick={addNumber}>.</Button>
          <Button onClick={calculate}>=</Button>
          <Button onClick={addNumber}>+</Button>
        </div>
        <div className="fila">
          <Button onClick={() => setValue("")}>Clear</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
