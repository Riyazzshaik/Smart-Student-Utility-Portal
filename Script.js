// VALIDATION
function validateForm() {
    let name = name.value;
    let mobile = mobile.value;
    let email = email.value;

    let nameP = /^[A-Za-z][A-Za-z0-9]{5,}$/;
    let mobP = /^[0-9]{10}$/;
    let mailP = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    if (!nameP.test(name)) return alert("Invalid Name"), false;
    if (!mobP.test(mobile)) return alert("Invalid Mobile"), false;
    if (!mailP.test(email)) return alert("Invalid Email"), false;

    formOutput.innerHTML = "✅ Registered Successfully";
    return false;
}

// FACTORIAL
function factorial() {
    let n = num.value, f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    output.innerHTML = f;
}

// FIBONACCI
function fibonacci() {
    let n = num.value, a = 0, b = 1, res = "0 1 ";
    for (let i = 2; i < n; i++) {
        let c = a + b;
        res += c + " ";
        a = b; b = c;
    }
    output.innerHTML = res;
}

// PRIME
function prime() {
    let n = num.value, res = "";
    for (let i = 2; i <= n; i++) {
        let flag = true;
        for (let j = 2; j < i; j++)
            if (i % j === 0) flag = false;
        if (flag) res += i + " ";
    }
    output.innerHTML = res;
}

// PALINDROME
function palindrome() {
    let n = num.value;
    let rev = n.split("").reverse().join("");
    output.innerHTML = (n == rev) ? "Palindrome" : "Not Palindrome";
}

// ARMSTRONG
function armstrong() {
    let n = num.value, temp = n, sum = 0;
    while (temp > 0) {
        let d = temp % 10;
        sum += d*d*d;
        temp = Math.floor(temp/10);
    }
    output.innerHTML = (sum == n) ? "Armstrong" : "Not Armstrong";
}

// CALCULATOR
function calc(op) {
    let a = parseFloat(n1.value);
    let b = parseFloat(n2.value);
    let r;

    if (op == '+') r = a + b;
    if (op == '-') r = a - b;
    if (op == '*') r = a * b;
    if (op == '/') r = a / b;

    calcOutput.innerHTML = r;
}

// CGPA
function cgpa() {
    let avg = (s1.value*1 + s2.value*1 + s3.value*1)/3;
    cgpaOutput.innerHTML = avg.toFixed(2);
}

// NOTES
function addNote() {
    let li = document.createElement("li");
    li.innerText = noteInput.value;
    notesList.appendChild(li);
}

// CLOCK
setInterval(() => {
    clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);

// DARK MODE
function toggleMode() {
    document.body.classList.toggle("dark");
}
