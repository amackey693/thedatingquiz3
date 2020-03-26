// back end logic 
// var add = function(colorChoice, favDrink, favFood) {
//   return colorChoice + favDrink + favFood;
// };

$(document).ready(function() {

  $("form#dating").submit(function(event){
    console.log('hello')
    
    var colorChoice = parseInt($("#colorChoice").val());
    var favDrink = parseInt($("#favDrink").val());
    var favFood = parseInt($("#favFood").val());
    var result = (colorChoice + favDrink + favFood);
    console.log(colorChoice)
    console.log(favDrink)
    console.log(favFood)
    
    // var result = add(colorChoice + favDrink + favFood);

        
    // if (colorChoice === 0 || favDrink === 0 || favFood === 0) {
    //   $("#has-warning").show()
    // } else if (result <= 3) {

    // if (colorChoice === 0 || favDrink === 0 || favFood === 0) {
    //   $(".has-warning").show();
    // } else if (result <=3) {
    //   $('#chris').show(); 
    // } else if (result <= 6) {
    //   $('#michelle').show();
    // } else if (result <=9) {
    //   $('#patrick').show(); 
    // };

    if (result <=3) {
      $('#chris').show();  
      $('#michelle, #patrick').hide();
    } else if (result <= 6) {
      $('#michelle').show();
      $('#chris, #patrick').hide();
      
    } else if (result <=9) {
      $('#patrick').show();
      $('#chris, #michelle').hide();

    } else if (colorChoice === 0 || favDrink === 0 || favFood === 0) {
      $(".has-warning").show();
      $('#chris, #michelle, #patrick').hide();
    };
    console.log();
    event.preventDefault();
    return (result)
  })  
});