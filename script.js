class Calculator {
    constructor() {
        this.display2 = document.querySelector('.display');
        this.display = document.querySelector('.display2');
        this.clearBtn = document.querySelector('.clear');
        this.parenthesisBtns = document.querySelectorAll('.parenthesis');
        this.equalsBtn = document.querySelector('.equals');
        this.commaBtn = document.querySelector('.comma');
        this.previousOperation = "";
        this.number0 = document.querySelector('.n0');
        this.number1 = document.querySelector('.n1');
        this.number2 = document.querySelector('.n2');
        this.number3 = document.querySelector('.n3');
        this.number4 = document.querySelector('.n4');
        this.number5 = document.querySelector('.n5');
        this.number6 = document.querySelector('.n6');
        this.number7 = document.querySelector('.n7');
        this.number8 = document.querySelector('.n8');
        this.number9 = document.querySelector('.n9');
        this.minus = document.querySelector('.minus');
        this.plus = document.querySelector('.plus');
        this.mod = document.querySelector('.mod');
        this.div = document.querySelector('.div');
        this.times = document.querySelector('.times');
      
        this.clearBtn.addEventListener('click', this.clear.bind(this));
        this.parenthesisBtns.forEach(btn => btn.addEventListener('click', this.parenthesis.bind(this)));
        this.equalsBtn.addEventListener('click', this.equals.bind(this));
        this.commaBtn.addEventListener('click', this.comma.bind(this));
        this.number0.addEventListener('click', this.num0.bind(this));
        this.number1.addEventListener('click', this.num1.bind(this));
        this.number2.addEventListener('click', this.num2.bind(this));
        this.number3.addEventListener('click', this.num3.bind(this));
        this.number4.addEventListener('click', this.num4.bind(this));
        this.number5.addEventListener('click', this.num5.bind(this));
        this.number6.addEventListener('click', this.num6.bind(this));
        this.number7.addEventListener('click', this.num7.bind(this));
        this.number8.addEventListener('click', this.num8.bind(this));
        this.number9.addEventListener('click', this.num9.bind(this));
        this.minus.addEventListener('click', this.mminus.bind(this));
        this.plus.addEventListener('click', this.pplus.bind(this));
        this.mod.addEventListener('click', this.mmod.bind(this));
        this.div.addEventListener('click', this.ddiv.bind(this));
        this.times.addEventListener('click', this.ttimes.bind(this));
    }
  
    clear() {
        this.display2.textContent = this.previousOperation;
        this.display.textContent = "";
    }
  
    parenthesis() {
        let value = this.display.textContent;
        console.log("parenthese")
        if (value === "") {
            this.display.textContent = "(";
        } 
        else {
            let lastChar = value.slice(-1);
            if (lastChar === "(" | lastChar === "+"| lastChar === "%"| lastChar === "-"| lastChar === "*"| lastChar === "/") {
                this.display.textContent = value + "(";
            } 
            else if (lastChar === ")") {
                this.display.textContent = value + "*(";
            } 
            else {
                this.display.textContent = value + ")";
            }
        }
    }
  
    operator() {
        let value = this.display.textContent;
        console.log("operator")
        if (value === "") return;
        let lastChar = value.slice(-1);
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            this.display.textContent = value.slice(0, -1) + '-';
        } 
        else {
            this.display.textContent = value + this.textContent;
        }
    }

    //#region opertor   
    mminus() {
        let value = this.display.textContent;
        console.log("minus")
        if (value === "") return;
        let lastChar = value.slice(-1);
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            this.display.textContent = value.slice(0, -1) + '-';
        } 
        else {
            this.display.textContent = value + '-';
        }
    }

    mmod() {
        let value = this.display.textContent;
        console.log("mod")
        if (value === "") return;
        let lastChar = value.slice(-1);
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            this.display.textContent = value.slice(0, -1) + '%';
        } 
        else {
            this.display.textContent = value + '%';
        }
    }

    ttimes() {
        let value = this.display.textContent;
        console.log("times")
        if (value === "") return;
        let lastChar = value.slice(-1);
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            this.display.textContent = value.slice(0, -1) + '*';
        } 
        else {
            this.display.textContent = value + '*';
        }
    }

    ddiv() {
        let value = this.display.textContent;
        console.log("mod")
        if (value === "") return;
        let lastChar = value.slice(-1);
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            this.display.textContent = value.slice(0, -1) + '/';
        } 
        else {
            this.display.textContent = value + '/';
        }
    }

    pplus() {
        let value = this.display.textContent;
        console.log("mod")
        if (value === "") return;
        let lastChar = value.slice(-1);
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            this.display.textContent = value.slice(0, -1) + '+';
        } 
        else {
            this.display.textContent = value + '+';
        }
    }
    //#endregion
    number() {
        let value = this.display.textContent;
        console.log("number")
        if (value === "0") {
            this.display.textContent = this.textContent;
        } 
        else {
            this.display.textContent = value + this.textContent;
            console.log(this.textContent);
        }
    }
    //#region number
    num0(){
        let value = this.display.textContent;
        if (value === "0") {
            this.display.textContent = 0;
        } 
        else {
            this.display.textContent = value + 0;
            console.log(this.textContent);
        }
    }

    num1(){
        let value = this.display.textContent;
        if (value === "0") {
            this.display.textContent = 1;
        } 
        else {
            this.display.textContent = value + 1;
            console.log(this.textContent);
        }
    }

    num2(){
        let value = this.display.textContent;
        if (value === "0") {
            this.display.textContent = 2;
        } 
        else {
            this.display.textContent = value + 2;
            console.log(this.textContent);
        }
    }
    num3(){
        let value = this.display.textContent;
        if (value === "0") {
            this.display.textContent = 3;
        } 
        else {
            this.display.textContent = value + 3;
            console.log(this.textContent);
        }
    }
    num4(){
        let value = this.display.textContent;
        if (value === "0") {
            this.display.textContent = 4;
        } 
        else {
            this.display.textContent = value + 4;
            console.log(this.textContent);
        }
    }
    num5(){
        let value = this.display.textContent;
        if (value === "0") {
            this.display.textContent = 5;
        } 
        else {
            this.display.textContent = value + 5;
            console.log(this.textContent);
        }
    }
    num6(){
        let value = this.display.textContent;
        if (value === "0") {
            this.display.textContent = 6;
        } 
        else {
            this.display.textContent = value + 6;
            console.log(this.textContent);
        }
    }
    num7(){
        let value = this.display.textContent;
        if (value === "0") {
            this.display.textContent = 7;
        } 
        else {
            this.display.textContent = value + 7;
            console.log(this.textContent);
        }
    }
    num8(){
        let value = this.display.textContent;
        if (value === "0") {
            this.display.textContent = 8;
        } 
        else {
            this.display.textContent = value + 8;
            console.log(this.textContent);
        }
    }
    num9(){
        let value = this.display.textContent;
        if (value === "0") {
            this.display.textContent = 9;
        } 
        else {
            this.display.textContent = value + 9;
            console.log(this.textContent);
        }
    }
    //#endregion
  
    equals() {
        let value = this.display.textContent;
        if (value === "") return;
        this.previousOperation = value;
        let result = eval(value);
        this.display2.textContent = result;
        this.display.textContent = "";
    }
  
    comma() {
        let value = this.display.textContent;
        if (value === "") {
            this.display.textContent = "0.";
        } 
        else if (!value.includes(".")) {
            this.display.textContent = value + ".";
        }
    }
}

let c = new Calculator();
 
class basedCalculator {
    constructor (){

    }
    addToInput(charClicked) {
        document.getElementById(".display").value += charClicked;
      }
      
    clearInput() {
        document.getElementById("input").value = "";
      }
      
    computeResult() {
        var input = document.getElementById("input").value;
        try {
          var result = eval(input);
          document.getElementById("result").value = input + " = " + result;
        } catch {
          document.getElementById("result").value = 'Error'
        }
        clearInput();
      }
}
  