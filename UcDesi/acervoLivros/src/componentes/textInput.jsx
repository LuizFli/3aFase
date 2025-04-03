
const TextInput = props => {

    const { label, value, handleChange } = props;
    

    return (
        <>
            <div className='campo-formulario'>
                <label>{label}</label>
                <input type="text"
                    className='input-formulario'
                    onChange={handleChange}
                    defaultValue={value} 
                     />
            </div>

        </>
    )
}
export default TextInput;