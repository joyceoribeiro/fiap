var cpfErro = document.getElementById('cpf-erro');
var passwordErro = document.getElementById('password-erro');

function validateCpf(){
    var cpfErro = document.getElementById('exampleInputCpf').vlaue;
    if(cpfErro.length == 0){
        cpfErro.innerHTML = 'cpf-erro'
    }
}