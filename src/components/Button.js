import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render = () => {
      const { label } = this.props;
      return <button type="button">{label}</button>;
    }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  // operator: PropTypes.bool.isRequired,
};

export default Button;
