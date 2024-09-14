function validateForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome == "" || email == "" || mensagem == "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Por favor, insira um endereço de email válido.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
