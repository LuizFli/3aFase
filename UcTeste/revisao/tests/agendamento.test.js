const AgendamentoConsulta = require("../classes/AgendamentoConsulta")

describe("teste de Agendamento de consulta", () => {

    it('retorna data valida', () => {
        //GIVEN
        const agendamentoConsulta = new AgendamentoConsulta()
        const dataValida = "2025-04-28"
        //WHEN
        const resultado = agendamentoConsulta.dataValida(dataValida)
        //THEN
        expect(resultado).toBe(true)

    })
    it('retorna data invalida', () => {
        const agendamentoConsulta = new AgendamentoConsulta()
        const dataInvalida = "2025-04-40"
        //WHEN
        const resultado = agendamentoConsulta.dataValida(dataInvalida)
        //THEN
        expect(resultado).toBe(false)

    })
    it('Retorna Data Futura valida', () => {
        //GIVEN
        const agendamentoConsulta = new AgendamentoConsulta()
        const ano = new Date().getFullYear()
        const data = `${ano + 1}-04-27`
        //WHEN
        const resultado = agendamentoConsulta.dataFutura(data)
        //THEN
        expect(resultado).toBe(true)
    })
    it('Retorna Data Futura invalida', () => {
        //GIVEN
        const agendamentoConsulta = new AgendamentoConsulta()
        const dataFuturaInvalida = new Date().toISOString().split('T')[0]
        //WHEN
        const resultado = agendamentoConsulta.dataFutura(dataFuturaInvalida)
        //THEN
        expect(resultado).toBe(false)
    })
    it('retorna Agendamento de consulta com sucesso', () => {
        const agendamentoConsulta = new AgendamentoConsulta()
        const paciente = "João"
        const dataFutura = "2028-04-27"
        //WHEN
        agendamentoConsulta.agendarConsulta(paciente, dataFutura)
        const resultado = agendamentoConsulta.listarConsultas()
        //THEN
        expect(resultado).toEqual([{ paciente: paciente, data: dataFutura }])
    })
    it('retorna erro ao agendar consulta', () => {
        const agendamentoConsulta = new AgendamentoConsulta()
        const paciente = "João"
        const ano = new Date().getFullYear()
        const dataFuturaInvalida = new Date().toISOString().split('T')[0]
        const dataFutura = `${ano + 1}-04-27`
        const dataInvalida = "2025-04-40"
        //WHEN

        agendamentoConsulta.agendarConsulta(paciente, dataFutura)

        //THEN

        expect(() => agendamentoConsulta.agendarConsulta(paciente, dataFuturaInvalida)).toThrow("A data deve ser futura.")
        expect(() => agendamentoConsulta.agendarConsulta()).toThrow("Paciente e data são obrigatórios.")
        expect(() => agendamentoConsulta.agendarConsulta(paciente)).toThrow("Paciente e data são obrigatórios.")
        expect(() => agendamentoConsulta.agendarConsulta(undefined, dataFutura)).toThrow("Paciente e data são obrigatórios.")
        expect(() => agendamentoConsulta.agendarConsulta(paciente, dataInvalida)).toThrow("Data inválida.")
    })
    it('Cancelar Consulta', () => {
        const agendamentoConsulta = new AgendamentoConsulta()
        const paciente = ["João", "Maria"]
        
        const dataFutura = "2028-04-27"
        //WHEN
        agendamentoConsulta.agendarConsulta(paciente[0], dataFutura)
        agendamentoConsulta.agendarConsulta(paciente[1], dataFutura)
        agendamentoConsulta.cancelarConsulta(paciente[0])
        const resultado = agendamentoConsulta.listarConsultas()
        //THEN
        expect(resultado).toEqual([{ paciente: paciente[1], data: dataFutura }])
    })

})