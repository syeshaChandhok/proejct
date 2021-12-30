player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn:"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn:"+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase;
 charat1=word.charAt(1);
 var lengthdivide2=Math.floor(word.length/2);
 charAt2=word.charAt(lengthdivide2);
 lengthminus1=word.length-1;
 charAt3=word.charAt(lengthminus1);
 removecharone=word.replace(charat1,"_");
 removecharotow=removecharone.replace(charAt2,"_");
 removecharothree=removechartow.replace(charAt3,"_");
 question_word="<h4 id='word_display'>q: "+removecharothree+"</h4>";
 input_box="<br>answer:<input id='input_check_box'type='text'>";
 
}