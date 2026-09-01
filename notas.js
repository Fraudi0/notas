function calcular() {
    console.log("Apertou")

    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)
    let nota3 = parseFloat(document.getElementById('nota3').value)

    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        document.getElementById('erro').innerHTML = "Aprovado - Média: " + media.toFixed(2)
    } else {
        document.getElementById('erro').innerHTML = "Reprovado - Média: " + media.toFixed(2)
    }
}