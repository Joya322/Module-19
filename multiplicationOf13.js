// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

function thirteenMultiplication() {
    for (i = 1; i <= 10; i++){
        console.log("13 X " + i + " = " + i * 13);
    }
}

thirteenMultiplication();