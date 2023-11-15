function add(num1, num2) 
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    if (num2 == 0)
    {
        return "Error";
    }
    return num1 / num2;
}

function operate(operator, num1, num2)
{
    if (operator === "+")
    {
        return add(num1, num2);
    }
    else if (operator === "-")
    {
        return subtract(num1, num2);
    }
    else if (operator === "*")
    {
        return multiply(num1, num2);
    }
    else if (operator === "/")
    {
        return divide(num1, num2);
    }
}


window.onload = function() {

    buttons = document.querySelectorAll(".buttons");
    current = document.querySelector(".current");
    previous = document.querySelector(".previous");
    let display_current = "";
    let num1 = 0;
    let num2 = 0;
    let operator = "";

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() 
        {
            if (buttons[i].dataset.value === "clear")
            {
                num1 = "";
                num2 = "";
                operator = "";
                display_current = "";
                previous.innerHTML = "";
                current.innerHTML = "";
            }

            else if (buttons[i].dataset.value === "delete")
            {
                if (operator === "")
                {
                    display_current = display_current.slice(0, -1);
                    num1 = Number(display_current);
                    current.innerHTML = display_current;
                }
                else
                {
                    display_current = display_current.slice(0, -1);
                    num2 = Number(display_current);
                    current.innerHTML = display_current;
                    previous.innerHTML = num1 + " " + operator + " " + display_current;
                }
            }

            else if (buttons[i].dataset.value === "sign")
            {
                display_current += "-";
            }

            else if (buttons[i].dataset.value === "+")
            {
                if (num2 == 0)
                {
                    operator = "+";
                    previous.innerHTML = display_current + " " + operator;
                    display_current = "";
                }
                else
                {
                    num1 = operate(operator, num1, num2);
                    num2 = "";
                    operator = "+";
                    display_current = "";
                    current.innerHTML = num1;
                    previous.innerHTML = num1 + " " + operator;
                }
            }
            else if (buttons[i].dataset.value === "-")
            {
                if (num2 == 0)
                {
                    operator = "-";
                    previous.innerHTML = num1+ " " + operator;
                    display_current = "";
                }

                else
                {
                    num1 = operate(operator, num1, num2);
                    num2 = "";
                    operator = "-";
                    display_current = "";
                    current.innerHTML = num1;
                    previous.innerHTML =num1 + " " + operator;
                }
            }
            else if (buttons[i].dataset.value === "*")
            {
                if (num2 == 0)
                {
                    operator = "*";
                    previous.innerHTML = display_current + " " + operator;
                    display_current = "";
                }
                else
                {
                    num1 = operate(operator, num1, num2);
                    num2 = "";
                    operator = "*";
                    display_current = "";
                    current.innerHTML = num1;
                    previous.innerHTML = num1 + " " + operator;
                }
            }
            else if (buttons[i].dataset.value === "/")
            {
                if (num2 == 0)
                {
                    operator = "/";
                    previous.innerHTML = display_current + " " + operator;
                    display_current = "";
                }
                else
                {
                    num1 = operate(operator, num1, num2);
                    num2 = "";
                    operator = "/";
                    display_current = "";
                    current.innerHTML = num1;
                    previous.innerHTML = num1 + " " + operator;
                }
            }
            else if (buttons[i].dataset.value === "=")
            {
                num1 = operate(operator, num1, num2);
                display_current = String(num1);

                if (num1 === "Error")
                {
                    num1 = "";
                }
                num2 = "";
                operator = "";
                current.innerHTML = display_current;
                display_current = "";
            }

            else
            {
                if (operator === "")
                {
                    display_current += buttons[i].dataset.value;
                    current.innerHTML = display_current;
                    num1 = Number(display_current);
                }
                else
                {
                    display_current += buttons[i].dataset.value
                    current.innerHTML = display_current;
                    previous.innerHTML = num1 + " " + operator + " " + display_current;
                    num2 = Number(display_current);
                }  
            }
        });
    }
}