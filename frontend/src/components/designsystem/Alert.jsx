import React from 'react';

const Checkbox = (props) => {
  const { text } = props;

  if (!text) {
    return null;
  }

  return (
    <div className="uk-alert uk-alert-danger">
      {text}
    </div>
  );
};

export default Checkbox;
