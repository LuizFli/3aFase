const  Calculadora = require("./classes/Calculadora")
describe("Testes da Calculadora", () => {

    beforeAll(() => {
        //GIVEN - DADO
        calc = new Calculadora()
    })
test("Deve Somar Dois numeros com sucesso", () => {


    //WHEN - QUANDO

    resultado = calc.somar(2,3)


    //THEN - ENTAO

    expect(resultado).toBe(5)
  

})

test("Deve Subtrair Dois numeros com sucesso", () => {


    //WHEN - QUANDO

    resultado = calc.subtrair(5,3)

    //THEN - ENTAO

     expect(resultado).toBe(2)


})
test("Deve Multiplicar Dois numeros com sucesso", () => {

    //WHEN - QUANDO

    resultado = calc.multiplicar(2,3)

    //THEN - ENTAO
    
    expect(resultado).toBe(6)
})
test("Deve Dividir Dois numeros com sucesso", () => {

    //WHEN - QUANDO

    resultado = calc.dividir(6,3)

    //THEN - ENTAO

    expect(resultado).toBe(2)
})
})