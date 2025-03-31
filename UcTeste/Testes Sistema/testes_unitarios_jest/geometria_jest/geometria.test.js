const GeometriaService = require('./classes/GeometriaService');

describe('Geometria', () => {
    beforeAll(() => {
        //GIVEN - DADO
        geo = new GeometriaService()
    })


    test('Ao calcular a área do triângulo de base 2.0 e altura 2.0 deve ser obtido o valor 2.0 de área.', () => {
        //WHEN - QUANDO
        resultado = geo.areaTriangulo(2.0, 2.0)

        //THEN - ENTAO
        expect(resultado).toBe(2.0)
    })
    test("Ao calcular a área de um círculo de raio 2.0 deve ser retornado o valor 12.5 de área com precisão de 0.1.", () => {

        //WHEN - QUANDO
        resultado = geo.areaCircunferencia(2.0)

        //THEN - ENTAO
        expect(resultado).toBeCloseTo(12.6, 1)


    });
    test('Ao calcular a área de um quadrado de lado 2.0 deve ser retornado o valor 4.0 de área.', () => {

        //WHEN - QUANDO
        resultado = geo.areaQuadrado(2.0)

        //THEN - ENTAO

        expect(resultado).toBe(4.0)
    })
    test('Ao calcular a área de um retângulo de lados 2.0 e 3.0 deve ser retornado o valor de 6.0 de área.', () => {

        //WHEN - QUANDO 
        resultado = geo.areaRetangulo(2.0, 3.0)

        //THEN - ENTAO

        expect(resultado).toBe(6.0)
    })
    test('Ao calcular o volume de um cubo de lado 2.0 deve ser retornado o valor 8.0.', () => {

        //WHEN - QUANDO
        resultado = geo.volumeCubo(2.0)

        //THEN - ENTAO

        expect(resultado).toBe(8.0)
    })
    test('Ao calcular o volume de um cilindro de raio 2.0 e altura 2.0 deve ser retornado o valor de 25.1 com precisão de 0.1. ', () => {

        //WHEN - QUANDO
        resultado = geo.volumeCilindro(2.0, 2.0)

        //THEN - ENTAO
        expect(resultado).toBeCloseTo(25.1, 1)
    })
    test('Ao calcular o volume de uma esfera de raio 2.0 deve ser retornado o valor de 33.5 com precisão de 0.1.', () => {

        //WHEN - QUANDO
        resultado = geo.volumeEsfera(2.0)

        //THEN - ENTAO
        expect(resultado).toBeCloseTo(33.5, 1)
    })


});