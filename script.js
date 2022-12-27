function toScreen(num){
    let screen = document.querySelector('.screen');     
    console.log(screen.textContent);
    if (screen.textContent=="0") screen.textContent="";
    console.log(screen.textContent);   
    screen.textContent+=num;    
};


function prsNumb(num){
    

    toScreen(num.target.textContent);
    
    //console.log(num.target.textContent);
};

function resetScreen(){
    let screen = document.querySelector('.screen');      
    let theLastNumber=0;
    
    theLastNumber=screen.textContent;
    screen.textContent=0;
    return theLastNumber; 
}

function prsSymb(num){
    const numOnScreen = document.querySelector('.screen');
    
    switch (num.target.textContent){
        case '+':
        case '-':
        case '/':
        case '*': 
        case '%': 
            lastOperator = num.target.textContent;            
            lastNumber=resetScreen();            
            
        break;
        case '=':
            let result=operate(lastNumber,numOnScreen.textContent,lastOperator);            
            resetScreen();
            toScreen(+result);           

        break;
        case 'C':
            resetScreen();
            lastNumber=0;
        break;
        case 'Bck':
            numOnScreen.textContent=numOnScreen.textContent.slice(0,-1);
        break;
    };
   
   
    //console.log(num.target.textContent);
};

function operate(numA,numB,operator){
    numA=+numA;
    numB=+numB;
    switch (operator){
        case '+':
            return numA+numB;
        break;
        case '-':
            return numA-numB;
        break;
        case '*':
            return numA*numB;
        break;
        case '/':
            return numA/numB;
        break;
    };
};


let lastOperator = '';
let lastNumber=0;
const numbs = document.querySelectorAll('.BtnNumber');
numbs.forEach( num =>{
    num.addEventListener('click', prsNumb);    
});

const symbs = document.querySelectorAll('.BtnSymbol');
symbs.forEach( sym =>{
    sym.addEventListener('click', prsSymb);    
});

    