import React from 'react';

const Checkbox = (props) => {
  const { value, id } = props;

  return (
    <div className="uk-margin">
      <label htmlFor={id}><input id={id} className="uk-checkbox" type="checkbox" /> {value}</label>
    </div>
  );
};

export default Checkbox;
