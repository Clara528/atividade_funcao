//8. Crie duas funções para autenticação de acesso: a) validarSenha(senha): retorna true se a string senha tiver pelo menos 6
//caracteres, ou false caso contrário. b) autenticarUsuario(usuario, senha): chama internamente a função validarSenha. Se a 
// senha for válida, retorna "Acesso concedido para [usuario]". Caso contrário, retorna "Senha muito curta para o usuário
//[usuario]".

//Resolução da questão: fiz uma função que ve se a senha é curta ou não e fiz outra função que deixa acessar se a senha tiver 
// 6 ou mais caracteres, e retorna no final se o acesso foi concedido ou não. Eu achei media para dificil foi dificil para 
//mim entender o raciocinio.

function validarSenha(senha){
    if(senha.length >= 6)
    {
        return true;
    } 

    else{
        return false;
    }
}

function autenticarUsuario (usuario,senha){

    if(validarSenha(senha))
    {
        return "Acesso concedido para "  + usuario ;
    }

    else{
        return "Senha muito curta para o usuario " + usuario ;
    }
}
let usuario = prompt("Digite o nome do usuario")
let senha = prompt("Digite a senha")

let resultado = autenticarUsuario(usuario, senha);

alert(resultado)
