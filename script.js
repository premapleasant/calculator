 function show(number){
    let numbers = number.textContent;
    document.querySelector('.box').value += numbers;
   }

    function calculate(){
     let result = document.querySelector('.box').value;
     if(result===""){
        return;
     }
     if(result.includes("/0" || "%0")) {
       document.querySelector('.box').value = "";
       return;
     }
    
     document.querySelector('.box').value = document.querySelector('.box')
     .value +''+ '=' +''+eval(result);
    
     disable();
   }
   function reset(){
    document.querySelector('.box').value ="";
    enable();
   }
   function delet(){
     let box = document.querySelector('.box').value;
     let result = box.slice(0,-1);
    document.querySelector('.box').value = result;
   }
   function disable(){
    var button = document.getElementsByClassName('dis');
    Array.from(button).forEach(button => {
        button.disabled = true;
    });
   }
   function enable(){
    var button = document.getElementsByClassName('dis');
    Array.from(button).forEach(button => {
        button.disabled = false;
    });
   }