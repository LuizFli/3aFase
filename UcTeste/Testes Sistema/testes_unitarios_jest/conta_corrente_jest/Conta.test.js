const ContaCorrente = require('./classes/ContaCorrente')

let maria, jose

describe('Construtor', () => {

    beforeEach(() => {
        maria = new ContaCorrente('Maria', 200);
        jose = new ContaCorrente('Jose', 100);
    })
    test('deve criar uma conta com nome e saldo inicial', () => {
        expect(maria.nome).toBe('Maria');
        expect(maria.balanco).toBe(200);
        expect(jose.nome).toBe('Jose');
        expect(jose.balanco).toBe(100);
    });





    test('deve verificar se o saldo entre as contas é diferente', () => {
        expect(maria.balanco).not.toEqual(jose.balanco);
    });
    test("Deve sacar o valor corretamente na conta de maria e ser igual a conta do jose", () => {

        //WHEN - QUANDO

        maria.sacar(100)

        //THEN - ENTAO

        expect(maria.balanco).toEqual(jose.balanco)
        expect(maria.balanco).toBe(100)

    })



    test("Deve depositar o valor corretamente na conta", () => {

        //WHEN - QUANDO

        jose.depositar(50)

        //THEN - ENTAO

        expect(jose.balanco).toBe(150)

        expect(jose.balanco).toEqual(maria.balanco - 50)

    })
})



