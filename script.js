function calculateSum() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    var big = Math.max(num1, num2);
    var small = Math.min(num1, num2);

    var result = (0.8 * big) + (0.2 * small);

    document.getElementById('result').innerText = "Result: " + result.toFixed(2);
}
