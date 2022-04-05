
   
        //Algoritmo para calcular mdc
    function mdc(a, b) {
        while (b !== 0) {
            var r = a % b;
            a = b;
            b = r;
        }
        return a;
    }
    //Calcula o mdc da lista de números
    function mdc(NumeroDaLista) {
        varresultado = NumeroDaLista[0];

        for (var i = 1; i < NumeroDaLista.length; i++) {
           resultado = mdc(mdcResultado, NumeroDaLista[i]);
            document.write(resultado);
        }
        console.log(mdcResultado);
        returnresultado;
    }
    mdc([140, 28, 36]);

