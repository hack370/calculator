let input = document.getElementById('input-bx');
let buttons = document.querySelectorAll('button');


let string = "";


Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = input.value.toString().slice(0,-1);
            input.value = string;
        }
        else if(/^00/.test(input.value)){
            string = e.target.innerHTML;
            input.value = string;
        }
        else if(/^0/.test(input.value)){
            string = e.target.innerHTML;
            input.value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})