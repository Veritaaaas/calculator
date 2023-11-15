//functions that performs the arithmetic operations
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

//function that calls the arithmetic functions based on the operator
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

    //declaring the variables
    buttons = document.querySelectorAll(".buttons");
    current = document.querySelector(".current");
    previous = document.querySelector(".previous");
    let display_current = "";
    let num1 = 0;
    let num2 = 0;
    let operator = "";

    for (let i = 0; i < buttons.length; i++) {
        //add a click event listener to each button
        buttons[i].addEventListener("click", function() 
        {
            //clear all the values
            if (buttons[i].dataset.value === "clear")
            {
                num1 = "";
                num2 = "";
                operator = "";
                display_current = "";
                previous.innerHTML = "";
                current.innerHTML = "";
            }

            //delete the last inputted value
            else if (buttons[i].dataset.value === "delete")
            {
                //checks if the value being input is num1 or num2
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

            //changes the sign of the number
            else if (buttons[i].dataset.value === "sign")
            {
                display_current += "-";
            }

            //checks if the operation is addition
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

            //checks if the operation is subtraction
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

            //checks if the operation is multiplication
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

            //checks if the operation is division
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

            //checks if the operation is equals
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

            //display and save the value of the number being input by the user
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