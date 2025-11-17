class Calculadora {
    private _operando1 : number;
    private _operando2 : number;

    constructor(operando1: number, operando2: number){
        this._operando1 = operando1;
        this._operando2 = operando2;
    }

    get operando1(): number {
        return this._operando1;
    }

    get operando2(): number {
        return this._operando2;
    }

    somar() : number {
        return this._operando1 + this._operando2;
    }

    subtrair() : number {
        return this._operando1 - this._operando2;
    }
}

let calculadora : Calculadora = new Calculadora(2,3);
console.log(calculadora.operando1);
console.log(calculadora.operando2);
console.log(calculadora.somar());
console.log(calculadora.subtrair())

class Hora {
    private _horas : number;
    private _minutos : number;
    private _segundos : number;

    constructor (horas: number, minutos: number, segundos: number){
        this._horas = horas;
        this._minutos = minutos;
        this._segundos = segundos;
    }

    get horas(): number {
        return this._horas;
    }

    get minutos(): number {
        return this._minutos;
    }

    get segundos(): number {
        return this._segundos;
    }

    horario() : string{
        let horasStr = String(this.horas).padStart(2,'0');
        let minutosStr = String(this.minutos).padStart(2,'0');
        let segundosStr = String(this.segundos).padStart(2,'0');
        return `${horasStr}h:${minutosStr}m:${segundosStr}s`;
    }
}

let hora : Hora = new Hora(12,34,54);
console.log(hora.horario());