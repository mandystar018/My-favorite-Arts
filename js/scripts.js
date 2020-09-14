$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    console.log("Made it!")
    event.preventDefault();
    const artists = ["Salvador-Dali", "Frida-Kahlo", "Frida-Kahlo-Painting"];

    artists.forEach(function(i) {
      $("#button").click();{
        $("#show").toggleClass();
      }
    });
  });
});