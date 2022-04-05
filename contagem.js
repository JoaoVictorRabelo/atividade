
var N = prompt("Informe a quantidade de alunos que fizeram a prova:");
var Nota;
var Contador = 0;
var i = 0;

while (i < N) {
	Nota = prompt("Informe uma Nota");

	if (Nota >= 50) {
		Contador = Contador + 1;
	}
	
	i = i + 1;
}
document.write("Número de alunos que passaram no exame: " + Contador);