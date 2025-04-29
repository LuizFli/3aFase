const ListaDeTarefas = require('../classes/ListaDeTarefas');

describe('Testes de Lista de Tarefas', () => {
    it('Adicionar tarefa', () => {
        //GIVEN
        const lista = new ListaDeTarefas();
        const tarefa = 'Estudar JavaScript';
        //WHEN
        lista.adicionarTarefa(tarefa);
        const resultado = lista.listarTarefas();
        //THEN
        expect(resultado).toEqual([tarefa]);
    });

    it('Remover tarefa', () => {
        //GIVEN
        const lista = new ListaDeTarefas();
        const tarefa1 = 'Estudar JavaScript';
        const tarefa2 = 'Fazer exercícios';
        lista.adicionarTarefa(tarefa1);
        lista.adicionarTarefa(tarefa2);
        //WHEN
        lista.removerTarefa(tarefa1);
        const resultado = lista.listarTarefas();
        //THEN
        expect(resultado).toEqual([tarefa2]);
    });

    it('Listar tarefas', () => {
        //GIVEN
        const lista = new ListaDeTarefas();
        const tarefa1 = 'Estudar JavaScript';
        const tarefa2 = 'Fazer exercícios';
        lista.adicionarTarefa(tarefa1);
        lista.adicionarTarefa(tarefa2);
        //WHEN
        const resultado = lista.listarTarefas();
        //THEN
        expect(resultado).toEqual([tarefa1, tarefa2]);
    });
})