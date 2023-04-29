console.log('App calculator');

function sumar(){
    const forma = document.getElementById("forma");
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)){
        resultado = 'La operación no incluye ningún número.'
        console.log(resultado);
    }
    document.getElementById("result").innerHTML = `Resultado: ${resultado}`;
}