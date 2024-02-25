let pass = document.getElementById('senha')
let confirm = document.getElementById('confirmar')

function confirmacao(){
    let res = document.getElementById('res')
    let confirme = confirm.value
    let senha = pass.value
    if(confirme.length != senha.length){
        res.innerHTML = "senhas diferentes"
    }else{
        res.innerHTML = ""
    }

}

console.log(senha)
