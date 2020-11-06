var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("peso invalido!");
        pesoValido = false;
        tdImc.textContent = "Peso invalido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        console.log("altura invalido!");
        alturaValida = false;
        tdImc.textContent = "Altura invalida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false
    }
}

function validaAltura(altura){
    if(altura >= 1 && altura < 2.2){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
