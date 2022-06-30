import React from 'react';
import Screen from './Screen';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenValue: '0',
      calculateObject: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.keyBoard = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

    handleButtonClick = (buttonLabel) => {
      const { calculateObject } = this.state;
      const res = calculate(calculateObject, buttonLabel);
      this.setState({
        screenValue: this.setScreenValue(res).length > 0 ? this.setScreenValue(res) : '0',
        calculateObject: res,
      });
    }

    setScreenValue = (calcObj) => {
      if (calcObj.total) {
        return calcObj.total + (calcObj.operation ? calcObj.operation : '') + (calcObj.next ? calcObj.next : '');
      }

      if (calcObj.next) {
        return (calcObj.next ? calcObj.next : '') + (calcObj.operation ? calcObj.operation : '');
      }

      return '0';
    }

    render = () => {
      const { screenValue } = this.state;
      return (
        <div className="wrapper">
          <div className="calculator-frame">
            <Screen value={screenValue} />

            <div className="keyboard-frame">
              {this.keyBoard.map((elt) => (
                <Button
                  handleButtonClick={this.handleButtonClick}
                  key={elt}
                  label={elt}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
}

export default Calculator;
