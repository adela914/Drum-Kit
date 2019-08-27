
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        makeAnimation(buttonInnerHtml);
     });
    }

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    makeAnimation(event.key);
})


function makeSound (key) {
   
        switch (key) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "a":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;
            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
        
                break;
            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;                
        
        
        
        
            default:
                console.log(buttonInnerHtml);

    
}
    }



function makeAnimation (currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")},1000) ;

}




//handleClick()라고 괄호를 삽입하는 경우에는 사이트가 로딩되자마자
//바로 팝업창이떠서 버그가 생김 그 이유는 이 코드가 읽힐 때 function을 실행하라는 것으로
//인지하기 때문임. 그래서 이때는 ()를 제외하고 넣어야 함 more info : Adding listener to a button.

//most common way is instead of adding a function name here that calls the function later on.
//most people wirte this code as simply an anonymous function.
// QuerySelectorAll뒤에다가 button태그를 넣는 경우에는 나중에 추가적으로 만들어지는 이와 상관없는 버튼들까지 모두 소환되므로 피하는게 좋음!
