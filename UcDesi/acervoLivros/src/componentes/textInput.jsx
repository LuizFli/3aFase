
const TextInput = props => {

    const { label,name, value, handleChange ,handleBlur} = props;
    

    return (
        <>
            <div className='campo-formulario'>
                <label>{label}</label>
                <input type="text"
                    name={name}
                    className='input-formulario'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={value} 
                     />
            </div>

        </>
    )
}
export default TextInput;