const ConversorTemperatura = require('../classes/ConversorTemperatura');

describe('Testes de Conversão de Temperatura', () => {
    it('Celsius para Fahrenheit', () => {
        //GIVEN
        const conversor = new ConversorTemperatura();
        const celsius = 25;
        //WHEN
        const resultado = conversor.celsiusParaFahrenheit(celsius);
        //THEN
        expect(resultado).toBe(77);
    });

    it('Fahrenheit para Celsius', () => {
        //GIVEN
        const conversor = new ConversorTemperatura();
        const fahrenheit = 77;
        //WHEN
        const resultado = conversor.fahrenheitParaCelsius(fahrenheit);
        //THEN
        expect(resultado).toBe(25);
    });
})