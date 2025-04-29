const CadastroPets = require('../classes/CadastroPets');

describe('Testes Cadastro de Pets', () => {
    it('',()=> {
        //GIVEN
        const cadastroPets = new CadastroPets()
        const pet = {
            nome: 'Rex',
            idade: 5,
            tipo: 'cachorro'
        }
        //WHEN
        const resultado = cadastroPets.validarCadastro(pet)
        //THEN
        expect(resultado).toBe(true)
    })
    it('Nome inválido', () => {
        const cadastroPets = new CadastroPets()
        const pet = {
            nome: '',
            idade: 5,
            tipo: 'cachorro'
        }
        const resultado = cadastroPets.validarCadastro(pet)
        expect(resultado).toBe(false)
    })
    it('Idade inválida', () => {
        const cadastroPets = new CadastroPets()
        const pet = {
            nome: 'Rex',
            idade: -1,
            tipo: 'cachorro'
        }
        const resultado = cadastroPets.validarCadastro(pet)
        expect(resultado).toBe(false)
    })
    it('Tipo inválido', () => {
        const cadastroPets = new CadastroPets()
        const pet = {
            nome: 'Rex',
            idade: 5,
            tipo: 'elefante'
        }
        const resultado = cadastroPets.validarCadastro(pet)
        expect(resultado).toBe(false)
    })
})