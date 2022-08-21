$(document).ready(function (){

  //  往上拉
 
  $(".top").click(function(e){
    e.preventDefault();
    $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
      scrollTop: 0,
  }, 100)
  })
})

       
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination"
    },
      /* 斷點設定 */
    breakpoints: {
      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
      992: {
        slidesPerView: 3
      },
      /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
      768: {
        slidesPerView: 2
      },
      /* 更小時都顯示 1 欄 */
      0: {
        slidesPerView: 1
      }
    },
    loop:true,
    autoplay: {
      delay: 2500,
    },
    
    
  });


  
var look=document.querySelector(".btn");
var num=0
look.addEventListener(
  "click",
  function () {
num+=1;
document.querySelector('.response').textContent = num;}
  );





var data = [
    {
        "name": "Cindy",
        "age": 18,
        "sex": "female",
        "marry": false,
        "job": "no"
    },
    
    {
      "name": "Jason",
      "age": 18,
      "sex": "male",
      "marry": true,
      "job": "waiter"
  },
  {
    "name": "Marry",
    "age": 14,
    "sex": "female",
    "marry": false,
    "job": "student"
},
{
  "name": "Katy",
  "age": 50,
  "sex": "female",
  "marry": true,
  "job": "waitress"
},
{
  "name": "Yang",
  "age": 23,
  "sex": "male",
  "marry": true,
  "job": "Mailer"
},
]
// 第一種用法 foreach
var total =0;
data.forEach(function(item){
  if(item.age >= 20){
    console.log(item.name);
    total+=1;
    
  }
})

// 第二種用法 for i=0 i<length i++
console.log(total);

var datatotal = data.length
for (let i = 0; i < datatotal; i++) {
console.log(data[i].name)
  
}
var hamprice = 50;
var friesprice =40;
var bobtotal =0;
var sale = 0.9;
var viptotal = 1000;
var isVIP;
var name ;

function price (num1,num2,name){
  // 漢堡 價格 幾個 與 薯條價格 幾個
bobtotal = (num1 * hamprice + num2 * friesprice) ;
// 打九折
bobtotalsale =(num1 * hamprice + num2 * friesprice) * sale;
// viptotal=1000 要確認VIP是否超過一千才有
isVIP = bobtotal >= viptotal;
// 今天假設價格要超過五百
// 而且還要是VIP
// 而且漢堡不能少於十個就會跑第一行，反之如果沒有就會跑第二行
if (bobtotal >= 500 && isVIP == true && num1 >= 10){
console.log(`${name}，您的價格總共為 ${bobtotal}，打折過後的價錢為${bobtotalsale}元`);
console.log(`${name}有沒有符合VIP資格呢？ 答案是${isVIP}`) 
} else {
console.log(`${name}，您的餘額不足`);
console.log(`${name}有沒有符合VIP資格呢？ 答案是${isVIP}`) 
}
}


var VIP2Total = 200;
var memberPrice = 100;

// 請透過 if 來設計回覆，如果對方滿足門檻
// 就回覆 console.log("您好，您有達到 VIP 門檻。這裡給您 VIP 會員卡(遞上")
function memberPrice2(name,num1,num2){
if(VIP2Total <= memberPrice){

  console.log(`您好${name}，您有達到 VIP 門檻。這裡給您 VIP 會員卡(遞上`)
}else if (VIP2Total > hamprice*num1 + friesprice *num2){
  last= VIP2Total -(hamprice*num1 + friesprice *num2)
  console.log(`尊敬的客戶您好，您還差 ${last} 元，才有符合 VIP 條件哦~`)
}
}
// 工作一整天，小杰累到懷疑人生，累歸累，但還是得吃東西，小杰吃東西有自己的 SOP，來幫幫小杰看看他該吃什麼食物。

// 小杰都用飢餓度 1~100 來計算，100 就是代表最飢餓，數值皆為整數，不會有小數點
// 小杰飢餓度 0~20 時，都吃飯糰
// 小杰飢餓度在 21~40 時，都吃肉燥飯+貢丸湯
// 小杰飢餓度在 41~60 時，都吃麥當勞
// 小杰飢餓度在 61~100 時，都吃 99 元火鍋吃到飽
// 今天小杰的飢餓度是 53，請引導小杰去指定地點用餐


// 請用 if、else if 去判斷主人公該吃什麼
// 各區塊回覆內容請顯示 console.log("主人公因為飢餓度在"+hungryNum+"，所以他決定去吃麥當勞")