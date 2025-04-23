import express from 'express';
let items = [
    { id: 1, nome: 'Arroz', marca: 'Tio João', preco: '6.39' },
    { id: 2, nome: 'Feijão', marca: 'Camil', preco: '8.99' },
    { id: 3, nome: 'Açúcar', marca: 'União', preco: '5.49' }
]
const app = express()


app.use(express.json())

app.get('/', (req, res)=> {
    res.json(items)
});
app.post('/items', (req, res) => {
    const {nome, marca, preco} = req.body;
    const numerosId = items.map(({id}) => id);
    let id = Math.max(...numerosId) +1;
    items.push({
        id,
        nome,
        marca,
        preco

    });
    res.json({
        mensagem: 'Dados Recebidos com Sucesso!',
        body: {nome, marca, preco}

    })
    
});
app.delete('/items', (req, res) => {
    const {idItem} = req.params;
    items.filter(item => item.id != idItem)
    res.json({
        mensagem: "Dado Deletado Com sucesso!"
    })
})
app.listen(3000, 'Servidor Rodando na porta 3000')
