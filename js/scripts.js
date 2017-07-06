$(document).ready(function() {
  $("#userInfoForm").submit(function(event) {
    alert("hello");
    var fullName = $("input#fullName").val();
    var email = $("input#email").val();
    var homeAddress = $("input#homeAddress").val();

    $(".fullName").text(fullName);
    $("#receipt").show();
    event.preventDefault();
  });
});
