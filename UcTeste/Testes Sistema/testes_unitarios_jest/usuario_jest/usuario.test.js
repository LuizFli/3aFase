
const Usuario = require('./classes/Usuario'); // Adjust the path to the correct location of your Usuario class or function

describe('Teste de User', () => {

    test('Cenario 1', () => {
        user =  new Usuario("12345678910", "Luiz Filipe", "filipefln@gmai.com", "12345678", "12345678", "12345-678");
        //THEN - ENTAO
        expect(user).toBeDefined()
    })
    test('Cenario 2', () => {
        //THEN - ENTAO 
        expect(() => new Usuario("12345678910", "Luiz Filipe", "filipefln@gmai.com", "12345678", "123456789", "12345-678")).toThrow("As senhas não coincidem.")
    })

    test('Cenario 3', () => {
        //THEN - ENTAO
        expect(() => new Usuario("12345678910", null, "filipefln@gmai.com", "12345678", "12345678", "12345-678")).toThrow("Todos os campos são obrigatórios.")
    })
    test('Cenario 4', () => {
        //THEN - ENTAO
        expect(() => new Usuario("12345678910", "Luiz Filipe", null, "12345678", "12345678", "12345-678")).toThrow("Todos os campos são obrigatórios.")

    })
    test('Cenario 5', () => {
        //THEN - ENTAO
        expect(() => new Usuario("12345678910", "Luiz Filipe", "filipefln@gmai.com", null, "12345678", "12345-678")).toThrow("Todos os campos são obrigatórios.")

    })
    test('Cenario 5-2', () => {
        //THEN - ENTAO
        expect(() => new Usuario("12345678910", "Luiz Filipe", "filipefln@gmai.com", "12345678", null, "12345-678")).toThrow("Todos os campos são obrigatórios.")

    })
    test('Cenario 6', () => {
        //THEN - ENTAO
        expect(() => new Usuario(null, "Luiz Filipe", "filipefln@gmai.com", "12345678", "12345678", "12345-678")).toThrow("Todos os campos são obrigatórios.")

    })
    test('Cenario 7', () => {
        //THEN - ENTAO 
        expect(() => new Usuario("12345678910", "Luiz Filipe", "filipefln@gmai.com", "12345678", "12345678", null)).toThrow("Todos os campos são obrigatórios.")
    })
    test('Cenario 8', () => {
        //THEN - ENTAO 
        expect(() => new Usuario("12345678910", "Luiz Filipe", "filipeflngmaicom", "12345678", "12345678", "12345-678")).toThrow("E-mail inválido.")
    })
    test('Cenario 9', () => {
        //THEN - ENTAO
        expect(() => new Usuario("12345678910", "Luiz Filipe", "filipefln@gmai.com", "1234567", "1234567", "12345-678")).toThrow("A senha deve ter pelo menos 8 caracteres.")

    })
    test('Cenario 10', () => {
        //THEN - ENTAO
        expect(() => new Usuario("11111111111", "Luiz Filipe", "filipefln@gmai.com", "12345678", "12345678", "12345-678")).toThrow("Documento deve ser um CPF ou CNPJ válido.")

    })
    test('Cenario 11', () => {
        //THEN - ENTAO
        expect(() => new Usuario("11111111111111", "Luiz Filipe", "filipefln@gmai.com", "12345678", "12345678", "12345-678")).toThrow("Documento deve ser um CPF ou CNPJ válido.")

    })
    test('Cenario 11', () => {
        //THEN - ENTAO
        expect(() => new Usuario("12345678910", "Luiz Filipe", "filipefln@gmai.com", "12345678", "12345678", "12345 678")).toThrow("CEP inválido.")

    })




})