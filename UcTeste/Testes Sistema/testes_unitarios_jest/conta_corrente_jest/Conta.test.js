const ContaCorrente = require('./classes/ContaCorrente')

let maria, jose

describe('Construtor', () => {

    beforeEach(() => {
        maria = new ContaCorrente('Maria', 200);
        jose = new ContaCorrente('Jose', 100);
    })
    test('Deve criar uma conta com nome e saldo inicial', () => {
        expect(maria.nome).toBe('Maria');
        expect(maria.balanco).toBe(200);
        expect(jose.nome).toBe('Jose');
        expect(jose.balanco).toBe(100);
    });





    test('Deve verificar se o saldo entre as contas é diferente', () => {
        expect(maria.balanco).not.toEqual(jose.balanco);
    });
    test("Deve sacar o valor corretamente na conta de maria e ser igual a conta do jose", () => {

        //WHEN - QUANDO

        maria.sacar(100)

        //THEN - ENTAO

        expect(maria.balanco).toEqual(jose.balanco)
        expect(maria.balanco).toBe(100)

    });
    test("Deve depositar o valor corretamente na conta", () => {

        //WHEN - QUANDO

        jose.depositar(50)

        //THEN - ENTAO

        expect(jose.balanco).toBe(150)

        expect(jose.balanco).toEqual(maria.balanco - 50)

    });
    test("Tentar sacar um valor acima do disponível em conta deverá retornar False.", () => {

        expect(maria.sacar(300)).toBe(false)
        expect(jose.sacar(250)).toBe(false)

    });
    test("Tentar sacar um valor disponível, retornar True..", () => {

        expect(maria.sacar(200)).toBe(true)
        expect(jose.sacar(100)).toBe(true)
    });
});



