import React from 'react';

const TextField = (props) => {
  const { required, name, placeholder, type, icon } = props;

  return (
    <div className="uk-margin">
      <div className="uk-inline uk-width-1-1">
        <span className="uk-form-icon uk-form-icon-flip" data-uk-icon={icon ? `icon: ${icon}` : ''} />
        <input name={name} className="uk-input uk-form-large" required={required} placeholder={placeholder} type={type} />
      </div>
    </div>
  );
};

TextField.defaultProps = {
  required: false,
};

export default TextField;
