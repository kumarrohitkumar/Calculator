// const { allColors } = require("winston/lib/winston/config");

const screen = document.getElementsByClassName('calculator-screen')[0];
const button = document.querySelectorAll('button');
let string = "";
button.forEach((number) => {

    number.addEventListener('click', (event) => {
        let value = event.target.value;
        if (value == '=') {
            if (string == "") {
                screen.value = '';
            }
            else
            // screen.value = eval(string);\
            {
                try {
                    screen.value = eval(string);
                    string = screen.value; // To allow for chaining operations
                } catch (error) {
                    // alert("this is error ");
                    screen.value = "Error";
                    string = "";
                }
            }
        }
        else if (value == "sqrt") {
            string = Math.sqrt((string));
            alert(string);
            screen.value = string;
        }
        else if (value == 'C') {
            string = string.toString().slice(0, -1);
            screen.value = string;
        }
        else if (value == 'all-clear') {
            screen.value = ""
        }
        else {
            string += value;
            screen.value += value;
            // alert(screen.value);
        }
    })
})