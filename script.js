$(window).on("load", function() {
  $("#btn-numero").on("click", function(event) {
    event.preventDefault();
    pegaNumero();
    insereExtenso();
  });
});

function pegaNumero(){
  $(".div-resposta").remove();
  return campoNumero = $("#campo-numero").val();
}

function insereExtenso(){
  $(".retorno-extenso").append(`
      <div class="div-resposta">
        <p>o número por extenso é</p>
        <p>${ retornaExtenso(campoNumero) }</p>
      </div>
      `);
}
