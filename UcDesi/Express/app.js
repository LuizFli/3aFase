// // Importando o Express e o body-perser com a sintaxe ES6

// import express from 'express';

// // Criando uma instancia do Express

// const app = express();

// // Configurando o body-perser para interpretar as requisições POST

// app.use(express.json())

// // Rota Get - Retorna uma mensagem de boas-vindas

// app.get('/',(req, res) => {
//     res.json({mensagem: "Bem-Vindo!"});
// });

// // Rota POST - Recebe dados do formulário e retorna os dados








// FUNÇÂO DE CALL-BACK-----------------------

const funcaoMensagem = callback => {
    console.log('esta é a mensagem da função mensagem')
    callback();
}

funcaoMensagem(() => {
    console.log("esta e a mensagme do callback 1")
})
funcaoMensagem(() => {
    console.log("esta e a mensagme do callback 2")
})