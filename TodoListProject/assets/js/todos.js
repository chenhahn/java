$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Delete Todos
$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(500,function () {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").on("keydown",function(event){
  if(event.key == "Enter"){
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle();
})