import React, { useState } from 'react';


const TextInput = props => {

    const { label, handleChange,handleBlur } = props;
    const [valor, setValor] = useState()

    return (
        <>
            <div className='campo-formulario'>
                <label>{label}</label>
                <input type="text"
                    className='input-formulario'
                    value={valor}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    />

            </div>

        </>
    )
}
export default TextInput;