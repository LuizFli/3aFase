const TextInput = props => {
    const {label, name, value, handleChange, handleBlur} = props; 

    return (
        <div className='campo-formulario'>
            <label>{label}:</label><br/>
            <input type='text' 
                name={name}
                onChange={handleChange}
                onBlur={handleBlur} 
                className='input-formulario'
                value={value}/>
        </div>
    )
}

export default TextInput;