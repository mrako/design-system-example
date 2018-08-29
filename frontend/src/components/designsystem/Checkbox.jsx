import React from 'react';

const Checkbox = (props) => {
  const { value } = props;

  return (
    <div className="uk-margin">
      <label htmlFor="checkbox"><input className="uk-checkbox" type="checkbox" /> {value}</label>
    </div>
  );
};

export default Checkbox;
