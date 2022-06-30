import React from 'react';
import PropTypes from 'prop-types';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render = () => {
      const { value } = this.props;
      return (
        <div className="screen-frame">
          <span>{value}</span>
        </div>
      );
    }
}

Screen.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Screen;
