import React from 'react';
import Screen from './Screen';
import Button from './Button';
import calculate from '../logic/calculate';
import operate from '../logic/operate';
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenValue: '0',
    };
    this.keyBoard = [
      { name: 'AC', isOperator: true },
      { name: '+/-', isOperator: true },
      { name: '%', isOperator: true },
      { name: '/', isOperator: true },
      { name: '7', isOperator: false },
      { name: '8', isOperator: false },
      { name: '9', isOperator: false },
      { name: 'x', isOperator: true },
      { name: '4', isOperator: false },
      { name: '5', isOperator: false },
      { name: '6', isOperator: false },
      { name: '-', isOperator: true },
      { name: '1', isOperator: false },
      { name: '2', isOperator: false },
      { name: '3', isOperator: false },
      { name: '+', isOperator: true },
      { name: '0', isOperator: false },
      { name: '.', isOperator: true },
      { name: '=', isOperator: true },
    ];
  }

    render = () => {
      const { screenValue } = this.state;
      return (
        <div className="wrapper">
          <div className="calculator-frame">
            <Screen value={screenValue} />

            <div className="keyboard-frame">
              {this.keyBoard.map((elt) => <Button key={elt.name} label={elt.name} />)}
            </div>
          </div>
        </div>
      );
    }
}

export default Calculator;
