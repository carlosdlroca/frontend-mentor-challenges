import React, { useState } from "react";
import { Form, FormInput, Button, InputGroup } from "./Styles";
import { ReactComponent as ErrorSvg } from "./media/icon-error.svg";

var Input = (props) => {
    var [value, setValue] = useState("");
    var [error, setError] = useState(false);
    var handleOnBlur = () => {
        if (value.length <= 0) {
            setError(true);
        }
    };

    var handleOnChange = (e) => {
        setValue(e.target.value);
        setError(false);
    };

    return (
        <InputGroup>
            <FormInput
                {...props}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
            />
            {error && <ErrorSvg />}
            {error && (
                <span className='ErrorMessage'>
                    {props.placeholder} cannot be empty
                </span>
            )}
        </InputGroup>
    );
};

export default () => {
    return (
        <Form
            className='Form'
            onSubmit={(e) => {
                e.preventDefault();
                e.target.reset();
            }}
        >
            <Input placeholder={"First Name"} />
            <Input placeholder={"Last Name"} />
            <Input placeholder={"Email"} />
            <Input placeholder={"Password"} />
            <Button>claim your free trial</Button>
            <p className='Terms'>
                By clicking the button, you are agreeing to our{" "}
                <span>Terms and Services</span>
            </p>
        </Form>
    );
};
