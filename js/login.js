$( document ).ready(function() {
  
  let i=0;
  $("#form-login").submit(function(){

    i++;
    usuario = {
      campoUsuario : $("#campo-login").val(),
      senha : btoa($("#senha").val())
    }


    console.log(usuario.senha)
    
    if(usuario.campoUsuario.trim() == "" || usuario.campoUsuario == null){
       bootbox.alert({
        message: 'O campo usuário não deve ser vazio!',
        backdrop: true       
        }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});

    }
    else if(usuario.senha.trim() == "" || usuario.senha == null){
      bootbox.alert({
        message: 'O campo senha não deve ser vazio!',
        backdrop: true
        }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
    
    }


    else if(usuario.senha != "12345678"){
      let botaoLogin = $("#login");
      if(i<3){
        alert("Senha incorreta!")
      }
      else{
        botaoLogin.hide();
      }
    }
    else{
      /*bootbox.alert({
        message: 'Bem vindo usuário ' + usuario.campoUsuario,
        backdrop: true
        }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
        */
      
      alert('Bem vindo de volta, ' + usuario.campoUsuario);
      $(location).attr('href', 'chat.html');
      
    }
    return false;

  });

});