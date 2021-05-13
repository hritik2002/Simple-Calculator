var buttons = document.querySelectorAll('button');
let screen = document.getElementById('screen');
let screenValue = '';
screen.value =''
for(item of buttons ){
    
    item.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;
        if(buttonText=='x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText== '='){
            buttonText = '=';
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else if(buttonText == ' '){

            
        }
        else if(buttonText == 'C'){
            buttonText='';
                screenValue = buttonText ;
                screen.value = screenValue;
        }
        else if(buttonText == 'B'){
            screenValue[screenValue.length-1]='0';
            screenValue = parseInt(screenValue/10);
            screen.value = screenValue;
        }
        else
        {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}