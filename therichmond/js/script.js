//gnb/lnb 서브메뉴 호버시 내려옴

let gnb = document.querySelector('#gnb');
let gnb_bg = document.querySelector('#gnb_bg');
let lnb = document.querySelectorAll('.lnb');
console.log(lnb);

//7개를 반복해서 출력해주려면 for문을 써야함
//gnb는 높이로, lnb는 block 과 none 으로 조절했었음 ->
//gnb를 hover 했을 때 script가 나와줘야 함!

gnb.addEventListener('mouseenter', () => {
  //hover했을 때 일어나야할 일(실행되어야 할 일)을 여기에 넣어야 함!
  //gnb_bg가 height값을 얻어서 내려와야 함

  gnb_bg.style.height = '190px';

  //lnb가 여러개라 for문 써줘야 함!
  for (i= 0; i < lnb.length; i++){
    lnb[i].style.height = '190px'
  }
});

//이제 마우스 뗐을 때 없어져야 함
gnb.addEventListener('mouseleave', () => {
  gnb_bg.style.height = '0px';

  for (i= 0; i < lnb.length; i++){
    lnb[i].style.height = '0px'
  }
});





//main4 마우스 호버시 이미지 변경
//src의 값을 바꿔주는 방법 사용

let list = document.querySelectorAll('.list');
for(let i = 0; i < list.length; i++){
  //let을 붙혀주는 건 중복되지 않게!
  list[i].addEventListener('mouseenter', () => {
    list[i].src = `img/main3-on${i+1}.jpg`
  })
  list[i].addEventListener('mouseleave', () => {
    list[i].src = `img/main3-img${i+1}.jpg`
  })
}

//main5

let floor = document.querySelectorAll('.floor');
for (let i = 0; i < floor.length; i++){
  floor[i].addEventListener('mouseenter', () => {
    floor[i].style.backgroundImage = 'url(img/floorplan-icon-on.png)'
    floor[i].style.backgroundColor = '#fff';
    floor[i].style.color = '#181c1c';
  })
  floor[i].addEventListener('mouseleave', () => {
    floor[i].style.backgroundImage = 'url(img/floorplan-icon.png)'
    floor[i].style.backgroundColor = '#8d7249';
    floor[i].style.color = '#fff';
  })
}

let vr = document.querySelectorAll('.vr');

