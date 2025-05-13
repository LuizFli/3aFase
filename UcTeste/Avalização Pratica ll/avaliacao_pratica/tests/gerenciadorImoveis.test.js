const GerenciadorImoveis = require("../classes/GerenciadorImoveis")

describe("teste de Gerenciador de Imoveis", () => {

    it('adiciona um imóvel com sucesso', () => {
        //GIVEN
        const gerenciador = new GerenciadorImoveis()
        const imovel = {
            endereco: "Rua A, 123",
            bairro: "Centro",
            preco: 300000,
            status: "disponível"
        }
        //WHEN
        gerenciador.adicionarImovel(imovel)
        const resultado = gerenciador.listarImoveis()
        //THEN
        expect(resultado).toEqual([imovel])
    })

    it('busca imóveis por bairro', () => {
        //GIVEN
        const gerenciador = new GerenciadorImoveis()
        const imovel1 = {
            endereco: "Rua A, 123",
            bairro: "Centro",
            preco: 300000,
            status: "disponível"
        }
        const imovel2 = {
            endereco: "Rua B, 456",
            bairro: "Centro",
            preco: 400000,
            status: "indisponível"
        }
        gerenciador.adicionarImovel(imovel1)
        gerenciador.adicionarImovel(imovel2)
        //WHEN
        const resultado = gerenciador.buscarImoveisPorBairro("Centro")
        //THEN
        expect(resultado).toEqual([imovel1, imovel2])
    })

    it('lista imóveis disponíveis', () => {
        //GIVEN
        const gerenciador = new GerenciadorImoveis()
        const imovel1 = {
            endereco: "Rua A, 123",
            bairro: "Centro",
            preco: 300000,
            status: "disponível"
        }
        const imovel2 = {
            endereco: "Rua B, 456",
            bairro: "Centro",
            preco: 400000,
            status: "indisponível"
        }
        gerenciador.adicionarImovel(imovel1)
        gerenciador.adicionarImovel(imovel2)
        //WHEN
        const resultado = gerenciador.listarImoveisDisponiveis()
        //THEN
        expect(resultado).toEqual([imovel1])
    })

    it('retorna erro ao adicionar imóvel inválido', () => {
        //GIVEN
        const gerenciador = new GerenciadorImoveis()
        const imovelInvalido = {
            endereco: "",
            bairro: "Centro",
            preco: -100,
            status: "disponível"
        }
        //WHEN
        //THEN
        expect(() => gerenciador.adicionarImovel(imovelInvalido)).toThrow("Endereço inválido.")
    })
    
    
    it('retorna erro ao adicionar imóvel com preço inválido', () => {
        //GIVEN
        const gerenciador = new GerenciadorImoveis()
        const imovelInvalido = {
            endereco: "Rua A, 123",
            bairro: "Centro",
            preco: -100,
            status: "disponível"
        }
        //WHEN
        //THEN
        expect(() => gerenciador.adicionarImovel(imovelInvalido)).toThrow("Preço inválido. Deve ser um número maior que zero.")
    })
    it('retorna erro ao adicionar imóvel com status inválido', () => {
        //GIVEN
        const gerenciador = new GerenciadorImoveis()
        const imovelInvalido = {
            endereco: "Rua A, 123",
            bairro: "Centro",
            preco: 300000,
            status: "indefinido"
        }
        //WHEN
        //THEN
        expect(() => gerenciador.adicionarImovel(imovelInvalido)).toThrow("Status inválido. Deve ser 'disponível' ou 'indisponível'.")
    })
    it('retorna erro ao adicionar imóvel com bairro inválido', () => {
        //GIVEN
        const gerenciador = new GerenciadorImoveis()
        const imovelInvalido = {
            endereco: "Rua A, 123",
            bairro: "",
            preco: 300000,
            status: "disponível"
        }
        //WHEN
        //THEN
        expect(() => gerenciador.adicionarImovel(imovelInvalido)).toThrow("Bairro inválido.")
    })
    it('retorna erro ao adicionar imóvel com o endereço inválido', () => {
        //GIVEN
        const gerenciador = new GerenciadorImoveis()
        const imovelInvalido = {
            endereco: "",
            bairro: "Centro",
            preco: 0,
            status: "indefinido"
        }
        //WHEN
        //THEN
        expect(() => gerenciador.adicionarImovel(imovelInvalido)).toThrow("Endereço inválido.")
    })
})