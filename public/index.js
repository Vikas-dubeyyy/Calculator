function isNumber(num){
    switch (num) {
        case "0":
            return true;
            break;    
        case "1":
            return true;
            break;
        case "2":
            return true;
            break;
        case "3":
            return true;
            break;
        case "4":
            return true;
            break;
        case "5":
            return true;
            break;
        case "6":
            return true;
            break;
        case "7":
            return true;
            break;
        case "8":
            return true;
            break;
        case "9":
            return true;
            break;
        case "0":
            return true;
            break;
        case ".":
            return true;
            break;            
        default:
            return false;
            break;
    }
}
function isValidFirstOperand(operand){
    switch (operand) {
        case "lognx":
            return true;
            break;
        case "ln x":
            return true;
            break;
        case "sin":
            return true;
            break;
        case "cos":
            return true;
            break;
        case "tan":
            return true;
            break;
        case "n√x":
            return true;
            break;
        case "xn":
            return true;
            break;                
        default:
            return false;
            break;
    }
}


function isAC(key){
    if(key=="AC"){
        return true;
    }
    return false;
}

function calculate2(num1,num2,op){
    var a=parseFloat(num1);
    var b=parseFloat(num2);
    switch (op) {
        case "+":
            return a+b;
            break;    
        case "-":
            return a-b;
            break;
        case "*":
            return a*b;
            break;
        case "/":
            return a/b;
            break;    
        default:
            calError=true;
            return 0;
            break;
    }
}

function calculate1(num,op,m){
    var a=parseFloat(num);
    var x=parseFloat(m);
    switch (op) {
        case "lognx":
            return Math.log(a)/Math.log(x);
            break;
        case "n√x":
            return Math.pow(a,1/x);
            break;
        case "xn":
            return Math.pow(a,x);
            break;                
        default:
            calError=true;
            return 0;
            break;
    }
}

function isnOperand(op){
    switch (op) {
        case "lognx":
            return true;
            break;
        case "n√x":
            return true;
            break;
        case "xn":
            return true;
            break;                
        default:
            return false;
            break;
    }
}

function isOtherOperand(op){
    switch (op) {
        case "sin":
            return true;
            break;
        case "cos":
            return true;
            break;
        case "tan":
            return true;
            break;
        case "ln x":
            return true;
            break;                    
        default:
            return false;
            break;
    }
}

function otherOp(num,op){
    var a=parseFloat(num)
    switch (op) {
        case "sin":
            return Math.sin(a*(Math.PI/180));
            break;
        case "cos":
            return Math.cos(a*(Math.PI/180));
            break;
        case "tan":
            return Math.tan(a*(Math.PI/180));
            break;
        case "ln x":
            return Math.log(a);
            break;                    
        default:
            return false;
            break;
    }
}

var number1="";          // For two numbers
var isNumber1=true;      // For two numbers
var isNum1Start=false;
var isNumber2=false;     // For two numbers
var isNum2Start=false;
var number2="";          // For two numbers
var operand="";
var wasOperand=false;          
var start=false;         // start flag to check if operand is inserted first
var calError=false;      // Error indicator
var n="";                 // For lognx, x^n, n√x
var isn=false;           // Whether we want to write n  
var isnStart=false;
var onlyNumber="";       // For sin, cos, log, etc....
var isOnlyNumberStart=false;
var oneNumberOp=false;   // For one number operation
var answer=false;        // For final answer
var finalAnswer;         // Final answer after calculation



var keys = document.querySelectorAll(".key");
for(var i=0;i<49;i++){
    keys[i].addEventListener("click",function(){
      var key_content=this.textContent;
      // Providing Number 1 
      if (isNumber(key_content) && isNumber1 && oneNumberOp==false){
        number1+=key_content;
        start=true;
        isNum1Start=true;
        isNum2Start=false;
        isOnlyNumberStart=false;
        isnStart=false;
        wasOperand=false;
      }
      // Providing Number 2
      else if(isNumber(key_content) && isNumber1==false && oneNumberOp==false){
        number2+=key_content;
        isNum1Start=false;
        isNum2Start=true;
        isOnlyNumberStart=false;
        isnStart=false;
        wasOperand=false;
      }
      // Providing only Number for one number operations
      else if(isNumber(key_content) && oneNumberOp && isn == false){
        onlyNumber+=key_content;
        start=true;
        isNum1Start=false;
        isNum2Start=false;
        isOnlyNumberStart=true;
        isnStart=false;
        wasOperand=false;
      }
      // Providing value of n
      else if(isn && isNumber(key_content) && oneNumberOp){
        n+=key_content;
        isNum1Start=false;
        isNum2Start=false;
        isOnlyNumberStart=false;
        isnStart=true;
        wasOperand=false;
      }
      // Condition for = operator
      else if(key_content== "=" && start){
        if(!oneNumberOp){
            finalAnswer=Number((calculate2(number1,number2,operand)).toFixed(6));
            answer=true;
        }
        else{
            if(isnOperand(operand)){
                finalAnswer=Number((calculate1(onlyNumber,operand,n)).toFixed(6));
                answer=true;
            }
            else if(isOtherOperand(operand)){
                finalAnswer=Number((otherOp(onlyNumber,operand)).toFixed(6));
                answer = true;
            }
        }
      }
      else if(key_content=="n"){
        isn=true;
        document.querySelectorAll(".key_equal")[0].textContent="=";
        document.querySelectorAll(".key_equal")[1].textContent="=";
      }
      // AC
      else if(isAC(key_content)){
        number1="";          
        isNumber1=true;      
        isNumber2=false;     
        number2="";          
        operand="";          
        start=false;         
        calError=false;      
        n="";                  
        isn=false;              
        onlyNumber="";       
        oneNumberOp=false;   
        isNum1Start=false;
        isNum2Start=false;
        isOnlyNumberStart=false;
        isnStart=false;
        wasOperand=false;  
        answer=false;        
      }
      // DEL
      else if(key_content=="DEL"){
        if(isNum1Start && isNumber1){
            number1 = number1.slice(0, -1);
            if(number1=="")
            {
                isNum1Start=false;
            }
        }
        else if(isNumber2 && isNum2Start){
           number2 = number2.slice(0,-1);
           if(number2=="")
            {
                isNum2Start=false;
            } 
        }
        else if(wasOperand){
            operand="";
            if(oneNumberOp){
                start=false;
                oneNumberOp=false;
            }
            wasOperand=false;
            isNumber2=false;
        }
        else if(isOnlyNumberStart && oneNumberOp){
            onlyNumber=onlyNumber.slice(0,-1);
            if(onlyNumber==""){
                isOnlyNumberStart=false;
            }
        }
        else if(isnStart && oneNumberOp){
            n=n.slice(0,-1);
            if(n==""){
                isnStart=false;
            }
        }
        else{
            calError=true;
            number1="";
            isNumber1=true;
            isNumber2=false;
            number2="";
            operand="";
            start=false;
            n="";
            isn=false;
            onlyNumber="";
            oneNumberOp=false;
            isNum1Start=false;
            isNum2Start=false;
            isOnlyNumberStart=false;
            isnStart=false;
            answer=false;
            wasOperand=false;
            document.querySelectorAll(".key_equal")[0].textContent="=";
            document.querySelectorAll(".key_equal")[1].textContent="=";
        }   
      }
      else{
        // Add isValidInitialOperand functionality
        if(isNumber2 == false && start && oneNumberOp==false){
            operand+=key_content;
            isNumber1=false;
            isNumber2=true;
            isNum1Start=false;
            isNum2Start=false;
            isOnlyNumberStart=false;
            isnStart=false;
            wasOperand=true;

        }
        else if(start == false && isValidFirstOperand(key_content) && oneNumberOp==false){
                oneNumberOp=true;
                operand+=key_content;
                start=true;
                isNum1Start=false;
                isNum2Start=false;
                isOnlyNumberStart=false;
                isnStart=false;
                wasOperand=true;
                if(isnOperand(key_content)){
                    document.querySelectorAll(".key_equal")[0].textContent="n";
                    document.querySelectorAll(".key_equal")[1].textContent="n";
                }
        }
        else{
            //Displaying error message
            calError=true;
            number1="";
            isNumber1=true;
            isNumber2=false;
            number2="";
            operand="";
            start=false;
            n="";
            isn=false;
            onlyNumber="";
            oneNumberOp=false;
            isNum1Start=false;
            isNum2Start=false;
            isOnlyNumberStart=false;
            isnStart=false;
            answer=false;
            wasOperand=false;
            document.querySelectorAll(".key_equal")[0].textContent="=";
            document.querySelectorAll(".key_equal")[1].textContent="=";
        }
      }        
    // console.log(number1);
    // console.log(number2);
    // console.log(operand);
    if(calError){
        document.querySelectorAll(".key_space")[0].textContent="ERROR";
        document.querySelectorAll(".key_space")[1].textContent="ERROR";
        calError=false;   
    }
    else if(answer){
        document.querySelectorAll(".key_space")[0].textContent=finalAnswer;
        document.querySelectorAll(".key_space")[1].textContent=finalAnswer;
        answer=false;
        number1="";
        isNumber1=true;
        isNumber2=false;
        number2="";
        operand="";
        start=false;
        n="";
        onlyNumber="";
        oneNumberOp=false;
        isNum1Start=false;
        isNum2Start=false;
        isOnlyNumberStart=false;
        isnStart=false;
        wasOperand=false;
        isn=false;
        calError=false;
    }
    else if(oneNumberOp){
        if(isn){
            document.querySelectorAll(".key_space")[0].textContent=operand+" : x= "+onlyNumber+"  n= "+n;
            document.querySelectorAll(".key_space")[1].textContent=operand+" : x= "+onlyNumber+"  n= "+n;
        }
        else{
            document.querySelectorAll(".key_space")[0].textContent=operand+" : x= "+onlyNumber;
            document.querySelectorAll(".key_space")[1].textContent=operand+" : x= "+onlyNumber;
        }
    }
    else{
        document.querySelectorAll(".key_space")[0].textContent=number1+" "+operand+" "+number2;
        document.querySelectorAll(".key_space")[1].textContent=number1+" "+operand+" "+number2;
    }
    });
  }
