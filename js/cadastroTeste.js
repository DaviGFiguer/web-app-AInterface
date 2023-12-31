$( document ).ready(function() {

  function input_error (form_input, updated_message) {
    const form_data = form_input.parentElement;
    const error_message = form_data.querySelector("a")

    error_message.innerText = updated_message;
    form_data.className = "form_field error"
  }

  $("#cep").on("input",function(){
    const cep = $("#cep").val();

    if(cep ==""){
      $("#logradouro").val("");
      $("#bairro").val("");
    }

    const getCepUrl = `https://viacep.com.br/ws/${cep}/json`;

    

    var settings = {
        "url": getCepUrl,
        "method": "GET",            
    };

    $.ajax(settings).done(function (response) { 
      $("#cep").val(response.cep)
      $("#logradouro").val(response.logradouro);
      $("#bairro").val(response.bairro);


    });


    
    

    });

  $("#signup_form").submit(function(){
      usuario = {
          username: $("#username").val(),
          email: $("#e-mail").val(),
          phone_number:  $("#phone_number").val(),
          user_password: $("#password").val(),
          password_confirmation: $("#password_confirmation").val()
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
        $(location).attr('href', 'chat.html');
        
      }
      return false;
      
      
  })

})