// crie uma funcao ( compra ) que receba uma funcao de callback onde deve se realizar todo o processamento dos produtos, alem do metodo que da baixa no sistema com o pagamento aprovado.
// Crie mais 2 funcoes que vao ser as funcoes de callback que serao chamadas dentro da funcao compra, uma se chama pagamentoPix e outra se chama pagamentoCartao, a pagamento pix devera ter uma funcao dentro dela onde aparece um console.log("QRcode disponivel"), alem de um outro console log ("Pagamento efetuado") na ultima etapa da funcao. Ja a funcao pagamento devera ter um console de ("Inserindo dados do cartao") alem de ter um console no final da funcao de "Pagamento aprovado".
let condicao = true


const compra = (callback) => {

    console.log('Processando Produtos');
    console.log('realizando pagamentos!');

    const pagamentoAprovado = (tipo) => {
        console.log(`Pagamento via ${tipo} aprovado!`);
    }
    const pagamentoNegado = (tipo) => {
        console.log(`Pagamento via ${tipo} reprovado!`);
    }
    if (condicao) {

        callback(pagamentoAprovado);
    } else {

        callback(pagamentoNegado);
    }
}

const pagamentoPix = (tipo) => {
    console.log("QRcode disponivel");
    tipo("pix");

}

const pagamentoCartao = (tipo) => {
    console.log("Inserindo dados do cartao");
    tipo('Cartão');

}

compra(pagamentoPix);
compra(pagamentoCartao);


