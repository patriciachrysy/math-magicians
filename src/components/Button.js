import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

    handleButtonClick = (e) => {
      const { handleButtonClick } = this.props;
      handleButtonClick(e.target.value);
    }

    render = () => {
      const { label } = this.props;
      return <button onClick={this.handleButtonClick} type="button" value={label}>{label}</button>;
    }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default Button;
