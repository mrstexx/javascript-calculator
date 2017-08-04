var result = 0;
var screen = $('.num');
var isTrue = true;
var op = "";
var comma = true;

$('td').on('click', function () {

    var input = $(this).text();
    var screenText = $('.num').text();
    
    if (input == "CE") {
        screen.text("0");
        isTrue = true;
        comma = true;
    } else if (input == "C") {
        op = "";
        result = 0;
        screen.text("0");
        isTrue = true;
        comma = true;
    } else if (input == "+") {
        calculate(parseFloat(screenText), "+");
    } else if (input == "-") {
        calculate(parseFloat(screenText), "-");
    } else if (input == "\u00f7") {
        calculate(parseFloat(screenText), "/");
    } else if (input == "x") {
        calculate(parseFloat(screenText), "*");
    } else if (input == ".") {
        if (comma) {
            $('.num').text(screenText + input);
            comma = false;
        }
    } else if (input == "=") {
        calculate(parseFloat(screenText), "=");
    } else {
        if (screenText.length >= 11) {
            screen.text("Digit Limit");
        } else {
            if (isTrue) {
                screen.text(input);
                isTrue = false;
            } else {
                $('.num').text(screenText + input);
            }
        }
    }
});

function calculate(num, operation) {

    isTrue = true;
    comma = true;

    switch (op) {
        case "+":
            result += num;
            break;
        case "-":
            result -= num;
            break;
        case "/":
            result /= num;
            break;
        case "*":
            result *= num;
            break;
        default:
            result = num == 0 ? result : num;
    }

    op = operation == "=" ? "" : operation;
    
    var scrtxt = result + "";
    if (scrtxt.length > 11) {
        screen.text(scrtxt.substr(0, 11));
    } else {
        screen.text(scrtxt);
    }

}