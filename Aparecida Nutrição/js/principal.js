var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso"); //puxando a informação de peso
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura"); //puxando a informação da altura
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc"); //puxando a informação do imc

	var pesoValido = true;
	var alturaValida = true;

	if (peso <= 0 || peso >= 1000) {

		console.log("Peso inválido");
		pesoValido = false;
		tdPeso.textContent = "Peso inválido";
	}

	if (altura <= 0 || altura >= 3.00) {

		console.log("Altura inválida");
		alturaValida = false;
		tdAltura.textContent = "Altura inválida";
	}

	if (pesoValido && alturaValida) {

		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2); //alterando o valor do imc na tabela .toFixed(2) ajusta para 2 casas decimais
	}

}
