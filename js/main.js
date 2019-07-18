var getElement = (element)=>{
    let ele = document.querySelectorAll(element);
    for (let i = 0; i < ele.length; i++) {
        return ele[i];
    }
};
"use strict";

getElement(".mobile-menu").addEventListener("click", function(e) {
    e.preventDefault();
    getElement('.ath-aside').classList.toggle('ath-aside-close');
});

let mmm = document.querySelectorAll('.sidenav nav ul.menu li a');
mmm.forEach(function(m) {
    m.addEventListener("click", function(){
        getElement('.sidenav').classList.toggle('open');
    })
})

