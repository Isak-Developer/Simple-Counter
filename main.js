const counter = document.querySelector(".counter");
const btns = document.querySelectorAll('.btn');
let count=0;

btns.forEach((btn) =>{
  btn.addEventListener('click', (e) => {
    const style= e.currentTarget.classList

    if (style.contains('increase')){
        count++
    }
   else if (style.contains('decrease')){
        count--
    }
   else if (style.contains('reset')){
        count=0
    }

if(count > 0){
    counter.style.color='#000'
}
if(count < 0){
    counter.style.color='#000'
}
if(count === 0){
    counter.style.color='#000'
}   
    counter.textContent=count
  })
})
