
let b = document.querySelectorAll(".drum");
for(let i=0;i<b.length;i++)
{
    b[i].addEventListener("click" , function(){
        let buttonClicked = this.innerHTML;
        makesound(buttonClicked);
    });
}


document.addEventListener("keydown",function(event){
    makesound(event.key);
})

function makesound(key)
{
    switch(key)
        {
            case "w":
                var sound = new Audio("./crash.mp3");
                sound.play();
                break;
            case "a":
                var sound = new Audio("./kick-bass.mp3");
                sound.play();
                break;
            case "s":
                var sound = new Audio("./snare.mp3");
                sound.play();
                break;
            case "d":
                var sound = new Audio("./tom-1.mp3");
                sound.play();
                break;
            case "j":
                var sound = new Audio("./tom-2.mp3");
                sound.play();
                break;
            case "k":
                var sound = new Audio("./tom-3.mp3");
                sound.play();
                break;
            case "l":
                var sound = new Audio("./tom-4.mp3");
                sound.play();
                break; 
            default :
                alert("Wrong Button Has been Pressed😲!!")   
        }
}


// var sound = new Audio("./sounds/kick-bass.mp3");
// sound.play();

