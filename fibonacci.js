var n = prompt("Informe o número de termos da sequência:");

var term1 = 0;
var term2 = 1;
var term3;

document.write(a1 + ", " + a2);

for (i = 3; i <= n; i++)
{
    term3 = a1 + a2;
	document.write(", " + term3);
	a1 = a2;
	a2 = term3;
}