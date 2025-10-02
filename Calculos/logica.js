
function soma(){

    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")
    resposta.textContent = numero1 + numero2
    
}

function sub(){

    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    var resposta = document.getElementById("respSub").textContent = numero1 - numero

    

   
}

function mult(){
    
    var nummber1 =parseFloat(document.getElementById("n5").value)
    var nummber2 =parseFloat(document.getElementById("n6").value)
    document.getElementById("respmulti").textContent = number1 * number2


}

function mult(){
    
    var number1 =parseFloat(document.getElementById("n5").value)
    var number2 =parseFloat(document.getElementById("n6").value)
    document.getElementById("respmulti").textContent = number1 * number2


}

function mult(){
    
    var nummber1 =parseFloat(document.getElementById("n5").value)
    var nummber2 =parseFloat(document.getElementById("n6").value)
    document.getElementById("respmulti").textContent = number1 * number2




}

function div(){

    var a =parseFloat(document.getElementById("n7").value)
    var b =parseFloat(document.getElementById("n8").value)
    var resp = document.getElementById("respDiv")

    if(b !== 0){
        resp.innerHTML = a / b
    }else{
        resp.innerHTML = "Nao se divide por 0"
    }
}


