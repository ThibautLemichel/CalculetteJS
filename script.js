class Calculator {
    constructor() {
        this.display2 = document.querySelector('.display');
        this.display = document.querySelector('.display2');
        this.clearBtn = document.querySelector('.clear');
        this.parenthesisBtns = document.querySelectorAll('.parenthesis');
        this.operatorBtns = document.querySelectorAll('.operator');
        this.numberBtns = document.querySelectorAll('.number');
        this.equalsBtn = document.querySelector('.equals');
        this.commaBtn = document.querySelector('.comma');
        this.previousOperation = "";
      
        this.clearBtn.addEventListener('click', this.clear.bind(this));
        this.parenthesisBtns.forEach(btn => btn.addEventListener('click', this.parenthesis.bind(this)));
        this.operatorBtns.forEach(btn => btn.addEventListener('click', this.operator.bind(this)));
        this.numberBtns.forEach(btn => btn.addEventListener('click', this.number.bind(this)));
        this.equalsBtn.addEventListener('click', this.equals.bind(this));
        this.commaBtn.addEventListener('click', this.comma.bind(this));
    }
  
    clear() {
        this.display2.textContent = this.previousOperation;
        this.display.textContent = "";
    }
  
    parenthesis() {
        let value = this.display.textContent;
        if (value === "") {
            this.display.textContent = "(";
        } 
        else {
            let lastChar = value.slice(-1);
            if (lastChar === "(") {
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
        if (value === "") return;
        let lastChar = value.slice(-1);
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            this.display.textContent = value.slice(0, -1) + this.textContent;
        } 
        else {
            this.display.textContent = value + this.textContent;
        }
    }
  
    number() {
        let value = this.display.textContent;
        if (value === "0") {
            this.display.textContent = this.textContent;
        } 
        else {
            this.display.textContent = value + this.textContent;
        }
    }
  
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
  
let calculator = new Calculator();
  