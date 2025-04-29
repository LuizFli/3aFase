const ValidadorSenha = require('../classes/ValidadorSenha');

describe('Testes de Validador de Senha', () => {

    it('Senha válida', () => {
        //GIVEN
        const validador = new ValidadorSenha();
        const senha = 'Senha123!';
        //WHEN
        const resultado = validador.validar(senha);
        //THEN
        expect(resultado).toBe(true);
    });

    it('Senha inválida - sem número', () => {
        //GIVEN
        const validador = new ValidadorSenha();
        const senha = 'Senhasenha!';
        //WHEN
        const resultado = validador.validar(senha);
        //THEN
        expect(resultado).toBe(false);
    });

    it('Senha inválida - sem símbolo', () => {
        //GIVEN
        const validador = new ValidadorSenha();
        const senha = 'Senha1231';
        //WHEN
        const resultado = validador.validar(senha);
        //THEN
        expect(resultado).toBe(false);
    });

    it('Senha inválida - sem maiúscula', () => {
        //GIVEN
        const validador = new ValidadorSenha();
        const senha = 'senha123!';
        //WHEN
        const resultado = validador.validar(senha);
        //THEN
        expect(resultado).toBe(false);
    });

    it('Senha inválida - muito curta', () => {
        //GIVEN
        const validador = new ValidadorSenha();
        const senha = '123A!';
        //WHEN
        const resultado = validador.validar(senha);
        //THEN
        expect(resultado).toBe(false);
    });
})