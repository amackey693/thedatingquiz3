// back end logic 
// var add = function(colorChoice, favDrink, favFood) {
//   return colorChoice + favDrink + favFood;
// };

$(document).ready(function() {

  $("form#dating").submit(function(event){
    var colorChoice = parseInt($("colorChoice").val());
    var favDrink = parseInt($("favDrink").val());
    var favFood = parseInt($("favFood").val());
    var result = (colorChoice + favDrink + favFood);

    // var result = add(colorChoice + favDrink + favFood);

        
    // if (colorChoice, favDrink, favFood = 0) {
    //   $("#has-warning").show()
    // } else if (result <= 3) {

    if (result <=3) {
      $('#chris').show(); 
    } else if (result <= 6) {
      $('#michelle').show();
    } else if (result <=9) {
      $('#patrick').show(); 
    };
    console.log();

  event.preventDefault();
  return (result)
  });
});