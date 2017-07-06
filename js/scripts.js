$(document).ready(function() {
  $("#userInfoForm").submit(function(event) {

    var fullName = $("input#fullName").val();
    var email = $("input#email").val();
    var homeAddress = $("input#homeAddress").val();
    var jewelry = $("#jewelry").val();
    var quantity = $("input:radio[name=quantity]:checked").val();

    $(".fullName").text(fullName);
    $(".jewelry").text(jewelry);
    $(".quantity").text(quantity);

    $("#receipt").show();
    event.preventDefault();
  });
});
