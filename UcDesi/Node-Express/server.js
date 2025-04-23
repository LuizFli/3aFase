import fastify from "fastify";
import { request } from "http";
const servidor = fastify();

const _listaDeUsuarios = []

servidor.get('/usuario', () => {

    return _listaDeUsuarios

})
servidor.post('/usuario', (request, reply) => {

    const usuario = request.body;
    criarUsuario(usuario)
    // const atributo = request.body.nome

    return 'Usuario Cadastrado!';

})
servidor.put('/usuario', (request, reply) => {

    const usuario = request.body;
    editarUsuario(usuario)
    // const atributo = request.body.nome

    return 'Usuario Cadastrado!';

})
servidor.delete('/usuario/:id', (request, reply) => {

    const usuario = request.params;
    deletarUsuario(usuario)
    console.log(usuario,'user')
    // const atributo = request.body.nome

    return 'Usuario Deletado!';

})

function editarUsuario(userName) {
    for (const dadosDoUsuario of _listaDeUsuarios) {
        if (dadosDoUsuario.id === "2") {
            console.log(dadosDoUsuario);
            dadosDoUsuario.nome = "Butijão"
            dadosDoUsuario.cpf = "000.000.000-00"
            dadosDoUsuario.endereco = "Rua do Gas n 879"
        }
    }
}
function deletarUsuario(userName) {
    console.log(_listaDeUsuarios)
    for (const dadosDoUsuario of _listaDeUsuarios) {
        if (dadosDoUsuario.id === userName.id) {
            console.log("nnn")
            _listaDeUsuarios = []
            
        }
    }
    console.log(_listaDeUsuarios,'aaaaaaaaaaaaaaaaaaaaaaaaaaa')
}

function criarUsuario(userName) {
    // Cria usuario no banco de dados
    _listaDeUsuarios.push(userName)
    console.log(_listaDeUsuarios)


}

servidor.listen(3000, () =>{
    console.log(`Servidor rodando na porta 3000`)
    
})