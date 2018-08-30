$(window).on("load", function() {
  $("#btn-number").on("click", function(event) {
    event.preventDefault();
    getNumber();
    printsWritten();
  });
});

function getNumber(){
  $(".div-result").remove();
  return fieldNumber = $("#field-number").val();
}

function printsWritten(){
  $(".return-written").append(`
      <div class="div-result">
        <p>o número por extenso é</p>
        <p>${ returnsWritten(fieldNumber) }</p>
      </div>
      `);
}
