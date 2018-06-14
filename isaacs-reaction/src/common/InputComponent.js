import React from 'react';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

const InputComponent = props => {
    return (
        <div>
            <ControlLabel>
                <label
                    htmlFor={props.id}>{props.label}
                </label>
            </ControlLabel>

            <FormControl
                type={props.type}
                id={props.id}
                name={props.id}
                require={props.isRequired}
                placeholder={props.placeHolder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
};

export default InputComponent;