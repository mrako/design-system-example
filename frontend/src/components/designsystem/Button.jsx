import React from 'react';

const Checkbox = (props) => {
  const { type, value, primary, onClick } = props;

  const className = ['uk-button', 'uk-button-large', 'uk-width-1-1'];

  if (primary) {
    className.push('uk-button-primary');
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
