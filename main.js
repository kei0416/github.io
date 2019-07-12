'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',()=>{
     const results =['Asia','Euro','Africa','America'];
     const n =Math.floor(Math.random()*results.length);
     btn.textContent = results[n];

 // const n =Math.ramdom();
 //  if(n<0.05){
 //   btn.textContent ='Asia';
 //  }else if(n<0.2){
 //    btn.textContent ='Euro';
 //  }else{
 //    btn.textContent ='Africa';
 //  }


  });

  btn.addEventListener('mousedown',()=>{
    btn.classList.add('pressed');
  });
  btn.addEventListener('mouseup',()=>{
    btn.classList.remove('pressed');
  });
}
