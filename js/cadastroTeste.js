$( document ).ready(function() {

  function input_error (form_input, updated_message) {
    const form_data = form_input.parentElement;
    const error_message = form_data.querySelector("a")

    error_message.innerText = updated_message;
    form_data.className = "form_field error"
  }

  $("#signup_form").submit(function(){
      usuario = {
          username: $("#username").val(),
          email: $("#e-mail").val(),
          phone_number:  $("#phone_number").val(),
          user_password: $("#password").val(),
          password_confirmation: $("#password_confirmation").val(),
          idade: $("#campo_idade").val()
      }   
           
      if (usuario.username.trim() == "" || usuario.username == null){
        /*bootbox.alert({
          message: 'O Nome de usuário não deve ser vazio!',
          backdrop: true
          }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
        */
          alert("O Usuário não deve ser vazio!")
        }
      else if(usuario.email.trim() == "" || usuario.email == null){
        /*bootbox.alert({
          message: 'O E-mail não deve ser vazio!',
          backdrop: true
          }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
        */
          alert("O Email não deve ser vazio!")
        }
      else if(usuario.phone_number.trim() == "" || usuario.phone_number == null){
        /*bootbox.alert({
          message: 'O telefone não deve ser vazio!',
          backdrop: true
          }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
        */
          alert("O número de telefone não deve ser vazio!")
        }
      else if(usuario.user_password.trim() == "" || usuario.user_password == null){
        /*bootbox.alert({
          message: 'A senha não deve ser vazia!',
          backdrop: true
          }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
        */
          alert("A senha não deve ser vazia")
        }
      else if(usuario.password_confirmation != usuario.user_password){
        /*bootbox.alert({
          message: 'As senhas não coincidem!',
          backdrop: true
          }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
        */
          alert("As senhas não coincidem!")
        }
      else{
        /*bootbox.alert({
          message: 'Bem vindo usuário ' + usuario.campoUsuario,
          backdrop: true
          }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
          */
        alert('Bem vindo, ' + usuario.username);
        //$(location).attr('href', 'chat.html');
        
      }
      return false;
      
      
  })

  
  Array.prototype.remove = function (index) {
    this.splice(index, 1);
  }

  let lista_idade = []
  clique = 0
  $("#registration_button").on("click", function () {
    usuario = {
      username: $("#username").val(),
      email: $("#e-mail").val(),
      phone_number:  $("#phone_number").val(),
      user_password: $("#password").val(),
      password_confirmation: $("#password_confirmation").val(),
      idade: $("#campo_idade").val()
  }   
    clique++


    lista_idade.push(usuario.idade)
    console.log(lista_idade)


    if (clique == 6) {
      for (i = lista_idade.length; i >= 0; i--) {
        if (lista_idade[i] < 18) {
          lista_idade.remove(i);
          console.log(lista_idade)
        }
      }
    }

  })
})

