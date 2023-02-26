    // constants
    const n1 = document.getElementById("number1");
    const n2 = document.getElementById("number2");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const multiply = document.getElementById("multiply");
    const divide = document.getElementById("divide");
    const currentResult = document.getElementById("currentResult");
    const resultHistory =  document.getElementById("resultHistory")
    const history = [];
    
    // event Handlers
    plus.addEventListener("click", () => {
        calculate("+");

    })
    minus.addEventListener("click", () => {
        calculate("-");
    })
    multiply.addEventListener("click", () => {
        calculate("x");
    })
    divide.addEventListener("click", () => {
        calculate(":");
    })

    // functions:
    const calculate = (operation) => {
        const inp1 = validateInput(n1);
        const inp2 = validateInput(n2);
        let res = null;
        if ( inp1 && inp2 ){
            if (operation === "+"){
                res = inp1 + inp2;
            }
            else if (operation === "-"){
                res = inp1 - inp2;
            }
            else if (operation === "x"){
                res = inp1 * inp2;
            }
            else {
                res = inp1 / inp2;
            }

            updateHistory(inp1, inp2, res, operation);
            operation = null;
            // Update view
            renderCurrentResult(res);
            renderResultHistory();
        }
        else{
            alert("Die Berechnung konnte nicht durchgeführt werden. Bitte überprüfen Sie die Eingabe");
        }

    }

    const updateHistory = (num1, num2, res, operation) => {
        //add current calculation to history array
        const txt = `${num1} ${operation} ${num2} = ${res}`;
        history.push(txt);
    }

    const validateInput = (element) => {
        // validates the values of the input
        try{
            const inp = parseFloat(element.value);
            return inp
        }
        catch{
            return false;
        }

    }

    const renderResultHistory = ()  => {
        // update view of resultHistory
        resultHistory.innerText = null;
        history.forEach(element => {
            console.log(element);
            const p = document.createElement("p");
            p.innerText = element;
            resultHistory.appendChild(p);
        });
    }
    
    const renderCurrentResult = (res) => {
        // render view of current result
        currentResult.innerText = res;
    }