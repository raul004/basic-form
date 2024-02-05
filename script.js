const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

// adicionando um evento no form, através do botão.
form.addEventListener("submit", (e) => {
    // para a página não recarregar assim que clicarmos no botão.
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // armazenando os valores escritos nos inputs.
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === "") {
        setErrorFor(username, "O nome do usuário é obrigatório.");
    } else {
        setSucessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "O e-mail é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Insira um e-mail válido.");
    } else {
        setSucessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatório.");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter mais de 7 caracteres.");
    } else {
        setSucessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatório.");
    } else if (passwordConfirmationValue != passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas não conferem.");
    } else {
        setSucessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control success";
    });

    if (formIsValid) {
        console.log("o formulário está 100% válido.")
    }
}

// criando função para mostrar o ERROR.
function setErrorFor(input, message) {
    // armazenando o pai do input: class "form-control"
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // adicionar a mensagem de erro.
    small.innerText = message;

    // adicionar a classe de erro.
    formControl.className = "form-control error";
}

// criando função para mostrar o SUCESSO.
function setSucessFor(input) {
    // armazenando o pai do input: class "form-control"
    const formControl = input.parentElement;

    // adicionar a classe de sucesso.
    formControl.className = "form-control success";
}

// função para validar email.
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}