//$( document ).ready(function() {
//form elements contained into consts
const signup_form = document.getElementById("signup_form")
const username = document.getElementById("username");
const email = document.getElementById("e-mail");
const phone_number = document.getElementById("phone_number");
const user_password = document.getElementById("password");
const password_confirmation = document.getElementById("password_confirmation");

signup_form.addEventListener("submit", (registration) => {
    //Function to check if all the form fields are valid.
    registration.preventDefault();
    check_registered_data();
})
username.addEventListener("blur", () => {
    check_inputted_username();
})
email.addEventListener("blur", () => {
    check_inputted_email();
})
phone_number.addEventListener("blur", () => {
    check_inputted_phone_number();
})
user_password.addEventListener("blur", () => {
    check_inputted_password();
});
password_confirmation.addEventListener("blur", () => {
    check_password_confirmation();
});
//Function to check if the field: username is null or doensn't match the input "pattern".
function check_inputted_username() {
    const inputted_username = username.value;

    if (inputted_username === "") {
        input_error(username, "Um nome de usuário é obrigatório para o cadastro.")
    }
    else if (inputted_username.length <= 5 || inputted_username.length > 20) {
        input_error(username, "Um nome de usuário deve conter no mínimo 6 caracteres, e no máximo 20.")
    }
    else {
        const form_data = username.parentElement;
        form_data.className = "form_field"
    }
}
//Function to check if the field: e-mail is null or doensn't match the input "pattern".
function check_inputted_email() {
    const inputted_email = email.value;

    if (inputted_email === "") {
        input_error(email, "Um e-mail é obrigatório para o cadastro.")
    }
    else {
        const form_data = email.parentElement;
        form_data.className = "form_field"
    }
}
//Function to check if the field: phone number is null or doensn't match the input "pattern".
function check_inputted_phone_number() {
    const inputted_number = phone_number.value;

    if (inputted_number === "") {
        input_error(phone_number, "Um telefone é obrigatório para o cadastro.")
    }
    else if (inputted_number.length <= 19) {
        input_error(phone_number, "Um telefone válido deve ser fornecido, para o cadastro.")
    }
    else {
        const form_data = phone_number.parentElement;
        form_data.className = "form_field"
    }
}
//Function to check if the field: password and password confirmation are null or doensn't match their requirements.
function check_inputted_password() {
    const inputted_password = user_password.value;

    if (inputted_password === "") {
        input_error(user_password, "Uma senha é obrigatória para o cadastro poder ser concluído.")
    }
    else if (inputted_password.length <= 7) {
        input_error(user_password, "A senha deve conter no mínimo 8 caracteres.")
    } 
    else {
        const form_data = user_password.parentElement;
        form_data.className = "form_field"
    }
}
//Function to check if the field: password and password confirmation are null or doensn't match if compared.
function check_password_confirmation() {
    const inputted_password = user_password.value;
    const inputted_confirmation = password_confirmation.value;

    if (inputted_confirmation === "") {
        input_error(password_confirmation, "Para a conclusão do cadastro, confirme sua senha.")
    }
    else if (inputted_password != inputted_confirmation) {
        input_error(password_confirmation, "As senhas inseridas não coincidem entre si!");
    }
    else {
        const form_data = password_confirmation.parentElement;
        form_data.className = "form_field";

    }
}
//Function to check all the inputs fields after filled.
function check_registered_data() {
    check_inputted_username();
    check_inputted_email();
    check_inputted_phone_number();
    check_inputted_password();
    check_password_confirmation();

    const form_input_fields = signup_form.querySelectorAll(".form_field")
    const fields_validation = [...form_input_fields].every((field) => {
        return field.className === "form_field";
    }); 
    if (fields_validation) {
        alert("Cadastro concluído")
        signup_form.submit();
    }
}
//Function to change the class name: form_field, to change the CSS styling if an error is returned in the input checking.
function input_error (form_input, updated_message) {
    const form_data = form_input.parentElement;
    const error_message = form_data.querySelector("a")

    error_message.innerText = updated_message;
    form_data.className = "form_field error"
}

/*$("#signup_form").submit(function(){
  let username = $("#username").val();
  let email = $("#e-mail").val();
  let phone_number = $("#phone_number").val();
  let user_password = $("#password").val();
  let password_confirmation = $("#password_confirmation").val();

  if(username.trim() =="" || username==null){
    bootbox.alert({
      message: 'O campo usuário não deve ser vazio!',
      backdrop: true       
      }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});

  }
  else if(email.trim() == "" || email == null){
    bootbox.alert({
      message: 'O campo E-mail não deve ser vazio!',
      backdrop: true       
      }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
  }
  else if(phone_number.trim() == "" || phone_number==null){
    bootbox.alert({
      message: 'O campo celular não deve ser vazio!',
      backdrop: true       
      }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
  }
  else if(user_password.trim() == "" || user_password==null){
    bootbox.alert({
      message: 'O campo senha não deve ser vazio!',
      backdrop: true       
      }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
  }

  else if(password_confirmation.trim() == "" || password_confirmation==null){
    bootbox.alert({
      message: 'O campo de confirmação da senha não deve ser vazio!',
      backdrop: true       
      }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
  }

  else if(password_confirmation != user_password){
    bootbox.alert({
      message: 'As senhas não podem ser diferentes!',
      backdrop: true       
      }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
  }
  else{
    $(location).attr('href', 'chat.html');
  }
  return false;


});

});*/
