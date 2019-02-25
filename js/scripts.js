// UI logic:
$(document).ready(function() {
 $("form#myForm").submit(function(event) {
   event.preventDefault();

   var Q1 =parseInt($("input:radio[name=answer1]:checked").val());
   var Q2 =parseInt($("input:radio[name=answer2]:checked").val());
   var Q3 =parseInt($("input:radio[name=answer3]:checked").val());
   var Q4 =parseInt($("input:radio[name=answer4]:checked").val());
   var Q5 =parseInt($("input:radio[name=answer5]:checked").val());

var sum=(Q1+Q2+Q3+Q4+Q5) ;

if (sum>= 80){
 document.getElementById("output").innerHTML="You have " + sum + " %"
 document.getElementById("comment").innerHTML="Congratulations!."


} else if (sum>= 50) {
 document.getElementById("output").innerHTML="You have " + sum + " %";
 document.getElementById("comment").innerHTML="That was a fair attempt.";

} else if (sum<50) {
 document.getElementById("output").innerHTML="You have " + sum +  " %";
 document.getElementById("comment").innerHTML="You failed the test, please retake the test.";

} else {
 document.getElementById("comment").innerHTML="Please answer all Questions before you submit.";

}
 });
});
