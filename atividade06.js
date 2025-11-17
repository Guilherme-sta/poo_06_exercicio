"use strict";
class Calculadora {
    constructor(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    get operando1() {
        return this._operando1;
    }
    get operando2() {
        return this._operando2;
    }
    somar() {
        return this._operando1 + this._operando2;
    }
    subtrair() {
        return this._operando1 - this._operando2;
    }
}
let calculadora = new Calculadora(2, 3);
console.log(calculadora.operando1);
console.log(calculadora.operando2);
console.log(calculadora.somar());
console.log(calculadora.subtrair());
class Hora {
    constructor(horas, minutos, segundos) {
        this._horas = horas;
        this._minutos = minutos;
        this._segundos = segundos;
    }
    get horas() {
        return this._horas;
    }
    get minutos() {
        return this._minutos;
    }
    get segundos() {
        return this._segundos;
    }
    horario() {
        let horasStr = String(this.horas).padStart(2, '0');
        let minutosStr = String(this.minutos).padStart(2, '0');
        let segundosStr = String(this.segundos).padStart(2, '0');
        return `${horasStr}h:${minutosStr}m:${segundosStr}s`;
    }
}
let hora = new Hora(12, 34, 54);
console.log(hora.horario());
