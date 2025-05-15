import { Field, Form, FormikProvider, useFormik } from 'formik';
import '../assets/css/cadastro.css'
import TextInput from '../componentes/TextInput';
import { useEffect } from 'react';
//import * as yup from 'yup';
import { object, string } from 'yup';
import { Button, Card, Grid, TextField as MuiTextField, Paper } from '@mui/material';
import styled from '@emotion/styled';

const TextField = styled(MuiTextField)(() => ({
    marginBottom: '20px'
}
))

const FilmeSchema = object({
    titulo: string()
                .required("Título é obrigatório.")
                .max(50, "Título permite apenas 50 caracteres"),
    subtitulo: string()
                .max(50, "Subtitulo permite apenas 50 caracteres"),
    diretor: string()
                .required("Diretor é obrigatório.")
                .max(50, "Diretor permite apenas 50 caracteres")
})

const Cadastro = props => {
    const { filme, salvar, limpar, voltar } = props;

    const formik = useFormik({
        initialValues: filme,
        validationSchema: FilmeSchema,
        onSubmit: salvar
    });
    
    const alterarValor = (nomeCampo, valorCampo) => {
        console.log("Formik: ", formik);
        console.log("Values do Formulário: ", formik.values)
        filme[nomeCampo] = valorCampo;
    }

    useEffect(() => {
        formik.setValues(filme);
    }, [filme]);

    /*const alterarSubtitulo = subtitulo => {
        console.log("subtitulo ", subtitulo);
        console.log("filme antes: ", filme);
        filme.subtitulo = subtitulo;
        console.log("filme depois: ", filme);
    }*/

    return (
                <Card>
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Grid container >
                    <Grid item size={8} >
                        <TextField label="Título"
                            variant='outlined' 
                            fullWidth
                            name="titulo"
                            value={formik.values.titulo} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.titulo && formik.errors.titulo}
                            helperText={formik.touched.titulo && formik.errors.titulo}
                        />
                    </Grid>
                    <Grid item size={8}>
                        <TextField label="Subtitulo"
                            variant='outlined' 
                            fullWidth
                            name="subtitulo"
                            value={formik.values.subtitulo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.subtitulo && formik.errors.subtitulo}
                            helperText={formik.touched.subtitulo && formik.errors.subtitulo}
                        />
                    </Grid>
                    <Grid item size={8} >
                        <TextField label="Diretor" 
                            variant='outlined' 
                            fullWidth
                            name="diretor"
                            value={formik.values.diretor}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.diretor && formik.errors.diretor}
                            helperText={formik.touched.diretor && formik.errors.diretor}
                        />
                    </Grid>
                    <Grid item size={12}>
                        <Grid container justifyContent='end'>
                            <Grid item size={2}>
                                <Button color="primary" variant='outlined' onClick={voltar}>Voltar</Button>
                            </Grid>
                            <Grid item size={2}>
                                <Button color="primary" variant='outlined' onClick={limpar}>Novo</Button>
                            </Grid>
                            <Grid item size={2}>
                                <Button type='submit' color="primary" variant='contained' >Salvar</Button>
                            </Grid>
                            <Grid item size={1}/>
                        </Grid>
                    </Grid>
                </Grid>
                
                {/*<div className="formulario">
                    <TextInput label="Título" 
                        name="titulo"
                        value={formik.values.titulo} 
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                    />
                    {formik.touched.titulo && formik.errors.titulo && 
                        <span className='erro-campo-formulario'>{formik.errors.titulo}</span>}
                    <TextInput label="Subtitulo"
                        name="subtitulo"
                        value={formik.values.subtitulo}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}/>
                        {formik.touched.subtitulo && formik.errors.subtitulo && 
                        <span className='erro-campo-formulario'>{formik.errors.subtitulo}</span>}
                    <TextInput label="Diretor" 
                        name="diretor"
                        value={formik.values.diretor}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}/>
                        {formik.touched.diretor && formik.errors.diretor && 
                        <span className='erro-campo-formulario'>{formik.errors.diretor}</span>}
                    <div className='botoes'>
                        <button className='botao-formulario' onClick={limpar}>Novo</button>
                        <button type='submit' className='botao-formulario'>Salvar</button>
                    </div>
                </div>*/}
            </Form>

        </FormikProvider>
        </Card>
        
    )
}

export default Cadastro;