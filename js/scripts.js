// back end logic 
// var add = function(colorChoice, favDrink, favFood) {
//   return colorChoice + favDrink + favFood;
// };

$(document).ready(function() {

  // $('.form-control').on('change', function(){
  //   $('#favDrink').val($(this).val());
  // })
  // $('.form-control').change()

  $("form#dating").submit(function(event){
    console.log('hello')
    event.preventDefault();
    
    var colorChoice = parseInt($("#colorChoice").val());
    var favDrink = parseInt($("#favDrink").val());
    var favFood = parseInt($("#favFood").val());
    var result = (colorChoice + favDrink + favFood);

    console.log(colorChoice)
    console.log(favDrink)
    console.log(favFood)

    if (colorChoice === 0 || favDrink === 0 || favFood === 0) {
      $(".has-warning").show();
      $(".has-warning").attr("selected","selected");
      $('#chris, #michelle, #patrick').hide();
    } else if (result <=3) {
      $('#chris').show();  
      $('#michelle, #patrick').hide();
    } else if (result <= 6) {
      $('#michelle').show();
      $('#chris, #patrick').hide();
      
    } else if (result <=9) {
      $('#patrick').show();
      $('#chris, #michelle').hide();
    };
    console.log();
    return (result)
  })  
});