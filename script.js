let result=document.querySelector(".result-box");
let arr=["HTML","CSS","JAVA SCRIPT","Easy Tutorial","Where to learn coding online","Where to learn coding ofline"];
var a=document.querySelector(".search");
var b=document.querySelector(".in");
var resultbox=document.querySelector(".result-box");
b.onkeyup = function(){
    a.classList.remove("search");
    a.classList.add("search2");
    resultbox.classList.remove("invisible");
    let result=[];
    let input=b.value;
    if(input.length){
        result=arr.filter((key)=>{
            return key.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
        if(result.length)
        display(result); 
    else  resultbox.classList.add("invisible");  
    }
    else{
        resultbox.classList.add("invisible"); 
        a.classList.remove("search2");
        a.classList.add("search");
    }
   
}

function display(result){

    const content=result.map((list)=>{
        return "<li onclick=selectinput(this)>"+ list +"</li>";
    });
    resultbox.innerHTML="<ul>" +content.join('')+ "</ul>";

}

function selectinput(list){
    b.value=list.innerHTML;
    resultbox.innerHTML='';
}


