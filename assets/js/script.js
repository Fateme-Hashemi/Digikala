function ToggleMenu() {
    let nav = document.querySelector('#nav');
    let toggle = document.querySelector('#toggle');
    nav.classList.toggle('active');
    toggle.classList.toggle('active');

}

var prevScrollpos = window.pageYOffset;
var currentScrollPos = window.pageYOffset;

let subnavhide = document.querySelector('.subnav-hide');

window.addEventListener('scroll', function(){
    subnavhide.style.opacity = 1 - +window.pageYOffset/400;
    
})

// slideshow

const slides = document.querySelector('.slider-items').children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const totalSlide = slides.length;
console.log(slides)
let index = 0;
let duration = 6000;

next.onclick = ()=>{
    slide('next');
}

prev.onclick = ()=>{
    slide('prev');
}


function slide(direction){
    progress()
    if(direction=='next'){
        if(index == totalSlide-1){
            index = 0;
        }else{
            index ++;
        }
    }

    if(direction=='prev'){
        if(index == 0){
            index= totalSlide-1
        }else{
            index --;
        }
    }


    clearInterval(timer);
    timer = setInterval(autoSlide, duration)
    
    for(let i =0; i<slides.length; i++){
        slides[i].classList.remove('active')
    }

    slides[index].classList.add('active')
  
}



function progress(){
    document.querySelector('.progress').innerHTML = '';
    const div = document.createElement('div');
        div.style.height = '5px';
        div.style.width = '0';
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        div.style.backgroundColor= '#ef4056';
        div.id = 'progress';
        div.style.animation = 'progress ' + duration/1000 + "s linear";
        document.querySelector('.progress').appendChild(div)
}



function autoSlide(){
    slide('next');
}

let timer = setInterval(autoSlide, duration)

progress();
// slideshow



// // megamenu
const dropOne = document.querySelector('.drop-one');
const menuOne = document.querySelector('.menu-one');
const bars = document.querySelector('.bars');
const submenu = document.querySelector('.submenu');
const navbar =document.getElementById("navbar");

function showmenuMD() {
    submenu.classList.add('showsubmenuMD');
}

function hidesubmenuMD() {
    submenu.classList.remove('showsubmenuMD');
}






// // megamenu

function showsubmenu(){
    menuOne.classList.add('showsubmenu');
}

function hidesubmenu() {
    menuOne.classList.remove('showsubmenu');
}

// // megamenu




// product slide

let thumbnail = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');
let leftButton = document.getElementById('left-slide');
let rightButton = document.getElementById('right-slide');

leftButton.addEventListener('click', function(){
    slider.scrollLeft -= 125;
})

rightButton.addEventListener('click', function(){
    slider.scrollLeft += 125;
})


const maxScrollLeft = slider.scrollWidth - slider.clientWidth;


function autoPlay(){
    if(slider.scrollLeft > (maxScrollLeft-1)){
        slider.scrollLeft -= maxScrollLeft;
    }else{
        slider.scrollLeft += 1
    }
}


let play = setInterval(autoPlay, 50)


for(let i =0;i<thumbnail.length;i++){
    thumbnail[i].addEventListener('mouseover', ()=>{
        clearInterval(play)
    })
    thumbnail[i].addEventListener('mouseout',()=>{
        return play = setInterval(autoPlay, 50);
    })
}

// product slide



// searchinput
let input =document.querySelector('.searchinput')
let search = document.querySelector('.search');
let result = document.querySelector('.result-box');

function showresultbox() {
    result.classList.add('openresult');
}


function Hideresultbox() {
 result.classList.remove('openresult');
}

// function showresultboxtwo() {
//     result.classList.toggle('openresult');
// }
// searchinput


// megamenu

const tabs = document.querySelectorAll('.tab-btn');
const allcontent = document.querySelectorAll('.content');

tabs.forEach(( tab , index)=>{
    tab.addEventListener('click' ,(e)=>{
        tabs.forEach(tab=>{tab.classList.remove('showtab')});
        tab.classList.add('showtab');

        allcontent.forEach(content=>{content.classList.remove('showtab')});
        allcontent[index].classList.add('showtab');
    })

  
})
// megamenu 



// offcontainer
// document.getElementById('timer').innerHTML =
//   2 + ":" + 20;
// startTimer();
 
// function startTimer() {
//   var presentTime = document.getElementById('timer').innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if(s==59){m=m-1}
//   //if(m<0){alert('timer completed')}
 
//   document.getElementById('timer').innerHTML =
//     m + ":" + s;
//   console.log(m)
//   setTimeout(startTimer, 1000);
// }
 
// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
//   if (sec < 0) {sec = "59"};
//   return sec;
// }
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  // تابع فراخوانی تایمر
  window.onload = function () {
    var duration = 60 * 2, // دو دقیقه
        displays = document.querySelectorAll('.countdown');

    displays.forEach(function (display) {
      startTimer(duration, display);
    });
  };
// offcontainer


// toTop
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll',function(){
   if(window.pageYOffset > 250) {
      toTop.classList.add('active');
   }
   else {
      toTop.classList.remove('active');
   }
})
// toTop