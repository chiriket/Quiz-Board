
$(document).ready(function() {
 $('#myForm').submit(function(event) {
 event.preventDefault

var value1 = $("input:radio[names=answer1]:checked").val();
var value2 = $("input:radio[names=answer2]:checked").val();
var value3 = $("input:radio[names=answer3]:checked").val();
