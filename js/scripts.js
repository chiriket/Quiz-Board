
$(document).ready(function() {
 $("form#myForm").submit(function(event) {
   event.preventDefault();

var Q1 =parseInt($("input:radio[name=answer1]:checked")).val();
var Q2 =parseInt($("input:radio[name=answer2]:checked")).val();
var Q3 =parseInt($("input:radio[name=answer3]:checked")).val();
$("#yourscore").text(Q1+Q2+Q3);
  )};
