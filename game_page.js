var name1, name2;
var score1 = Number(0);
var score2 = Number(0);

name1 = localStorage.getItem("quizname1");
name2 = localStorage.getItem("quizname2");
document.getElementById("name1").innerHTML = name1;
document.getElementById("name2").innerHTML = name2;
document.getElementById("score1").innerHTML = score1;
document.getElementById("score2").innerHTML = score2;
console.log(name1);
console.log(name2);
