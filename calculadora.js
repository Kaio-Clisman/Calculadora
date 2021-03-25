function calcular() {
    let primeiroValor =document.getElementById('primeiroValor').value
    let segundoValor = document.getElementById('segundoValor').value
    primeiroValor = parseInt(primeiroValor)
    segundoValor = parseInt(segundoValor)
    
    let operacao = document.getElementById('operacao')
    let operador = operacao.value

    if(operador == '+') {
        resultado = primeiroValor + segundoValor
    } else if(operador == '-') {
        resultado = primeiroValor - segundoValor
    } else if(operador == 'x') {
        resultado = primeiroValor * segundoValor
    } else if(operador == '/') {
        resultado = primeiroValor / segundoValor
    }

    document.getElementById('resultado').innerHTML = resultado
}