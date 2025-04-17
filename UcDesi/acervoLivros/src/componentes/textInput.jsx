
const TextInput = props => {

    const { label,name, value, handleChange ,handleBlur} = props;
    

    return (
        <>       
                <label>{label}</label>
                <input type="text"
                    name={name}
                    className='input-formulario'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value} 
                     />
        </>
    )
}
export default TextInput;