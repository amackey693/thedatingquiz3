$(document).ready(function() {

  $("form#dating").submit(function(event) {
    var colorChoice = parseInt($("#colorChoice").val());
    var favDrink = parseInt($("#favDrink").val());
    var favFood = parseInt($("#favFood").val());
    var result = (colorChoice + favDrink + favFood);
    

    // if (colorChoice === 0 || favDrink === 0 || favFood === 0) {
    //   $(".has-warning").show()
    // } else 
    
    if (result <= 3) {
      $('#chris').show(); 
    } else if (result <= 6) {
      $('#michelle').show();
    } else if (result <=9) {
      $('#patrick').show(); 
    } else {
      console.log('something is very wrong!')
    }
    
    event.preventDefault();
    return (result)
  )}
});