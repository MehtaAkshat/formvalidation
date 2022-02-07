import React from 'react';

const Input = (props)  => {
    const {onChange, name, type, lable, placeholder} = props;
    return (
        <>
            {lable}
            <input  onChange={onChange} type={type} name={name} placeholder={placeholder} />
        </>
    );
};

export default Input;