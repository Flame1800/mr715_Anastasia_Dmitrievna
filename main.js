window.onscroll = function showHeader() {
    var header = document.querySelector('.sidebar');
    if(window.pageYOffset > 408){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}



