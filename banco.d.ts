declare class Conta {
    private _id;
    private _numero;
    private _saldo;
    private _cliente;
    private _dataDeAbertura;
    constructor(numero: string, saldo: number);
    sacar(valor: number): void;
    depositar(valor: number): void;
    get saldo(): number;
    transferir(contaDestino: Conta, valor: number): void;
    get numero(): string;
    set id(umId: number);
    get cliente(): Cliente;
    set cliente(umCliente: Cliente);
}
declare class Cliente {
    private _id;
    private _nome;
    private _cpf;
    private _dataNascimento;
    private _contas;
    constructor(nome: string, cpf: string, dataNascimento: Date);
    set id(umId: number);
    get cpf(): string;
    get contas(): Conta[];
    get nome(): string;
}
declare class Banco {
    private _contas;
    private _clientes;
    private _idClienteAtual;
    private _idContaAtual;
    constructor();
    inserirConta(conta: Conta): void;
    consultarConta(numero: string): Conta;
    consultarContaPorIndice(numero: string): number;
    excluir(numero: string): void;
    alterar(conta: Conta): void;
    inserirCliente(cliente: Cliente): void;
    consultarCliente(cpf: string): Cliente;
    excluirCliente(cpf: string): void;
    sacar(numero: string, valor: number): void;
    depositar(numero: string, valor: number): void;
    transferir(numeroOrigem: string, numeroDestino: string, valor: number): void;
    associarContaCliente(numeroConta: string, cpfCliente: string): void;
    jaExisteContaParaCliente(cpf: string, numero: string): boolean;
    pesquisarContaPorCPF(cpf: string): Conta;
    listarContasSemCliente(): Conta[];
    listarContasCliente(cpf: string): Conta[];
    totalizarSaldoCliente(cpf: string): number;
    obterQuantidadeDeContas(): number;
    obterTotalDinheiroDepositado(): number;
    calcularMediaSaldoContas(): number;
    realizarOrdemBancaria(numeroContaOrigem: string, numerosContasDestino: string[], valor: number): void;
    transferirTitularidade(numeroConta: string, cpf: string): void;
    carregarDados(): void;
}
export { Conta, Cliente, Banco };
//# sourceMappingURL=banco.d.ts.map