var chat_lines = document.getElementById('story-line');
var nextbtn = document.getElementById('btn');
var counter = 0;

nextbtn.addEventListener("click",function(){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET','http://www.json-generator.com/api/json/get/bUMQwiYAHS?indent=2');
    myRequest.onload = function(){
        var story = JSON.parse(myRequest.responseText);
        getStoryLine(story,counter);
        counter++;
    };
    myRequest.send();
});

function getStoryLine(story,i){
    var outputData = "";
   
    outputData +="<p>"+ "<div class=\"chip\">"+ story[i].name+"</div>"+"<br>"+story[i].about+"</p>"+"<hr>";
        
 
    chat_lines.insertAdjacentHTML('beforeend',outputData);
}