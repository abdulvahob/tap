let elBtn  = document.querySelectorAll('.tap');
let elText  = document.querySelectorAll('.text');


// 1. hammsini ochish kk


function Open(){
      elText.forEach(function(item){
         item.classList.remove('show')
      })
}
elBtn.forEach(function(item , index){
   item.addEventListener('click' , function(){
      Open()
      elText[index].classList.add('show')
   })
})