

document.querySelector('.calcular').addEventListener('click',()=>{
    var n1= parseFloat( document.querySelector('.nota1').value)
    var n2 = parseFloat( document.querySelector('.nota2').value)
    var n3= parseFloat( document.querySelector('.nota3').value)
    var n4 = parseFloat( document.querySelector('.nota4').value)
    var soma = n1 + n2 + n3 + n4
var media = soma/4

if(media < 5){
    
    document.querySelector('.resultado').innerHTML = `sua média é: ${media}.<br> E você foi Reprovado`
}else if(media < 7){
    document.querySelector('.resultado').innerHTML = `sua média é: ${media}.<br> E você está de recuperação`
}else{
    document.querySelector('.resultado').innerHTML = `sua média é: ${media}. <br>E você foi Aprovado`
}
   


})
