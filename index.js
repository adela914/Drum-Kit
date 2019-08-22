for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        alert("I got clicked!");
    });

}









//handleClick()라고 괄호를 삽입하는 경우에는 사이트가 로딩되자마자
//바로 팝업창이떠서 버그가 생김 그 이유는 이 코드가 읽힐 때 function을 실행하라는 것으로
//인지하기 때문임. 그래서 이때는 ()를 제외하고 넣어야 함 more info : Adding listener to a button.

//most common way is instead of adding a function name here that calls the function later on.
//most people wirte this code as simply an anonymous function.
 
