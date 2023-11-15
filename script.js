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

    buttons = document.querySelectorAll("buttons");
    display = document.querySelector("display");
    let num1 = "";
    let num2 = "";
    let operator = "";

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() 
        {
            if (buttons[i].value === "clear")
            {
                num1 = "";
                num2 = "";
                operator = "";
            }
            else if (buttons[i].value === "add")
            {
                operator = "+";
            }
            else if (buttons[i].value === "subtract")
            {
                operator = "-";
            }
            else if (buttons[i].value === "multiply")
            {
                operator = "*";
            }
            else if (buttons[i].value === "divide")
            {
                operator = "/";
            }
            else if (buttons[i].value === "equals")
            {
                num1 = operate(operator, num1, num2);
                num2 = "";
                operator = "";
            }
            else
            {
                if (operator === "")
                {
                    num1 += buttons[i].value;
                }
                else
                {
                    num2 += buttons[i].value;
                }
            }
        });
    }
}