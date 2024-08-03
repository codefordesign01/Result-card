function result(){
 var name = document.getElementById("name").value;
 var english = document.getElementById("eng").value;
 var urdu = document.getElementById("urdu").value;
 var math = document.getElementById("math").value;
 var computer = document.getElementById("com").value;

 var Total =  parseInt(english) + parseInt(urdu) + parseInt(math) + parseInt(computer);

 var engP = (english*100) / 150;
 var urduP = (urdu*100) / 150;
 var mathP = (math*100) / 150;
 var comP = (computer*100) / 150;
 var TotalP = (Total*100) / 600;

 var engG = checkGrade(engP);
 var urduG = checkGrade(urduP);
 var mathG = checkGrade(mathP);
 var comG = checkGrade(comP);
 var totalG = checkGrade(TotalP);



if(english <= 150 && english > 0 ){
 alert("english number invalid");
}
else if(urdu <= 150 && urdu >0){
 alert("Urdu number invalid");
}
else if(math <= 150 && math >0){
 alert("math number invalid");
}
else if(computer <= 150 && computer >0){
 alert("conputer number invalid");
}
else{
   document.getElementById("box").classList.add("d-block")
   document.getElementById("form").classList.add("d-none")

   document.getElementById("namep").innerText = name;
   document.getElementById("Reng").innerText = english;
   document.getElementById("Rurdu").innerText = urdu;
   document.getElementById("Rmath").innerText = math;
   document.getElementById("Rcom").innerText = computer;
   document.getElementById("totalNumber").innerText = Total;

  document.getElementById("engP").innerText = engP.toFixed(2) + "%";
  document.getElementById("urduP").innerText = urduP.toFixed(2) + "%";
  document.getElementById("mathP").innerText = mathP.toFixed(2) + "%";
  document.getElementById("comP").innerText = comP.toFixed(2) + "%";
  document.getElementById("totalP").innerText = TotalP.toFixed(2) + "%";

  document.getElementById("engG").innerText = engG;
  document.getElementById("urduG").innerText = urduG;
  document.getElementById("mathG").innerText = mathG;
  document.getElementById("comG").innerText = comG;
  document.getElementById("TotalG").innerText = totalG;
}

}
function checkGrade(p){
 if(p >= 90 && p<100){
  return "A+"
 }
 else if(p >= 80 && p< 90){
  return "A"
 }
 else if(p >= 70 && p< 80){
  return "B"
 }
 else if(p >= 60 && p< 70){
  return "C"
 }
 else if(p >= 50 && p< 60){
  return "D"
 }
 else if(p >= 33 && p< 50){
  return "E"
 }
 else{
  return " F"
 }
}