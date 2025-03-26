import React, { useState } from 'react';


const TextInput = props => {

    const { label, handleChange } = props;
    const [valor, setValor] = useState()

    return (
        <>
            <div className='campo-formulario'>
                <label>{label}</label>
                <input type="text"
                    className='input-formulario'
                    value={valor} onChange={(e) =>
                    setValor(e.target.value)} />

            </div>

        </>
    )
}
export default TextInput;