var Responsavel = /** @class */ (function () {
    function Responsavel() {
    }
    return Responsavel;
}());
var R = new Array();
function getValue() {
    var r = new Responsavel();
    r.name = document.querySelector('#name')['value'];
    r.cpf = document.querySelector('#cpf')['value'];
    save(r);
}
function validator(dados) {
    if (dados.name.length && dados.cpf.length) {
        return true;
    }
    return false;
}
function save(r) {
    if (validator(r)) {
    }
    else {
        alert("É necessário preencher todos os campo para poder continuar!");
        return;
    }
    R.push(r);
    list();
    console.log("Saving...", R);
}
function list() {
    for (var _i = 0, R_1 = R; _i < R_1.length; _i++) {
        var value = R_1[_i];
        console.log("value: ", value);
    }
}
