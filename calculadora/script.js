function calcular() {
    const valorA = document.getElementById("txtA").value;
    const valorB = document.getElementById("txtB").value;
    const valorC = document.getElementById("txtC").value;

    const delta = valorB * valorB - 4 * valorA * valorC

    if (delta < 0) {
        document.getElementById('result').innerHTML = 'Não há soluções reais.';
        
    } else if (delta === 0) {
        const x = - valorB / (2 * valorA);

        document.getElementById('result').innerHTML = `A solução é x = ${x}.`;
    } else {
        const x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
        const x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
        document.getElementById('result').innerHTML = `As soluções são x1 = ${x1} e x2 = ${x2}.`;
    }

}

function limpar() {
        document.getElementById("txtA").value = "";
        document.getElementById("txtB").value = "";
        document.getElementById("txtC").value = "";
        document.getElementById("result").innerHTML = "";

    }

