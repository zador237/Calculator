



const btns = document.querySelectorAll('.btn');
const specialChar = ['*','/','-','+','=','%'];
const display = document.querySelector(".display");
const keys = ['1','2','3','4','5','6','7','8','9','0','.','*','/','-','+','*','/','-','+','=','%']

outPut = "";

document.addEventListener('keydown', (e)=> calculator(e.key))



btns.forEach(btn => {
    btn.addEventListener('click',(e)=>calculator(e.target.innerHTML))
});


function calculator(btnValue){

    if( (btnValue === '=' && outPut !== "") || (btnValue === 'Enter' && outPut !== '')){
        outPut = eval(outPut.replace("%","/100"));
    }
    else if(btnValue === "DEL"  || btnValue.key === 'Backspace'){
        outPut = outPut.slice(0,-1);
    }
    else if(btnValue === "AC"){
        outPut = "";
    }
    else if (specialChar.includes(btnValue) && outPut === ""){
        return;
    }
    else{
        if(keys.includes(btnValue)) outPut+=btnValue; 
     
       
    }
    display.value = outPut;
}
