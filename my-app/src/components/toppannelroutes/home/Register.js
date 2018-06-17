import React from 'react';

const RegisterInput = ({ type, id, name, value, onChange, icon, placeholder }) => {
    return (
        <div className="input-group">
            <span className="input-group-prepend g-width-50 g-brd-secondary-light-v2 g-bg-secondary g-rounded-right-0">
                <div className="input-group-text justify-content-center w-100 g-bg-secondary g-brd-secondary-light-v2">
                    <i className={icon}></i>
                </div>
            </span>
            <input className="form-control g-brd-secondary-light-v2 g-bg-secondary g-bg-secondary-dark-v1--focus g-rounded-left-0 g-px-20 g-py-12"
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </div>
    );
};
export default RegisterInput;