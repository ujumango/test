function tabOpen(e, tabName){
let tabContent = document.querySelectorAll('.tab_gal_wrap');
for(let i=0; i<tabContent.length; i++){
  tabContent[i].style.display = "none"
}
document.getElementById(tabName).style.display ="block";

let tabList = document.querySelectorAll('.tabTitle');
for(let i=0; i<tabList.length; i++){
  tabList[i].className = tabList[i].className.replace(' active','');

}
e.currentTarget.className += ' active';
}





function tabOpen2(e, tabName){
  let tabContent2 = document.querySelectorAll('.tab_gal_wrap2');
  for(let i=0; i<tabContent2.length; i++){
    tabContent2[i].style.display = "none"
  }
  document.getElementById(tabName).style.display ="block";
  
  let tabList2 = document.querySelectorAll('.tabTitle2');
  for(let i=0; i<tabList2.length; i++){
    tabList2[i].className = tabList2[i].className.replace(' active','');
  
  }
  e.currentTarget.className += ' active';
  }