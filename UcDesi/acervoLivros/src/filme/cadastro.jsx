import React from 'react'
import TextInput from '../componentes/textInput'
import '../assets/css/cadastro.css'
import { Form, FormikProvider, useFormik } from 'formik';
import { useEffect } from 'react';
import * as yup from 'yup'

const livroSchema = yup.object({
    title: yup.string()
        .required('* Titulo é Obrigatório.')
        .max(50,'* Maximo 50 Caracteres'),
    author: yup.string()
        .required('* Autor é Obrigatório')
        .max(50,'* Maximo 50 Caracteres'),
    publisher: yup.string()
        .required('* Editora é Obrigatório')
        .max(50,'* Maximo 50 Caracteres')
})
const cadastro = props => {

    const { livro, salvar, limpar } = props;

    const formik = useFormik({
        initialValues: livro,
        validationSchema:livroSchema,
        onSubmit: salvar
    })
    // const alterarValor = (nomeCampo, valorCampo) => {
    //     console.log('Formik:', formik)
    //     console.log('values', formik.initialValues)
    //     livro[nomeCampo] = valorCampo

    // }
    useEffect(() => {
        formik.setValues(livro)

    }, [livro])

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <div className='formulario'>

                    <TextInput label='Título' name='title' value={formik.values.title} handleChange={formik.handleChange} handleBlur={formik.handleBlur} />
                    {formik.touched.title && formik.errors.title && <span className='erro-campo-formulario'>{formik.errors.title}</span>}
                    <TextInput label='Autor' name='author' value={formik.values.author} handleChange={formik.handleChange} handleBlur={formik.handleBlur}/>
                    {formik.touched.author && formik.errors.author && <span className='erro-campo-formulario'>{formik.errors.author}</span>}
                    <TextInput label='Editora' name='publisher' value={formik.values.publisher} handleChange={formik.handleChange} handleBlur={formik.handleBlur} />
                    {formik.touched.publisher && formik.errors.publisher && <span className='erro-campo-formulario'>{formik.errors.publisher}</span>}

                </div>
                <div className='botao'>

                    <button className='botao-formulario' onClick={() => limpar(livro)}>Novo</button>
                    <button type='submit' className='botao-formulario' onClick={() => salvar(livro)}>Salvar</button>

                </div>
            </Form>

            {/* <div className='formulario'>

                <TextInput label='Título' value={livro.title} handleChenge={e => alterarValor(e.target.value)} />
                <TextInput label='Autor' value={livro.author} handleChenge={e => alterarValor(e.target.value)} />
                <TextInput label='Editora' value={livro.publisher} handleChenge={e => alterarValor(e.target.value)} />

            </div>
            <div className='botao'>

                <button className='botao-formulario' onClick={() => limpar(livro)}>Novo</button>
                <button className='botao-formulario' onClick={() => salvar(livro)}>Salvar</button>

            </div> */}

        </FormikProvider>
    )
}
export default cadastro