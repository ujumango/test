let navWrap = document.querySelector('.nav_wrap');
let headerHeight = navWrap.offsetHeight;
let gnbA = document.querySelectorAll('.gnbA');
let logo = document.querySelector('.logo');


window.addEventListener('scroll',()=>{
  let windowTop = window.scrollY;

  if(windowTop > headerHeight){
    navWrap.classList.add('active');
    for(i=0; i<gnbA.length; i++){
      gnbA[i].classList.add('active');
    }
    document.getElementById("logoTop").src = 'img/logo.png';
  }else{
    navWrap.classList.remove('active');
    for(i=0; i<gnbA.length; i++){
      gnbA[i].classList.remove('active');
  }
  document.getElementById("logoTop").src = 'img/logo_white.png';
}
})


let aboutBtn = document.querySelector('.about_btn');

aboutBtn.addEventListener('mouseenter',()=>{
  aboutBtn.classList.add('active')
})
aboutBtn.addEventListener('mouseleave',()=>{
  aboutBtn.classList.remove('active')
})


let banners = document.querySelectorAll('.bnrArti');
console.log(banners)
for(let i=0; i<banners.length; i++){
  banners[i].addEventListener('mouseenter', ()=>{
    banners[i].classList.add('active');
  })
  banners[i].addEventListener('mouseleave', ()=>{
    banners[i].classList.remove('active');
    })
}