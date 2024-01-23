const num1 = document.getElementById('input1')
const num2 = document.getElementById('input2')
const res = document.getElementById('result')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

plus.onclick = function() {
    let sum = Number(num1.value) + Number(num2.value)
    res.textContent = sum
}

minus.onclick = function() {
    let sum = Number(num1.value) - Number(num2.value)
    res.textContent = sum
}

// console.log(num1.value, num2.value)

// let sum = Number(num1.value) + Number(num2.value)

// res.textContent = sum

// console.log(sum)
