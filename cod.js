function relogio(){
let data = new Date ()
let hora = data.getHours ()
let min = data.getMinutes ()
let sec = data.getSeconds ()
let mensagem 

if (hora < 10){
    hora = '0' + hora
    }
    if (min < 10){
    min = '0' + min
    }
    if (sec < 10){
    sec = '0' + sec
    }


if (hora < 12){
    mensagem = 'Bom dia'
}
else if (hora >= 12 && hora <= 18){
    mensagem = 'Boa Tarde'
}
else if (hora >= 18 && hora <= 23){
    mensagem = 'Boa Noite'
}



document.getElementById('timer').innerHTML = hora+':'+min+':'+sec
document.getElementById('text').innerHTML = mensagem



}


window.setInterval('relogio()',1000)

function request(){
    let requisicao = fetch ('https://api.hgbrasil.com/weather?key=74818fc9' )
    console.log (requisicao)


}
request()
