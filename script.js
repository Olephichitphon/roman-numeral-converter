const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

/**
 * Main Logic: Converts decimal to Roman numeral strings
 * Uses a greedy algorithm by iterating through a reference table from largest to smallest.
 */
const convertToRoman = (num) => {
    /// Mapping of decimal values to their corresponding Roman symbols
    const ref = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];

    const res = [];

    ref.forEach((arr) => {
        // Keep appending the symbol as long as the remaining number is larger than its value
        while (num >= arr[1]) {
            res.push(arr[0]);// Append the Roman symbol to the result array
            num -= arr[1];// Subtract the value from num as it has been converted
        }
    });

    return res.join("");
};

const checkUserInput = () => {
    // Convert input string to an integer
    const inputInt = parseInt(numberInput.value);

    // 1. Check if input is empty or not a number
    if (!numberInput.value || isNaN(inputInt)) {
        output.textContent = "Please enter a valid number";
        return; // Stop execution
    }

    // 2. Check if number is less than 1
    if (inputInt < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return; // Stop execution
    }

    // 3. Check if number is 4000 or more (Roman numeral limit for this app)
    if (inputInt >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return; // Stop execution
    }

    // If all checks pass, display the conversion result
    output.textContent = convertToRoman(inputInt);

    // Clear the input field for the next entry
    numberInput.value = "";
};

// Trigger conversion when the button is clicked
convertBtn.addEventListener("click", checkUserInput);

// (Optional) Trigger conversion when the "Enter" key is pressed
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
})

