
jQuery(function($){
   $("#cep").change(function(){
      var cep_code = $(this).val();
      if( cep_code.length <= 0 ) return;
      $.get("http://apps.widenet.com.br/busca-cep/api/cep.json", { code: cep_code },
         function(result){
            if( result.status!=1 ){
               alert(result.message || "Houve um erro desconhecido");
               return;
            }
            $("input#cep").val( result.code );
            $("input#estado").val( result.state );
            $("input#cidade").val( result.city );
            $("input#bairro").val( result.district );
            $("input#rua").val( result.address );
            $("input#estado").val( result.state );
         });
   });
});

    
function formatar(mascara, documento) {
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i);
  
    if (texto.substring(0,1) != saida){
        documento.value += texto.substring(0,1);
    } 
}
  
function exibe(i) {
	document.getElementById(i).readOnly= true;
}

function desabilita(i) {
    document.getElementById(i).disabled = true;    
}

function habilita(i) {
    document.getElementById(i).disabled = false;
}

function showhide() {
    var div = document.getElementById("newpost");
       
    if(idade()>=18) {
        div.style.display = "none";
    }
    else if(idade()<18) {
        div.style.display = "inline";
    }
}



