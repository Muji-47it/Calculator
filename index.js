let Display=document.querySelector('.display');
buttons=document.querySelectorAll('button');
let screenvalue='';
        for(item of buttons){
            item.addEventListener('click',(e)=>{
                buttontext=e.target.innerText;
                console.log('muji', buttontext);
                if(buttontext=='C')
                {
                    screenvalue='';
                    Display.value=screenvalue; 
                }
                else if(buttontext=='='){
                    Display.value=eval(screenvalue);
                }
                else{
                    screenvalue +=buttontext;
                    Display.value=screenvalue;
                }
            })
        }
