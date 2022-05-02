function cal() {

    var nota_1 = parseInt(document.getElementById('nota1').value);
    var nota_2 = parseInt(document.getElementById('nota2').value);
    var nota_3 = parseInt(document.getElementById('nota3').value);
    document.getElementById('result').value = parseInt((nota_1 + nota_2 + nota_3) / 3);
}