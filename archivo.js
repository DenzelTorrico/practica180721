class calcula {
    a;
    b;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    sumar() {
        document.getElementById("suma").value = this.a + this.b;
    }
    restar() {
        document.getElementById("resta").value = this.a - this.b;
    }
    multiplicar() {
        document.getElementById("multi").value = this.a * this.b;
    }
    divide() {
        document.getElementById("divide").value = this.a / this.b;
    }
}

function calcular() {
    var a = document.getElementById("id").value;
    var b = document.getElementById("id2").value;
    a = parseInt(a);
    b = parseInt(b);
    let ns = new calcula(a, b);
    ns.sumar();
    ns.restar();
    ns.multiplicar();
    ns.divide();
}