import React from 'react';

const Checkbox = (props) => {
  const { type, value, primary, secondary, danger, onClick } = props;

  const className = ['uk-button', 'uk-button-large', 'uk-width-1-1'];

  if (primary) {
    className.push('uk-button-primary');
  }
  if (secondary) {
    className.push('uk-button-secondary');
  }
  if (danger) {
    className.push('uk-button-danger');
  }

  return (
    <div className="uk-margin">
      <button type={type} className={className.join(' ')} onClick={onClick}>{value}</button>
    </div>
  );
};

Checkbox.defaultProps = {
  type: 'button',
};

export default Checkbox;
