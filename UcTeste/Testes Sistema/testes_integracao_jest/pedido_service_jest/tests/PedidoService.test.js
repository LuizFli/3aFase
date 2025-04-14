// PedidoService.test.js

const PedidoService = require('../classes/PedidoService');
const PagamentoService = require('../classes/PagamentoService');
const NotificacaoService = require('../classes/NotificacaoService');

// import {PedidoService} from '../classes/PedidoService'

describe('Testes de PedidoService', () => {
      
  it('Fechar Pedido com susseço!',() => {
    //GIVEN
    const pagamentoService = new PagamentoService();
    const mockPagamento = jest.spyOn(pagamentoService, "processarPagamento").mockReturnValue(true);

    const notificacaoService = new NotificacaoService();
    const mockNotificacao = jest.spyOn(notificacaoService,"enviarNotificacao");

    const pedidoService = new PedidoService(pagamentoService,notificacaoService);
    
    let pedidoDummy = {pedido: 1}

    //WHEN
    const resultado = pedidoService.fecharPedido(pedidoDummy)

    //THEN

    expect(resultado).toBeTruthy()
    expect(mockPagamento).toHaveBeenCalled()
    expect(mockNotificacao).toHaveBeenCalledWith(pedidoDummy)
    
    
  })
  it('Fechar Pedido com Falha!',() => {
    //GIVEN
    const pagamentoService = new PagamentoService();
    const mockPagamento = jest.spyOn(pagamentoService, "processarPagamento").mockReturnValue(false);

    const notificacaoService = new NotificacaoService();
    const mockNotificacao = jest.spyOn(notificacaoService,"enviarNotificacao");
    
    //WHEN

    const pedidoService = new PedidoService(pagamentoService,notificacaoService);
    const pedido = {id: 1}

    //THEN
    expect(() => {
      pedidoService.fecharPedido(pedido)
    }).toThrow(`Pedido ${pedido.id} não pôde ser fechado. Pagamento inválido.`)
    expect(mockPagamento).toHaveBeenCalled()
    expect(mockNotificacao).not.toHaveBeenCalled()
    
    
  })



});


