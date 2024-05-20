let slide = document.getElementById('slide')
let count = 0;

function bubble1(){
    count = 100
}
function bubble2(){
    count = 0
}
function bubble3(){
    count = -100
}
function bubble4(){
    count = -200
}

setInterval(()=>{

    if(count >= -300){
        count-=100
        console.log(count);
        slide.style.marginLeft = count + '%'
    }
    if(count < -300){
        count=0
        console.log(count);
        slide.style.marginLeft = count + '%'
    }
    
}, 2000)

