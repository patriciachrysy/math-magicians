import React, { useState } from 'react';
import Screen from './Screen';
import Button from './Button';
import calculate from '../logic/calculate';

function buildScreenValue(calcObj) {
  if (calcObj.total) {
    return calcObj.total + (calcObj.operation ? calcObj.operation : '') + (calcObj.next ? calcObj.next : '');
  }

  if (calcObj.next) {
    return (calcObj.next ? calcObj.next : '') + (calcObj.operation ? calcObj.operation : '');
  }

  return '0';
}

function Calculator() {
  const keyBoard = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const [screenValue, setScreenValue] = useState('0');
  const [calculateObject, setCalculateObject] = useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <div className="wrapper">
      <div className="calculator-frame">
        <Screen value={screenValue} />

        <div className="keyboard-frame">
          {keyBoard.map((elt) => (
            <Button
              handleButtonClick={(buttonLabel) => {
                const res = calculate(calculateObject, buttonLabel);
                setScreenValue(buildScreenValue(res).length > 0 ? buildScreenValue(res) : '0');
                setCalculateObject(res);
              }}
              key={elt}
              label={elt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
