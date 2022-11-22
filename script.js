

document.querySelector('.calcular').addEventListener('click',()=>{
    var n1= parseFloat( document.querySelector('.nota1').value)
    var n2 = parseFloat( document.querySelector('.nota2').value)
    
    var soma = n1 + n2

    document.querySelector('.resultado').innerHTML = soma
})