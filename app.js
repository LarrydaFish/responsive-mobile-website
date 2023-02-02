const menuBtn = document.querySelector('.menu-icon');
const menuList = document.getElementById('menu-list');
menuList.style.maxHeight = '0px';
menuBtn.addEventListener('click', function(){
    if(menuList.style.maxHeight == '0px'){
        menuList.style.maxHeight = '130px';
    }
    else { 
        menuList.style.maxHeight = '0px';
    }
})