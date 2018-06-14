import React from 'react';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';


const InputComponent2 = props => {
    return (
        <div>
            <ControlLabel>
                <label
                    htmlFor={props.id}>{props.label}
                </label>
            </ControlLabel>

            <DropdownButton>
                <MenuItem eventKey="1">test</MenuItem>
            </DropdownButton>
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

export default InputComponent2;