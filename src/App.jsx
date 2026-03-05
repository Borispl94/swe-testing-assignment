import { useState } from 'react';
import { add, subtract, multiply, divide } from './calculatorLogic';

function App() {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);

  const handleNum = (n) => setDisplay(display === '0' || display === 'Error' ? String(n) : display + n);
  
  const handleOp = (operator) => {
    setPrev(parseFloat(display));
    setOp(operator);
    setDisplay('0');
  };

  const calculate = () => {
    if (op === null || prev === null) return;
    const curr = parseFloat(display);
    let res = 0;
    if (op === '+') res = add(prev, curr);
    if (op === '-') res = subtract(prev, curr);
    if (op === '*') res = multiply(prev, curr);
    if (op === '/') res = divide(prev, curr);
    setDisplay(String(res));
    setOp(null);
    setPrev(null);
  };

  const clear = () => {
    setDisplay('0');
    setOp(null);
    setPrev(null);
  };

  return (
    <div>
      <h1>Quick-Calc</h1>
      <div data-testid="display">{display}</div>
      <div>
        <button onClick={() => handleNum(1)}>1</button>
        <button onClick={() => handleNum(2)}>2</button>
        <button onClick={() => handleNum(3)}>3</button>
        <button onClick={() => handleNum(5)}>5</button>
        <button onClick={clear}>C</button>
      </div>
      <div>
        <button onClick={() => handleOp('+')}>+</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}
export default App;