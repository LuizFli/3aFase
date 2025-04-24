const TextInput = props => {
    const {label, handleChange} = props; 

    return (
        <div className='campo-formulario'>
            <label>{label}:</label><br/>
            <input type='text' onChange={handleChange} className='input-formulario'/>
        </div>
    )
}

export default TextInput;