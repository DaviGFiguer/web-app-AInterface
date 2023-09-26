$( document ).ready(function() {
  

  $("#form-login").submit(function(){
    let usuario = $("#campo-login").val();
    let senha = $("#senha").val();
    if(usuario.trim() == "" || usuario == null){
       bootbox.alert({
        message: 'O campo usuário não deve ser vazio!',
        backdrop: true       
        }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});

    }
    else if(senha.trim() == "" || senha == null){
      bootbox.alert({
        message: 'O campo senha não deve ser vazio!',
        backdrop: true
        }).find('.modal-content').css({'background-color': '#2D2D2F', 'font-weight' : 'bold', color: '#FFFFFF', 'font-size': '2em'});
        
    }
    else{
      $(location).attr('href', 'chat.html');

    }
    return false;

  });

});