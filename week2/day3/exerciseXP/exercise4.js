// 最终流程是这样的：

// 用户输入半径 →
// 点击 Calculate →
// JS 计算体积 →
// 自动填入 Volume 输入框

// 这道题在训练什么？

// 它其实在训练：
// 	•	获取 input 的 value
// 	•	数字计算
// 	•	Math 对象
// 	•	表单提交事件
// 	•	修改 input 的 value

// 👉 如何用 JS 读取用户输入
// 👉 如何计算
// 👉 如何把结果显示回页面

//first: select form
let form = document.getElementById("MyForm");

//1. Select the input element 	2.	Use .value 	3.	Do it inside submit event 	4.	Use event.preventDefault()

let radiusInput = document.getElementById("radius");
let volumnInput = document.getElementById("volume");

//listen to submit
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid number");
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    volumnInput.value = volume.toFixed(2);

});

