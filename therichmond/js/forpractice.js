//22-10-20

//3의 배수를 모두 찾기
//1. 1~100까지의 숫자를 출력하시오
//2. 1~100까지의 수 중에 3의 배수만 출력하시오
// document.write('<br>')
// for(i = 1; i <= 100; i++){
//   document.write(`${i}, `)
// }
// document.write('<br>')
// document.write('<br>')


// let count = 0;


// for(i = 1; i <= 100; i++){
//   if(i % 3 == 0){
//     count++; //반복되는 걸 하나씩 증가됨
//     document.write(`${i}, `)
//   }
// }
// document.write('<br>')
// document.write('3의 배수는' + count + '개입니다.')


// let fruit = ['바나나','사과','귤'];
//             // [0:바나나, 1:사과, 2:귤]  

// // fruit[2] ==> 귤
//  document.write('<h1>for</h1>')
//  for(i = 0; i < fruit.length; i++){
//  document.write(i+ fruit[i] + ', ');
//   }     

// document.write('<h1>for in</h2>')
// for (i in fruit){
//   document.write(i + ', ');
// }
// document.write('<h1>for of</h2>')
// for (i of fruit){
//   document.write(i + ', ');
// }

//let do = { name: '이름', job: 'teacher'}
//for in -> name, job 을 뽑아낼 수 있음.
//for of -> 이름, teacher를 뽑아낼 수 있음.
document.write('<br>')
// document.write('<br>')

// document.write('<h1>For, for in, for of</h2>')

// var arr = ['html','css','javascript'];
// document.write('<h2>for</h2>')
// for(var i = 0; i<arr.length; i++){
//   document.write( i +'. ' + arr[i] + ' ')
// }

// document.write('<h2>for in</h2>')
// for ( i in arr){
//   document.write(i + ', ');
// }

// document.write('<br>')

// document.write('<h2>for of</h2>')
// for (i of arr){
//   document.write(i + ', ')
// }

// for (i = 0; i <=3; i++){
//   document.write(i + ', ');
// }
// document.write('<br>')
// let j = 0; //초기식
// while (j <= 3){
//   document.write(j + ', ');
//   j++;
// }

// document.write('<br>')
// //do {} while ()
// let k = 0;
// do {
//   document.write(k + ', ');//출력할 식이 먼저 나옴
//   k++;
// }while (k <= 3); //조건식

// let a = 0;
// while(confirm('계속 실행하시겠습니까?')){
//   a++;
//   alert(`${a}번째 출력`); 
// }

// function name1(){ //name1이라는 애를 실행해줘! 하면 실행됨.
//   for (i = 0; i <= 3; i++){
//     document.write(i + ', ');
//   }
//     document.write('<br>');
// }


// document.write('<br>');
// function sum1(a1,b1) {
//   //a+b=c 내가 보는 식
//   let c1 = a1 + b1;
//   document.write(`<p>${a1} + ${b1} = ${c1}</p>`);
// }
// sum1(2,3); //매개변수
// sum1(3,5);
// sum1(10, 20); //a와 b 자리에 대체되어 들어가는 것. a,b=>매개변수
// //필요한 만큼씩 쓸 수 있다.

// // let a = 2 
// // let b = 3 ->이거를 계속 바꿀 수가 없으니까!


// function sum(a,b,s) {
//   //a+b=c 내가 보는 식
//   let c = a + b + s;
//   document.write(`<p>${a} + ${b} + ${s} = ${c}</p>`);
// }
// sum(2,3,4);
// sum('사','랑','해'); //매개변수로 넘겨줄 값 : 인수


// //선언함수
// //익명함수 : 이름이 없는 함수. 

// let = c // 함수 밖에서 선언 : 전역변수 (중괄호 밖에서도 사용 가능)
// function sum(a,b,s) {
//   let c = a + b + s; //함수 안에서 선언 :지역변수 (중괄호 안에서만 사용 가능)
//   document.write(`<p>${a} + ${b} + ${s} = ${c}</p>`);
// }
//변수를 다 밖에다 지정하면 변수끼리 충돌할 수 있기 때문에 
//무조건 밖에다 쓸 수 없음


// var sum = function(a,b){
//   return a + b; //sum=a+b와 똑같음
// }
// var add1 = sum(2, 3); //add로 선언
// let add2 = sum(4 ,3);

// document.write("add : " + add1);
// document.write('<br>');
// document.write("add : " + add2);

// function sum(a,b,c) 선언함수 : 함수 뒤에 이름이 있는 경우 바로 출력됨(간단하게 하나로 쓸거면)
// function (a,b,c) 익명함수 : 함수 뒤에 이름이 없을 때 실행할 때 부를 수 있는 이름이 없어서
//이런 경우엔 혼자서 쓰려는 경우가 아니라 다른 함수 안에 써주고 싶어서...(여러개의 함수를 조합해서 사용할 경우)

// function addNum(a,b){
//   var c= a + b;
//   document.getElementById('add').innerHTML = c;
// } //버튼 누르면 c값 나옴 -> c값을 html에 아이디값 add 안에 넣어줘라!
// // document.getElementById('add').innerText = addNum(10,20); //html의 ID값을 받아서 거기에 

// function addNum(a,b){
//   var c= a + b;
//   // document.getElementById('add').innerHTML = c;
//   document.querySelector('#add').innerHTML = c; //id인지 태그인지 알려줘야 함
//   // document.querySelector('h1').innerHTML = c; //h1이 하나라서 지금만 가능함!!
// }

function tab1(){
  document.getElementById('tab1_txt').style.display ='block';
  document.getElementById('tab2_txt').style.display ='none';
  document.getElementById('tab1_txt').style.backgroundColor ='green';

}
function tab2(){
  document.querySelector('#tab1_txt').style.display = 'none';
  document.querySelector('#tab2_txt').style.display = 'block';
}