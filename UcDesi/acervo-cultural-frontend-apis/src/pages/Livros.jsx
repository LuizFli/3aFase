import React, { useEffect, useState } from 'react';
import EstruturaLivros from '../components/EstruturaLivros';
import { buscarLivros } from '../services/livros';
import BookDetails from '../components/Bookdetails';
import EstrututuraPagina from '../components/EstrututuraPagina';
import { Component } from "react";

const Livros = () => {
    const [livros, setLivros] = useState([]); // Estado para armazenar a lista de livros

    const carregarLivros = async () => {
        try {
            const response = await buscarLivros();
            console.log("Dados retornados:", response);
    
            // Acesse a propriedade `data` para obter a lista de livros
            if (response.data && Array.isArray(response.data)) {
                setLivros(response.data); // Atualize o estado com os livros
            } else {
                console.error("Dados inválidos retornados pela API:", response);
                setLivros([]); // Defina um array vazio como fallback
            }
        } catch (error) {
            console.error("Erro ao carregar livros:", error);
            setLivros([]); // Defina um array vazio em caso de erro
        }
    };

    useEffect(() => {
        carregarLivros(); // Carrega os livros ao montar o componente
    }, []);

    return (
        <EstrututuraPagina titulo="Livros">
            <EstruturaLivros titulo="Detalhes do Livro">
                { Array.isArray(livros) && livros.map(livro => (
                    <BookDetails
                        key={livro.id} // Key única para cada livro
                        author={livro.author}
                        description={livro.description}
                        genre={livro.genre}
                        id={livro.id}
                        image={livro.image}
                        isbn={livro.isbn}
                        published={livro.published}
                        publisher={livro.publisher}
                        title={livro.title}
                    />
                ))}
            </EstruturaLivros>
            </EstrututuraPagina>

            );
};

            export default Livros;