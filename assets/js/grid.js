

function ToggleAside() {
    let aside = document.getElementById('sidebar');
    let toggleon = document.getElementById('toggleon');
    let mainbody = document.getElementById('mainBody')


    aside.classList.toggle('active');
    mainbody.classList.toggle('width');
    toggleon.classList.toggle('changetoggle');

    // if(Window.width > 767) {
    //     aside.style.display = 'none';
       
    // }
    // else {
     
    //     aside.style.display = 'block';
    //     // aside.classList.toggle('active');
    // }
    }
    // let toggleon = document.getElementById('toggleon');
    // let aside = document.getElementById('sidebar');


    // toggleon.addEventListener('click', function(){
    
    // })





function shownotification() {
    let notificationbox = document.getElementById('notificationbox');

    notificationbox.classList.toggle('showNotif');
}

function showCM() {
    let commentbox = document.getElementById('CMbox');

    commentbox.classList.toggle('ShowComment');
}

function ShowUserBox() {
    let UserBox = document.getElementById('profileBox');
    UserBox.classList.toggle('UserBox');
}



function searchBoxToggle() {

    let searchbox = document.getElementById('searchBox');
    let ShowSearchBox = document.getElementById('ShowSearchBox');
    
    ShowSearchBox.classList.remove('d-md-inline');
    searchbox.classList.remove('d-none');  


}


function showmenu() {
    let showmenu = document.getElementById('showmenu');
    let bodyheader = document.getElementById('bodyheader');

    bodyheader.classList.toggle('ShowMenu');

}


function FullScreen() {

    let fullscreenExpand = document.getElementById('fullscreenExpand');
    let fullscreencompress =document.getElementById('fullscreencompress');


    if((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullscreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
       else if (document.documentElement.mozRequestFullscreen) {
            document.documentElement.mozRequestFullscreen();
        }
        else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        }
    
    
        fullscreencompress.classList.remove('d-none');
        fullscreenExpand.classList.add('d-none');
    }


    else {
        fullscreencompress.classList.add('d-none');
        fullscreenExpand.classList.remove('d-none');
        if(document.cancellFullScreen){
            document.cancellFullScreen();
        }
        else if(document.mozCancellFullScreen){
            document.mozCancellFullScreen();
        }
        else if(document.webkitCancellFullScreen){
            document.webkitCancellFullScreen();
        }
        // let fullscreenExpand = document.getElementById('fullscreenExpand');
        // let fullscreencompress =document.getElementById('fullscreencompress');
    
      

    }
}


function DropSide() {
    let sidebardropdown = document.getElementsByClassName('sidebar-dropdown');

    sidebardropdown.classList.remove('d-none');
    }




const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
   search.classList.toggle('active');
   input.focus();
})


