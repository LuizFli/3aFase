import React from 'react'
import TextInput from '../componentes/textInput'
import '../assets/css/cadastro.css'
import { Form, FormikProvider, useFormik } from 'formik';
import { useEffect } from 'react';
import * as yup from 'yup'
import { Button, Grid, TextField as MuiTextField } from '@mui/material';
import styled from '@emotion/styled';

const TextField = styled(MuiTextField)(() => ({
    marginTop: '20px'
}))


const livroSchema = yup.object({
    title: yup.string()
        .required('* Titulo é Obrigatório.')
        .max(50, '* Maximo 50 Caracteres'),
    author: yup.string()
        .required('* Autor é Obrigatório')
        .max(50, '* Maximo 50 Caracteres'),
    publisher: yup.string()
        .required('* Editora é Obrigatório')
        .max(50, '* Maximo 50 Caracteres')
})
const cadastro = props => {

    const { livro, salvar, limpar } = props;

    const formik = useFormik({
        initialValues: livro,
        validationSchema: livroSchema,
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
                <Grid container>
                    <Grid item size={{ xs: 10, sm: 7, xl: 7 }}>

                        <TextField label='Título'
                            variant='filled'
                            fullWidth
                            name='title'
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && formik.errors.title}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        {/* {formik.touched.title && formik.errors.title && <span className='erro-campo-formulario'>{formik.errors.title}</span>} */}
                    </Grid>
                    <Grid item size={{ xs: 10, sm: 7, xl: 7 }}>

                        <TextField label='Autor'
                            variant='filled' name='author'
                            fullWidth
                            value={formik.values.author}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.author && formik.errors.author}
                            helperText={formik.touched.author && formik.errors.author}
                        />
                        {/* {formik.touched.author && formik.errors.author && <span className='erro-campo-formulario'>{formik.errors.author}</span>} */}
                    </Grid>
                    <Grid item size={{ xs: 10, sm: 7, xl: 7 }}>

                        <TextField label='Editora'
                            variant='filled'
                            fullWidth
                            name='publisher'
                            value={formik.values.publisher}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.publisher && formik.errors.publisher}
                            helperText={formik.touched.publisher && formik.errors.publisher}
                        />
                        {/* {formik.touched.publisher && formik.errors.publisher && <span className='erro-campo-formulario'>{formik.errors.publisher}</span>} */}
                    </Grid>

                    <Grid item size={12}>
                        <Grid container>
                            <Grid item size={6}></Grid>
                            <Grid item size={1}>

                                <Button color='error'  onClick={() => limpar(livro)}>Novo</Button>
                            </Grid>
                            <Grid item size={1}>

                                <Button type='submit'color='primary' variant='contained' onClick={() => salvar(livro)}>Salvar</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
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