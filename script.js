$(function(){
var N;
$("#getBtn").click(function (){
N = $("#getN").val();
if(N != 0 || N != ""){
var i;
var html = "";
for (i = 0; i < N; i++) {
 html += "<input type=\"number\">"
}
html += "<button id=\"cal\" class=\"btn\"> Calculate </button>"
$("#items").html($(html));


$("#cal").click(function(){

var total = 0;
var inputs = $("input");
var error = 0;

for(i = 1;i < inputs.length; i++){
if(inputs[i].value != ""){
total += parseInt((inputs[i]).value);
}else{
inputs[i].setAttribute("placeholder", "Must not be empty");
error += 1;
}
}

if(error == 0){
if(total != 0 ){
var result = "<h3 style=\"color:blue\">The Mean is: "+total/N + "</h3>";
$("#items").append($(result));
}
}
})
}else{
$("#items").append($("<h4 style=\"color:red; margin:0;\">Enter The number of items</h4>"));
}
})


});
