function generateRandomNumbers() {
    var num1 = Math.ceil(Math.random() * 20);
    var num2 = Math.ceil(Math.random() * 20);
    var num3 = Math.ceil(Math.random() * 20);

    document.getElementById("num1").innerHTML = "Cows: " + num1
    document.getElementById("num2").innerHTML = "Pigs: " + num2
    document.getElementById("num3").innerHTML = "Sheep: " + num3

    var biggestNum = [];
    if (num1 >= num2 && num1 >= num3) {
        biggestNum.push("Cows");
    }
    if (num2 >= num1 && num2 >= num3) {
        biggestNum.push("Pigs");
    }
    if (num3 >= num1 && num3 >= num2) {
        biggestNum.push("Sheep");
    }

    var num1Letter = String.fromCharCode(96 + num1);
    var totalMins = num2 * num3;
    var hours = Math.floor(totalMins / 60);
    var minutes = totalMins % 60;

    var mostText = "The pen that had the most animals is: ";
    if (biggestNum.length == 1) {
        mostText += biggestNum[0] + " (" + Math.max(num1, num2, num3) + ")";
    } else {
        mostText += biggestNum.join(", ") + " (" + Math.max(num1, num2, num3) + ")";
    }
    document.getElementById("Most").innerHTML = mostText;

    document.getElementById("Name").innerHTML = "The name of the biggest pig starts with the letter: " + num1Letter;
    document.getElementById("Time").innerHTML = "In total, the time it took to count all the animals was: (" + totalMins + " mins) " + hours + "hr " + minutes + "min";
}