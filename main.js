var name_of_student_array = [];
function submit(){
    var display_student_name_array = [];

for (counter = 1; counter <= 4;counter++){
    var name_of_students = document.getElementById("name_of_the_student_"+counter).value;
    console.log (name_of_students);
    name_of_student_array.push(name_of_students);
}
console.log (name_of_student_array);
var len = name_of_student_array.length;
console.log (len);
 for (var index = 0;index < len;index++){
     display_student_name_array.push( +name_of_student_array[index]+);
     console.log (display_student_name_array);
 }
 document.getElementById("display_name_with_commas").innerHTML = display_student_name_array;
 var replace_name =display_student_name_array.join(" ");
 console.log (replace_name);
 document.getElementById("display_name_without_commas").innerHTML = replace_name;
 document.getElementById("submit_button").style.display="none";
 document.getElementById("sort_button").style.display="inline-block";

 function sorting(){
    name_of_student_array.sort();
    display_student_name_array = [];
    var len = name_of_student_array.length;
    console.log (len);
 for (var index = 0;index < len;index++){
     display_student_name_array.push(name_of_student_array[index]);
     console.log (display_student_name_array);
 }
 document.getElementById("display_name_with_commas").innerHTML = display_student_name_array;
 var replace_name =display_student_name_array.join(" ");
 console.log (replace_name);
 document.getElementById("display_name_without_commas").innerHTML = replace_name;
}
  
}
