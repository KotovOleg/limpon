var str="Halk hogan";
var number= "type";
console.log(str+number)
 
$(document).ready(function () {
    setInterval( function() {
    $('.garland .red').fadeIn('slow', function() {
      });
    $('.garland .red').fadeOut('slow', function() {
      });
    } , 1500)
    setInterval( function() {
    $('.garland .blue').fadeIn('slow', function() {
      });
    $('.garland .blue').fadeOut('slow', function() {
      });
    } , 2000)
    setInterval( function() {
    $('.garland .yellow').fadeIn('slow', function() {
      });
    $('.garland .yellow').fadeOut('slow', function() {
      });
    } , 2500)
    setInterval( function() {
    $('.garland .green').fadeIn('slow', function() {
      });
    $('.garland .green').fadeOut('slow', function() {
      });
    } , 3000)
});
